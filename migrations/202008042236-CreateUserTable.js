'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            username: {
                allowNull: true,
                type: Sequelize.DATE
            },
            firstname: {
                allowNull: true,
                type: Sequelize.DATE
            },
            lastname: {
                allowNull: true,
                type: Sequelize.DATE
            },
            password: {
                allowNull: true,
                type: Sequelize.DATE
            },
            email: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};