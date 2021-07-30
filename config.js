module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGO_URI || 'mongodb+srv://sami_user:2444@cluster0.prdnb.mongodb.net/sami_user?retryWrites=true&w=majority'
}

// ALL KEYS ARE LEFT HERE ON PURPOSE PLEASE DO NOT ABUSE