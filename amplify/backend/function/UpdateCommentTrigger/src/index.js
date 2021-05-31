/* Amplify Params - DO NOT EDIT
	API_HELLOWORLD_GRAPHQLAPIIDOUTPUT
	API_HELLOWORLD_POSTTABLE_ARN
	API_HELLOWORLD_POSTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */var AWS = require("aws-sdk");

// Set a region to interact with (make sure it's the same as the region of your table)
AWS.config.update({ region: process.env.REGION });

// Set a table name that we can use later on
const tableName = "Post-nz2shmg5cjc2xdxcb6fos4qqt4-dev"

// Create the Service interface for DynamoDB
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

// Create the Document Client interface for DynamoDB
var ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

//Get Post
async function scanForResults(postid) {
  try {
    var params = {
      Key: {
        "id": { "S": postid }
      },
      TableName: process.API_HELLOWORLD_POSTTABLE_NAME,

    };
    var result = await dynamodb.getItem(params).promise()
    return await dynamodb.getItem(params).promise()
  } catch (error) {
    console.error(error);
  }
}

//Update Post
async function updateTable(i, newValue) {
  try {
    const params = {
      TableName: tableName,
      Key: {
        "id": i
      },
      UpdateExpression: "SET numberOfComments = :cmt", //status is a reserved ATTRIBUTE
      ExpressionAttributeValues: {
        ":cmt": 6
      }
    }

    const result = await ddbDocumentClient.update(params).promise();
    console.log(result)
  } catch (err) {
    console.log(err);
  }

}

//  API_HELLOWORLD_POSTTABLE_NAME: 'Post-nz2shmg5cjc2xdxcb6fos4qqt4-dev',


exports.handler = async event => {

  console.log(process);
  try {
    let i = event.Records[0].dynamodb.NewImage.postID.S;
    let result = await scanForResults(i)
    let oldNumberOfComments = result.Item.numberOfComments.N;
    let newNumberOfComments = Number(oldNumberOfComments) + 1;
    console.log(result);
    if (event.Records[0].eventName == 'INSERT') {
      await updateTable(i, newNumberOfComments);
    } else if (event.Records[0].eventName == 'DELETE') {
      newNumberOfComments = oldNumberOfComments - 1;
      await updateTable(i, newNumberOfComments);
    }
  } catch (error) {
    console.log('error:', error);
    return { error: error }
  }
};