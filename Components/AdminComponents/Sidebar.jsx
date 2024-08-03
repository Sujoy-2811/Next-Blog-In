import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="logo" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addBlog"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.add_icon} alt="add blog" width={28} />
            <p className="hidden sm:inline-block">Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.blog_icon} alt="show list" width={28} />
            <p className="hidden sm:inline-block">Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.email_icon} alt="subscriptions" width={28} />
            <p className="hidden sm:inline-block">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
