export default () => ({
  database: {
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '1234',
    name: process.env.DB_NAME || 'dbName',
    port: process.env.DB_PORT || '5432',
  },
});
