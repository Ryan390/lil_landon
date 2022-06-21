var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "eu-west-1"
});

console.error('Loading data into table for welcome arrival data..')

var dynamodb = new AWS.DynamoDB.DocumentClient();

var arrivalData = JSON.parse(fs.readFileSync('../src/data/welcome_arrival.json', 'utf8'));

arrivalData.forEach(item => {
    var params = {
        TableName: "WelcomeArrival",
        Item: {
            "title": item.title,
            "text": item.text
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error('Unable to load data into table for welcome arival..', item.text, " Error: ", JSON.stringify(err, null, 2))
        }
        else {
            console.log("Added", item.text, "to table.")
        }
    });
});
