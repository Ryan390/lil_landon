var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "eu-west-1"
});

console.error('Loading data into table for gallery images..')

var dynamodb = new AWS.DynamoDB.DocumentClient();

var welcomeData = JSON.parse(fs.readFileSync('../src/data/welcome_gallery_images.json', 'utf8'));

welcomeData.forEach(item => {
    var params = {
        TableName: "WelcomeGalleryImages",
        Item: {
            "src": item.src,
            "alt": item.alt
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error('Unable to load data into table for accessibility..', item.name, " Error: ", JSON.stringify(err, null, 2))
        }
        else {
            console.log("Added", item.src, "to table.")
        }
    });
});
