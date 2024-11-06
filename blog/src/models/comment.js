import { sequelize, BaseModel, DataTypes } from "../config/database"

class Comment extends BaseModel {}

Comment.init(
  {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comment",
  }
)

export default Comment
