import path from 'path';

const config = ({ env }: { env: any }) => {
  const databaseUrl = env('DATABASE_URL');

  // ─── Production (Railway Postgres) ───────────────────────────────────────
  if (databaseUrl) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: databaseUrl,
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'railway'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', ''),
          ssl: {
            rejectUnauthorized: false,
          },
        },
        pool: {
          min: env.int('DATABASE_POOL_MIN', 2),
          max: env.int('DATABASE_POOL_MAX', 10),
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
      },
    };
  }

  // ─── Local development (SQLite) ───────────────────────────────────────────
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(
            __dirname,
            '..',
            '..',
            env('DATABASE_FILENAME', '.tmp/data.db')
        ),
        host: 'localhost',
        port: 0,
        database: 'strapi',
        user: '',
        password: '',
      },
      useNullAsDefault: true,
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

export default config;