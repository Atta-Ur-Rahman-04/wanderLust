const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userScehma = new Schema({
  email: {
    type: String,
    required: true,
  },
});
// username and password while defining the schema but the passport local will automatically create it so we only create an email here also it will add the hash and salting method and then save it
userScehma.plugin(passportLocalMongoose); // and the upper thing done by this plugin and also add some method in it

module.exports = mongoose.model("User", userScehma);
