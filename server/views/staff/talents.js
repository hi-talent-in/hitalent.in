
export const getTalents = async (req, res) => {
  await Talent.findAll()
    .then((interns) => {
      const internList = interns.map((talent) => {
        const {
          id,
          name,
          email,
          phoneNumber,
          freeCodeCampId,
          isActive,
          isIntern,
          isApprentice,
          level,
          nextCourse,
          ...rest
        } = talent;
        return {
          id,
          name,
          email,
          phoneNumber,
          freeCodeCampId,
          isActive,
          isIntern,
          isApprentice,
          level,
          nextCourse,
        };
      });
      return res.status(200).json({ talents: internList });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

export const getTalent = async (req, res) => {
  const talentId = req.params.talentId;
  await Talent.findOne({ where: { id: talentId } })
    .then((talent) => {
      const {
        isActive,
        isIntern,
        isApprentice,
        ...rest
      } = talent;
      res.status(200).json({
        isActive,
        isIntern,
        isApprentice,
      });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

export const postTalent = async (req, res) => {
  const talentId = req.params.talentId;
  if (req.body) {
    await Talent.update(req.body, { where: { id: talentId } })
      .then(() => res.status(200).json({ message: "Talent profile updated" }))
      .catch((error) => res.status(400).json({ error: error.message }));
  }
};

export const deleteTalent = async (req, res) => {
  const talentId = req.params.talentId;
  await Talent.destroy({ where: { id: talentId } })
    .then(async () => {
      await TalentFcc.destroy({ where: { talentId: talentId } })
        .then(() => res.status(200).json({ message: "Talent deleted" }))
        .catch(() => res.status(400).json({ error: error.message }));
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

export const getTalentPerm = async (req, res) => {
  await TalentFcc.findAll()
    .then((perms) => {
      const permList = perms.map((perm) => {
        const { id, talentId, isLocked, showCerts, showPoints, ...rest } = perm;
        return { id, talentId, isLocked, showCerts, showPoints };
      });
      return res.status(200).json({ talentFccs: permList });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

export const deletePerm = async (req, res) => {
  const talentPermId = req.params.talentPermId;
  await TalentFcc.destroy({ where: { id: talentPermId } })
    .then(() => res.status(200).json({ message: "Talent permissions deleted" }))
    .catch((error) => res.status(400).json({ error: error.message }));
};

export const getTalentProgress = async (req, res) => {
  await TalentFcc.findAll()
    .then((manyItems) => {
      const talentFccList = manyItems.map((singleItem) => {
        const {
          id,
          talentId,
          isRespWebDesignCert,
          isJsAlgoDataStructCert,
          isBackEndCert,
          isFrontEndCert,
          isFullStackCert,
          isFrontEndLibsCert,
          longestStreak,
          points,
          currentStreak,
          ...rest
        } = singleItem;
        return {
          id,
          talentId,
          isRespWebDesignCert,
          isJsAlgoDataStructCert,
          isBackEndCert,
          isFrontEndCert,
          isFullStackCert,
          isFrontEndLibsCert,
          longestStreak,
          points,
          currentStreak,
        };
      });
      return res.status(200).json({ progressList: talentFccList });
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

