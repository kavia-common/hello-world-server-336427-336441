const healthService = require('../services/health');

class HealthController {
  /**
   * Handles GET / by returning a plain text "Hello World" response.
   */
  check(req, res) {
    const message = healthService.getHelloWorld();
    // Explicitly return plain text to match requirement.
    return res.status(200).type('text/plain').send(message);
  }
}

module.exports = new HealthController();
