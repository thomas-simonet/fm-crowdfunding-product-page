module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: '127.0.0.1',
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        ssl: {
          rejectUnauthorized: false
        }
      },
      options: {
        ssl: true
      }
    }
  }
})