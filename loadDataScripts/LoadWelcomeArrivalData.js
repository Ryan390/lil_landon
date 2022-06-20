var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "eu-west-1"
});

console.error('Loading data into table for accessibility..')

var dynamodb = new AWS.DynamoDB.DocumentClient();

var accessibilityData = JSON.parse(fs.readFileSync('../src/data/welcome_accessibility.json', 'utf8'));

accessibilityData.forEach(item => {
    var params = {
        TableName: "WelcomeAccessibility",
        Item: {
            "text": item.text
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error('Unable to load data into table for accessibility..', item.name, " Error: ", JSON.stringify(err, null, 2))
        }
        else {
            console.log("Added", item.name, "to table.")
        }
    });
});
