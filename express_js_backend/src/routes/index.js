const express = require('express');
const healthController = require('../controllers/health');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Hello World endpoint
 *     description: Returns a plain text "Hello World" response.
 *     responses:
 *       200:
 *         description: Plain text Hello World response
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello World
 */
router.get('/', healthController.check.bind(healthController));

module.exports = router;
