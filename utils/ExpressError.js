class ExpressError extends Error {
  constructor(statusCode, message) {
    // jab constructor call hoga to code aur msg ayega so
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
module.exports = ExpressError;
// now on the app.js file we will also require this
