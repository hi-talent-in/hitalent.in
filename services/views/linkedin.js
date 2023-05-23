import axios from "axios";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import qs from "qs";
import { User } from "../models/user.js";
import { Path } from "../models/learningPath.js";
import { removeTreeData } from "../views/dashboard/functions/removeTreeData.js";
import { updateObject } from "./dashboard/functions/updateObject.js";
import { filterTreeData } from "./dashboard/functions/filterTreeDataByKey.js";
import { getKeys } from "./dashboard/functions/getKeys.js";
import { removeEmptyObject } from "./dashboard/functions/removeEmptyObjects.js";

const SECRET_KEY = process.env.TOKEN_SECRET;

const filterHelper = (defaultPath, path, whatToFilter) => {
  let defaultList = JSON.parse(defaultPath[whatToFilter]);
  let currentList = JSON.parse(path[whatToFilter]);
  let defaultKeys = Object.keys(defaultList);
  let currentKeys = Object.keys(currentList);
  if (whatToFilter === "points" && Object.keys(defaultList).length > 0) {
    for (const q in defaultList) {
      currentList[q] = defaultList[q];
    }
  } else {
    const filterPKeys = defaultKeys.filter((item) => {
      if (currentKeys.includes(item) === false) {
        return true;
      }
      return false;
    });
    if (filterPKeys.length > 0) {
      for (const q of filterPKeys) {
        currentList[q] = defaultList[q];
      }
    }
  }
  return currentList;
};

