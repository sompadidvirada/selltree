import React, { useState } from 'react'
import axios from "axios";

const UploadImg = () => {

    const [files, setFiles] = useState([]);

    const convertToJpg = (file) => {

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            const img = new Image();

            reader.onload = (e) => {
                img.src = e.target.result;
            };

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (blob) resolve(blob);
                        else reject("Conversion failed");
                    },
                    "image/jpeg",
                    0.9
                );
            };

            reader.readAsDataURL(file);
        });
    };

    const handleUpload = async () => {
        if (!files.length) return alert("Please select some files");
      
        try {
          const jpgBlobs = await Promise.all(files.map(file => convertToJpg(file)));
      
          for (let i = 0; i < jpgBlobs.length; i++) {
            const jpgBlob = jpgBlobs[i];
            const originalFileName = files[i].name;
      
            // Remove original extension and prepend 'treekoff-menu-'
            const fileNameWithoutExt = originalFileName.replace(/\.[^/.]+$/, ""); // Remove extension
            const fileKey = `treekoff-menu-${fileNameWithoutExt}`; // Add prefix + .jpg
      
            // Request presigned URL for the file key
            const response = await axios.get(`http://localhost:5520/api/upload-url/${encodeURIComponent(fileKey)}`);
            const uploadUrl = response.data.uploadUrl;
      
            // Upload to S3
            await axios.put(uploadUrl, jpgBlob, {
              headers: { "Content-Type": "image/jpeg" },
            });
      
            console.log(`Uploaded file ${fileKey} successfully!`);
          }
        } catch (err) {
          console.error("Error during conversion or upload", err);
        }
      };
      




    return (
        <div style={{ padding: 20 }}>
            <h2>Upload Multiple Images</h2>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles([...e.target.files])}
            />
            <br /><br />
            <button onClick={handleUpload}>Upload All</button>
        </div>
    )
}

export default UploadImg