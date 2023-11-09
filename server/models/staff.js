import { Model, DataTypes } from "sequelize";
import { sequelize } from "../core/dbconnector.js";

export class Contact extends Model {}
Contact.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize: sequelize, modelName: "Contact", tableName: "contacts" }
);

export class Feedback extends Model {}
Feedback.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    filesName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    givenBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  { sequelize: sequelize, modelName: "Feedback", tableName: "feedbacks" }
);
