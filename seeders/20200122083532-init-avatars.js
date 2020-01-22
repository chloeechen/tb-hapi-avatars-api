'use strict';
const dayjs = require('dayjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert(
            'member_avatars',
            [
                { image_id: '123', member_id: '1', createdAt: dayjs().format('MMMM D, YYYY, h:mA'), updatedAt: dayjs().format('MMMM D, YYYY, h:mA') },
                { image_id: '234', member_id: '2', createdAt: dayjs().format('MMMM D, YYYY, h:mA'), updatedAt: dayjs().format('MMMM D, YYYY, h:mA') },
                { image_id: '345', member_id: '3', createdAt: dayjs().format('MMMM D, YYYY, h:mA'), updatedAt: dayjs().format('MMMM D, YYYY, h:mA') }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
