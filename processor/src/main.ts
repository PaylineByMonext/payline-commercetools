import * as dotenv from 'dotenv';
dotenv.config();

import { setupFastify } from './server/server';

(async () => {
  const server = await setupFastify();

  server.get('/', (req, res) => {
    return {
      message: 'Working',
    };
  });

  const HOST = '0.0.0.0';
  try {
    await server.listen({
      port: 8080,
      host: HOST,
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }

  const shutdown = async () => {
    server.log.info('Shutting down...');
    try {
      await server.close();
      server.log.info('Closed out remaining connections');
      process.exit(0);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  process.on('SIGTERM', () => shutdown());
  process.on('SIGINT', () => shutdown());
})();
