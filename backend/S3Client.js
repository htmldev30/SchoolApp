require('dotenv').config()
const { S3Client } = require('@aws-sdk/client-s3')
const { PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

// Code from Sam Meech-Ward | https://www.sammeechward.com/storing-images-in-s3-from-node-server
const bucketRegion = process.env.AWS_BUCKET_REGION
const accessKey = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const S3 = new S3Client({
    credentials: {
        secretAccessKey: secretAccessKey,
        accessKeyId: accessKey,
    },
    region: bucketRegion,
})

exports.getFileUrlFromBucket = async (bucketName, key) => {
    const getObjectParams = {
        Bucket: bucketName,
        Key: key,
    }
    const getCommand = new GetObjectCommand(getObjectParams)
    const fileUrl = await getSignedUrl(S3, getCommand, {
        expiresIn: 3600,
    })
    return fileUrl
}

exports.putFileInBucket = async (bucketName, key, body, contentType) => {
    const params = {
        Bucket: bucketName,
        Key: key,
        Body: body,
        ContentType: contentType,
    }
    const putCommand = new PutObjectCommand(params)
    await S3.send(putCommand)
}
