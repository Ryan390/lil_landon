var AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "WelcomeServices",
    KeySchema: [
        { AttributeName: "text", KeyType: "HASH" }, // Partition Key        
    ],
    AttributeDefinitions: [
        { AttributeName: "text", AttributeType: "S" }        
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function (err, data) {
    if (err)
        console.error("Unable to create table: ", JSON.stringify(err, null, 2))
    else
        console.log("Created table with description: ", JSON.stringify(data, null, 2))
});