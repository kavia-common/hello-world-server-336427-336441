class HealthService {
  /**
   * Returns the root "Hello World" message.
   * Kept in the service layer to preserve the routes → controller → service structure.
   */
  getHelloWorld() {
    return 'Hello World';
  }
}

module.exports = new HealthService();
