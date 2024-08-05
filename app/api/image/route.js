import axios from "axios";
import crypto from "crypto";
const { NextResponse } = require("next/server");

const baseURL = "https://api.cloudinary.com/v1_1/";
const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;

export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFormData = new FormData();
    const url = `${baseURL}${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    imageFormData.append("file", formData.get("file"));
    imageFormData.append("upload_preset", "next-blog-in");
    const imgResponse = await axios.post(url, imageFormData);
    const imgURL = imgResponse.data.secure_url;

    return NextResponse.json({
      success: true,
      msg: "Image Added",
      url: imgURL,
    });
  } catch (error) {
    console.log("🚀 ~ POST img ~ error:", error);
  }
}

// Creating API Endpoint to delete Blog

export async function DELETE(request) {
  const cloudinaryUrl = await request.nextUrl.searchParams.get("url");
  const publicId = getPublicIdFromUrl(cloudinaryUrl);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const timestamp = new Date().getTime();
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const signature = generateSHA1(generateSignature(publicId, apiSecret));
  const url = `${baseURL}${cloudName}/image/destroy`;

  try {
    const response = await axios.post(url, {
      public_id: publicId,
      signature: signature,
      api_key: apiKey,
      timestamp: timestamp,
    });

    console.error(response);

    return NextResponse.json({ msg: "Image is Deleted" });
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ success: false, msg: "Image is not Deleted" });
}

const getPublicIdFromUrl = (url) => {
  const match = url.match(regex);
  return match ? match[1] : null;
};

function generateCloudinarySignature({ publicId, apiSecret }) {}

const generateSHA1 = (data) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

const generateSignature = (publicId, apiSecret) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};
