const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    },
    default: {
        SECRET: "SUPERSERCRETPASSWORD1234",
        DATABASE: "mongodb://localhost:27017/booksSelf",
    }
};

exports.get = function get(env){
    return config[env] || config.default
};