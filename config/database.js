module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "217.21.76.201"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "u530416664_store"),
      user: env("DATABASE_USERNAME", "u530416664_reveillestore"),
      password: env("DATABASE_PASSWORD", "Su233q9ps6GSFu"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
