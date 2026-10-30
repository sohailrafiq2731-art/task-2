import {Model, DataTypes} from 'sequelize';

export default (sequelize) => {

    class User extends Model {
        static associate(models){

        }
    }

    User.init(
    {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: "name",
            validate: { notEmpty: true }
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },

        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false
    }
);


    return User;
};