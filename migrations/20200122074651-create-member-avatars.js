'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('member_avatars', {
            id: {
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true,
                type         : Sequelize.INTEGER
            },
            image_id: {
                allowNull: false,
                type     : Sequelize.STRING
            },
            legacy_url: {
                type: Sequelize.STRING
            },
            member_id: {
                allowNull: false,
                type     : Sequelize.STRING
            },
            createdAt: {
                allowNull   : false,
                type        : Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull   : false,
                type        : Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('member_avatars');
    }
};
