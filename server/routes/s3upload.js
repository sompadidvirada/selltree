require("dotenv").config();
const express = require("express");
const router = express.Router();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");



// ✅ AWS S3 Client setup
const s3 = new S3Client({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.SECREY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECREY_AWS_SECRET_ACCESS_KEY,
  },
});

// ✅ Route: GET /api/upload-url?id=some-id
router.get("/api/upload-url/:id", async (req, res) => {
 
    const { id } = req.params;
    if (!id) return res.status(400).send("Missing id");
    
    const key = `${id}.jpg`;
    
    const command = new PutObjectCommand({
        Bucket: process.env.SECREY_AWS_BUCKET_NAME, // make sure this is set in .env
        Key: key,
        ContentType: "image/jpeg",
    });
    
    try {
        const url = await getSignedUrl(s3, command, { expiresIn: 300 }); // 5 minutes
        console.log(url)
        res.json({ uploadUrl: url });

  } catch (err) {
    console.error("Error generating signed URL:", err);
    res.status(500).send("Error generating upload URL");
  }
});

module.exports = router;
