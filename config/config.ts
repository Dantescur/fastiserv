import { Sequelize, DataTypes, Model } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.POSTGRES_HOST || "127.0.0.1",
  port: 5432,
  username: process.env.POSTGRES_USER || "fastiserv",
  password: process.env.POSTGRES_PASS || "Kilo2022*",
  database: process.env.POSTGRES_DB || "fastiserv",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
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
