var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "eu-west-1"
});

console.error('Loading data into table for menu links..')

var dynamodb = new AWS.DynamoDB.DocumentClient();

var menuLinkData = JSON.parse(fs.readFileSync('../src/data/header_menu_links.json', 'utf8'));

menuLinkData.forEach(function (item) {
    var params = {
        TableName: "HeaderMenuLinks",
        Item: {
            "class": item.class,
            "href": item.href,
            "text": item.text,
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error('Unable to load data into table for Header Links..', item.text, " Error: ", JSON.stringify(err, null, 2))
        }
        else {
            console.log("Added", item.text, "to table.")
        }
    });
});
