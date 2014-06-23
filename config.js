/**
 * Created by raynald on 5/18/14.
 */

module.exports = {
    development : {
        mode : "development",
        mongoDbUri : "mongodb://192.168.0.252:27017/mlb",
        // HTTP response Cache-Control max-age for static files
        maxAgeS: 0, // in ms
        // HTTP response Cache-Control max-age for (AJAX) dynamic content
        maxAgeD : 0 // in seconds
    },
    production : {
        mode : "production",
        mongoDbUri : process.env.MONGOLAB_URI,
        // mongoDbUri : "mongodb://192.168.0.252:27017/mlb",
        maxAgeS : 60 * 60 * 24 * 1000, // in ms
        maxAgeD : 60 * 60 * 24 // in seconds
    }
};