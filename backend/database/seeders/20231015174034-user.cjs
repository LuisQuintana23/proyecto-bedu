module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'bedu1',
        password: 'password1',
        email: 'bedu1@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu2',
        password: 'password2',
        email: 'bedu2@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu3',
        password: 'password3',
        email: 'bedu3@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu4',
        password: 'password4',
        email: 'bedu4@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: 'bedu5',
        password: 'password5',
        email: 'bedu5@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};