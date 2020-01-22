'use strict';
module.exports = (sequelize, DataTypes) => {
    const memberAvatars = sequelize.define('memberAvatars', {
        id: {
            type         : DataTypes.INTEGER,
            allowNull    : false,
            primaryKey   : true,
            autoIncrement: true
        },
        imageId: {
            type     : DataTypes.STRING,
            allowNull: false,
            field    : 'image_id'
        },
        legacyUrl: {
            type     : DataTypes.STRING,
            allowNull: true,
            field    : 'legacy_url'
        },
        memberId: {
            type     : DataTypes.STRING,
            allowNull: false,
            field    : 'member_id'
        },
        createdAt: {
            allowNull   : false,
            type        : DataTypes.DATE,
            defaultValue: new Date(),
            field       : 'created_at'
        },
        updatedAt: {
            allowNull   : false,
            type        : DataTypes.DATE,
            defaultValue: new Date(),
            field       : 'updated_at'
        }
    }, {
        tableName: 'member_avatars'
    });
    memberAvatars.associate = function(models) {
    // associations can be defined here
    };

    return memberAvatars;
};