const jwtTokenFunc = async (res, user) => {
  try {
    const token = jwt.sign(
      {
        userId: user.id,
      },
      SECRET_KEY,
      { expiresIn: "3600s" }
    );
    const tokens = {
      accessToken: token,
      username: user.name,
      email: user.email,
      longestStreak: user.longestStreak,
      currentStreak: user.currentStreak,
    };
    if (user.isNew) {
      tokens.isNew = user.isNew;
    }
    if (user.talentType) {
      tokens.talentType = user.talentType;
    }
    let accType = [];
    if (user.isAdmin) {
      accType.push("isA", "isS", "isT", "isM");
      tokens.isAdmin = user.isAdmin;
    } else if (user.isStaff) {
      accType.push("isS", "isT", "isM");
      tokens.isStaff = user.isStaff;
    } else if (user.isMentor) {
      accType.push("isM", "isT");
      tokens.isMentor = user.isMentor;
    } else if (user.isTalent) {
      accType.push("isT");
      tokens.isTalent = user.isTalent;
    }
    tokens.accType = accType;
    return res.status(200).json({
      tokens: tokens,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// create talent or update talent on login then get tokens
const validator = async (req, res, data) => {
  const decoded = jwt_decode(data.id_token);
  const currentDate = new Date().toISOString();
  const streakDateList = new Date().toLocaleDateString().split("/");
  let streakDate = `${streakDateList[1]}/${streakDateList[0]}/${streakDateList[2]}`;
  const staffId = `${process.env.STAFF_ID_END}`;
  if ("email" in decoded) {
    const decodedEmail = decoded.email;
    if (decodedEmail.includes(staffId)) {
      return res
        .status(401)
        .json({ message: `Bummer:/ , Staff has Google login access only.` });
    } else {
      const user = await User.findOne({
        where: { email: decoded.email },
      });
      if (user) {
        await Path.findOne({ where: { talentId: user.id } })
          .then(async (path) => {
            await Path.findOne({
              where: { talentId: 2023 },
            })
              .then(async (defaultPath) => {
                let defaultTreeData = JSON.parse(defaultPath.treeData);
                if (path.track === "backend") {
                  defaultTreeData = removeTreeData(defaultTreeData, "java");
                  defaultTreeData = removeTreeData(defaultTreeData, "frontend");
                  if (path.lang === "python") {
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "javascript"
                    );
                    defaultTreeData = removeTreeData(defaultTreeData, "nodejs");
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "expressjs"
                    );
                  } else if (path.lang === "javascript") {
                    defaultTreeData = removeTreeData(defaultTreeData, "python");
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "fastapi"
                    );
                  }
                } else if (path.track === "frontend") {
                  defaultTreeData = removeTreeData(defaultTreeData, "java");
                  defaultTreeData = removeTreeData(defaultTreeData, "backend");
                  if (path.lang === "javascript") {
                    defaultTreeData = removeTreeData(defaultTreeData, "python");
                  }
                } else if (path.track === "fullstack") {
                  defaultTreeData = removeTreeData(defaultTreeData, "java");
                  if (path.lang === "python") {
                    defaultTreeData = removeTreeData(defaultTreeData, "nodejs");
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "expressjs"
                    );
                  } else if (path.lang === "javascript") {
                    defaultTreeData = removeTreeData(defaultTreeData, "python");
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "fastapi"
                    );
                  }
                } else if (path.lang) {
                  defaultTreeData = removeTreeData(defaultTreeData, "frontend");
                  defaultTreeData = removeTreeData(defaultTreeData, "backend");
                  if (path.lang === "javascript") {
                    defaultTreeData = removeTreeData(defaultTreeData, "python");
                    defaultTreeData = removeTreeData(defaultTreeData, "java");
                  } else if (path.lang === "python") {
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "javascript"
                    );
                    defaultTreeData = removeTreeData(defaultTreeData, "java");
                  } else if (path.lang === "java") {
                    defaultTreeData = removeTreeData(
                      defaultTreeData,
                      "javascript"
                    );
                    defaultTreeData = removeTreeData(defaultTreeData, "python");
                    defaultTreeData = filterTreeData(defaultTreeData, "84");
                  }
                } else {
                  defaultTreeData = removeTreeData(defaultTreeData, "frontend");
                  defaultTreeData = removeTreeData(defaultTreeData, "backend");
                  defaultTreeData = removeTreeData(
                    defaultTreeData,
                    "javascript"
                  );
                  defaultTreeData = removeTreeData(defaultTreeData, "python");
                  defaultTreeData = removeTreeData(defaultTreeData, "java");
                }
                const defaultKeys = getKeys(defaultTreeData);
                const talentKeys = getKeys(JSON.parse(path.treeData));
                let newData = updateObject(
                  defaultTreeData,
                  JSON.parse(path.treeData),
                  defaultKeys,
                  talentKeys
                );
                newData = removeEmptyObject(newData);
                path.treeData = JSON.stringify(newData);
                path.skills = JSON.stringify(
                  filterHelper(defaultPath, path, "skills")
                );
                path.points = JSON.stringify(
                  filterHelper(defaultPath, path, "points")
                );
                path.tips = JSON.stringify(
                  filterHelper(defaultPath, path, "tips")
                );
                path.resources = JSON.stringify(
                  filterHelper(defaultPath, path, "resources")
                );
                path
                  .save()
                  .then(async () => {
                    const lastLogin = user.lastLogin;
                    const duration =
                      (new Date(streakDate).getTime() -
                        new Date(lastLogin).getTime()) /
                      1000 /
                      3600;
                    streakDate = `${streakDateList[0]}/${streakDateList[1]}/${streakDateList[2]}`;
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
                      await user
                        .update({
                          lastLogin: streakDate,
                        })
                        .then(async () => {
                          await jwtTokenFunc(res, user);
                        })
                        .catch((error) => {
                          return res.status(400).json({ error: error.message });
                        });
                    }
                  })
                  .catch(() => {});
              })
              .catch((error) => {
                return res.status(400).json({ error: error.message });
              });
          })
          .catch((error) => {
            return res.status(400).json({ error: error.message });
          });
      } else {
        const credDict = {
          name: decoded.name,
          email: decoded.email,
          isNew: true,
          isActive: true,
          isTalent: true,
          dateOfJoin: currentDate,
          lastLogin: streakDate,
          longestStreak: 1,
          currentStreak: 1,
        };
        await User.create(credDict)
          .then(async (newUser) => {
            await jwtTokenFunc(res, newUser);
          })
          .catch((error) => {
            return res.status(400).json({ error: error.message });
          });
      }
    }
  } else {
    return res.status(400).json({ message: "PLEASE ADD EMAIL IN LINKEDIN" });
  }
};

//get access idToken from linkedin to know who is going to login
export const linkedinLogin = async (req, res) => {
  const { code } = req.body;
  var data = qs.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: `${process.env.FRONTEND_URL}/auth/linkedin/callback`,
    client_id: `${process.env.LINKEDIN_CLIENT_ID}`,
    client_secret: `${process.env.LINKEDIN_CLIENT_SECRET}`,
  });
  var config = {
    method: "post",
    url: "https://www.linkedin.com/oauth/v2/accessToken",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  await axios(config)
    .then(async (result) => {
      await validator(req, res, result.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
};
