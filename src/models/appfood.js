import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class appfood extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    res_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appfood',
    timestamps: false
  });
  }
}
