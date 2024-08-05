const { NextResponse } = require("next/server");
import axios from "axios";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFormData = new FormData();
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
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
  // const id = await request.nextUrl.searchParams.get("id");
  // const blog = await BlogModel.findById(id);
  // // fs.unlink(`./public${blog.image}`, () => {});
  // await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
