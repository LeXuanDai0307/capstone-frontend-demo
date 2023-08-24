/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { createBuiltMeshHTTPHandler } from '@libs/shared-graphql-mesh';
import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import * as path from 'path';
config();

const app: Application = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express server with TypeScript');
});

const port = process.env.PORT || 3333;

app.use('/graphql', createBuiltMeshHTTPHandler());

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
