import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

import { specs, swaggerConfig } from '../config/index.js';
import user from './user.js';
import friend from './friend.js';
import post from './post.js';

const router = Router();

// Swagger Docs
const specDoc = swaggerJsdoc(swaggerConfig);
router.use(specs, serve);
router.get(specs, setup(specDoc, { explorer: true }));

// Routes
router.use('/user', user);
router.use('/friend', friend);
router.use('/post', post);

export default router;
