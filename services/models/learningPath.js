import { Model, DataTypes } from "sequelize";
import { sequelize } from "../core/dbconnector.js";

export class Path extends Model {}

Path.init(
  {
    talentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      validate: {
        isInt: true,
      },
    },
    lang: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    track: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    treeData: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "[]",
    },
    keys: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "[]",
    },
    tips: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
    resources: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
    points: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
    completedPaths: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "[]",
    },
    levelProgress: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
    currentStep: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "{}",
    },
  },

  { sequelize: sequelize, modelName: "Path", tableName: "path" }
);

export class KeyValuePairs extends Model {}

KeyValuePairs.init(
  {
    key: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    sequelize: sequelize,
    modelName: "KeyValuePairs",
    tableName: "key_value_pairs",
  }
);
