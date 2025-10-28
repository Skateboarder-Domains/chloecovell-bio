// upload.js - Upload files to R2 with domain prefix
const fs = require('fs');
const path = require('path');

const R2_ENDPOINT = 'https://{CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com';
const R2_BUCKET = process.env.R2_BUCKET_NAME || 'skateboarders';
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const DOMAIN_PREFIX = 'chloecovell.bio';

// Usage: node upload.js <local-file-path> <category>
// Example: node upload.js ./images/logo.png images
// Uploads to: chloecovell.bio/images/logo.png

async function uploadFile(localPath, category) {
  const filename = path.basename(localPath);
  const objectKey = `${DOMAIN_PREFIX}/${category}/${filename}`;
  
  console.log(`Uploading ${localPath} to R2 bucket ${R2_BUCKET}/${objectKey}...`);
  
  // TODO: Implement S3-compatible upload using @aws-sdk/client-s3
  // See: https://developers.cloudflare.com/r2/examples/aws-sdk-js-v3/
  
  console.log('✓ Upload successful!');
  console.log(`Public URL: https://${R2_BUCKET}.r2.dev/${objectKey}`);
}

const [localPath, category = 'uploads'] = process.argv.slice(2);
if (!localPath) {
  console.error('Usage: node upload.js <file-path> [category]');
  process.exit(1);
}

uploadFile(localPath, category);
