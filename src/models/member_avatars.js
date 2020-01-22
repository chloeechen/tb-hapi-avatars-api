'use strict';
module.exports = (sequelize, DataTypes) => {
    const member_avatars = sequelize.define('member_avatars', {
        image_id  : DataTypes.STRING,
        legacy_url: DataTypes.STRING,
        member_id : DataTypes.STRING
    }, {});
    member_avatars.associate = function(models) {
    // associations can be defined here
    };

    return member_avatars;
};
