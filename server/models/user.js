import { Model, DataTypes } from "sequelize";
import { sequelize } from "../core/dbconnector.js";

export class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    linkedinId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    freeCodeCampId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isNew: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isStaff: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isTalent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    talentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isIntern: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isApprentice: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isMentor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isAlumni: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isClient: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    dateOfJoin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfleave: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastLogin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longestStreak: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    currentStreak: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  { sequelize, modelName: "User", tableName: "users" }
);
