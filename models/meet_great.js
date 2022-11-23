'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_great extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_great.init({
    meet_great_id: DataTypes.INTEGER,
    event_id: DataTypes.SMALLINT,
    band_id: DataTypes.STRING,
    meet_start_time: DataTypes.DATE,
    meet_end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet_great',
  });
  return meet_great;
};