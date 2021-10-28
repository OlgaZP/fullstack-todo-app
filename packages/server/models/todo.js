'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Todo.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        validate: {
          isAfter: new Date(Date.now() - 86400000).toISOString(),
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      priority: {
        type: DataTypes.ENUM,
        defaultValue: 'normal',
        values: ['low', 'normal', 'high'],
      },
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );
  return Todo;
};
