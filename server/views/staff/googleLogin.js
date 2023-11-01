import axios from "axios";
import jwt from "jsonwebtoken";
import { User } from "../../models/user.js";
import { Path, KeyValuePairs } from "../../models/learningPath.js";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleAuthUri = process.env.GOOGLE_AUTH_URL;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;
const tokenSecret = process.env.TOKEN_SECRET;

const jwtTokenFunc = async (res, user) => {
  const token = jwt.sign({ userId: user.id }, tokenSecret, {
    expiresIn: "3600s",
  });
  try {
    const tokens = {
      accessToken: token,
      username: user.name,
      email: user.email,
      username: user.name,
      longestStreak: user.longestStreak,
      currentStreak: user.currentStreak,
    };
    let accType = ["isT", "isM"];
    if (user.isAdmin) {
      tokens.isAdmin = user.isAdmin;
      accType.push("isA", "isS");
    } else {
      tokens.isStaff = user.isStaff;
      accType.push("isS");
    }
    tokens.accType = accType;
    const jobsArr = await KeyValuePairs.findOne({ where: { key: "jobs" } });
    tokens.jobsArr = jobsArr && jobsArr.value;
    return res.status(200).json(tokens);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const googleLogin = async (req, res) => {
  const { code } = req.body;
  const data = {
    code: code,
    client_id: googleClientId,
    client_secret: googleClientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };
  await axios
    .post(googleAuthUri, data)
    .then(async (response) => {
      const idToken = response.data.id_token;
      const credDict = {};
      const streakDate = new Date().toLocaleDateString();
      const staffInfo = jwt.decode(idToken);
      credDict.email = staffInfo.email;
      const staffEmail = credDict.email;
      const adminId = `${process.env.ADMIN_ID}`;
      const staffId = `${process.env.STAFF_ID_END}`;
      if (staffEmail.includes(staffId)) {
        await User.findOne({ where: { email: staffEmail } })
          .then(async (user) => {
            if (user) {
              const lastLogin = user.lastLogin;
              const duration =
                (new Date(streakDate).getTime() -
                  new Date(lastLogin).getTime()) /
                1000 /
                3600;
              if (duration === 24) {
                var currentStreak = Number(user.currentStreak) + 1;
                var oldLongestStreak = Number(user.longestStreak);
                var longestStreak =
                  currentStreak > oldLongestStreak
                    ? currentStreak
                    : oldLongestStreak;
                await user
                  .update({
                    lastLogin: streakDate,
                    longestStreak: longestStreak,
                    currentStreak: currentStreak,
                  })
                  .then(async () => {
                    await jwtTokenFunc(res, user);
                  })
                  .catch((error) => {
                    return res.status(400).json({ error: error.message });
                  });
              } else if (duration > 48) {
                await user
                  .update({
                    lastLogin: streakDate,
                    currentStreak: 1,
                  })
                  .then(async () => {
                    await jwtTokenFunc(res, user);
                  })
                  .catch((error) => {
                    return res.status(400).json({ error: error.message });
                  });
              } else {
                await jwtTokenFunc(res, user);
              }
            } else {
              credDict.dateOfJoin = new Date().toISOString();
              credDict.streakDate = streakDate;
              credDict.isNew = true;
              credDict.isActive = true;
              credDict.longestStreak = 1;
              credDict.currentStreak = 1;
              if (staffEmail === adminId) {
                credDict.isAdmin = true;
                credDict.isStaff = true;
              } else if (staffEmail.includes(staffId)) {
                credDict.isStaff = true;
                credDict.isAdmin = false;
              }
              await User.create(credDict)
                .then(async (newUser) => {
                  await Path.findOne({ where: { talentId: 2023 } })
                    .then(async (path) => {
                      await Path.create({
                        talentId: newUser.id,
                        treeData: path.treeData,
                        tips: path.tips,
                        resources: path.resources,
                        keys: path.keys,
                        skills: path.skills,
                        points: path.points,
                      })
                        .then(() => jwtTokenFunc(res, newUser))
                        .catch((error) => {
                          res.status(400).json({ message: error.message });
                        });
                    })
                    .catch((error) => {
                      res.status(400).json({ message: error.message });
                    });
                })
                .catch((error) => {
                  res.status(400).json({
                    error: error.message,
                  });
                });
            }
          })
          .catch((error) => {
            res.status(400).json({
              error: error.message,
            });
          });
      } else {
        return res.status(401).json({
          message: `Bummer:/ , ${staffEmail} is not authorized to staff login.`,
        });
      }
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};
