import { User } from "../models/user.js";
import axios from "axios";
import qs from "qs";

export const updateProfile = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    const { freeCodeCampId } = req.body;
    if (freeCodeCampId) {
      const data = qs.stringify({
        username: freeCodeCampId,
      });
      var config = {
        method: "GET",
        url: "https://api.freecodecamp.org/api/users/get-public-profile",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      await axios(config)
        .then(async (result) => {
          if (result.data.entities) {
            const resultData = Object.values(result.data.entities.user)[0];
            if (
              resultData.profileUI.isLocked === true ||
              resultData.profileUI.showCerts === false
            ) {
              return res.status(400).json({
                message:
                  "Permission Issue. Check guide in detail and make fields public as shown.",
              });
            } else {
              await User.findOne({ where: { id: userId } })
                .then((staff) => {
                  staff
                    .update(req.body)
                    .then(() =>
                      res.status(200).json({ message: "Profile Updated" })
                    )
                    .catch((error) =>
                      res.status(400).json({ error: error.message })
                    );
                })
                .catch((error) =>
                  res.status(400).json({ error: "Staff not found" })
                );
            }
          } else {
            return res.status(400).json({
              message: "Invalid FreeCodeCamp username",
            });
          }
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      await User.findOne({ where: { id: userId } })
        .then((staff) => {
          staff
            .update(req.body)
            .then(() => res.status(200).json({ message: "Profile Updated" }))
            .catch((error) => res.status(400).json({ error: error.message }));
        })
        .catch((error) => res.status(400).json({ error: "Staff not found" }));
    }
  } else {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export const getProfile = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    await User.findOne({ where: { id: userId } })
      .then((user) => {
        const {
          name,
          email,
          linkedinId,
          freeCodeCampId,
          phoneNumber,
          ...rest
        } = user;
        return res.status(200).json({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          freeCodeCampId: freeCodeCampId,
          linkedinId: linkedinId,
        });
      })
      .catch((error) => res.status(400).json({ error: "Talent not found" }));
  } else {
    return res.status(401).json({ error: "Invalid token" });
  }
};
