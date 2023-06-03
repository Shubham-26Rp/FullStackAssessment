const mongoose = require("mongoose");
exports.connectMongoose = () => {
    mongoose.connect("mongodb://localhost:27017/passport")
        .then((e) => console.log('Connected to mongoDB:${e.connection.host}'))
        .catch((e) => console.log(e));
};

const userschema = new.mongoose.Schema({
    name: String,
    username: {
        typr: String,
        require: true,
        unique: true,
    },
    password: String
});
exports.User = mongoose.model("User", userschema);