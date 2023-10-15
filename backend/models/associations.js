import usermodel from "./usermodel.js";
import loginmodel from "./loginmodel.js";

// un usario tiene muchos logins
usermodel.hasMany(loginmodel);
// un login pertenece a un solo usuario
loginmodel.belongsTo(usermodel, {
    foreignKey: {
        allowNull: false,
        name: 'user_id',
    }
});
