import { type } from "os";
import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database_development.sqlite",
});

interface IUserAttributes {
  id?: string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserInstance extends Model<IUserAttributes>, IUserAttributes {}

const User = sequelize.define<IUserInstance>("User", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

export { sequelize, User };
export type UserInstance = IUserInstance;
