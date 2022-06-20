var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    region: "eu-west-1"
});

console.error('Loading data into table for footer menu links..')

var dynamodb = new AWS.DynamoDB.DocumentClient();

var menuLinkData = JSON.parse(fs.readFileSync('../src/data/footer_links.json', 'utf8'));

menuLinkData.forEach(function (item) {
    var params = {
        TableName: "FooterMenuLinks",
        Item: {            
            "href": item.href,
            "class": item.class,
            "src": item.src,
            "alt": item.alt,
        }
    };

    dynamodb.put(params, function (err, data) {
        if (err) {
            console.error('Unable to load data into table for Footer Menu Links..', item.alt, " Error: ", JSON.stringify(err, null, 2))
        }
        else {
            console.log("Added", item.alt, "to table.")
        }
    });
});
