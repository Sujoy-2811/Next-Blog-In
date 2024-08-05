"use client";
import { assets } from "@/assets/assets";
import Tiptap from "@/components/Tiptap";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function AddBlogPage() {
  const descRef = useRef();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //- image upload
    const imageFormData = new FormData();
    imageFormData.append("file", image);
    const imgResponse = await axios.post("/api/image", imageFormData);
    console.log(imgResponse.data);
    const imgURL = imgResponse.data.url;
    console.log("upload");
    console.log(imgURL);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", imgURL);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png",
      });
      console.log("cleaning");
      descRef.current.commands.clearContent();
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="upload"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          accept="image/*"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <Tiptap onChange={setDescription} ref={descRef} />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
}
