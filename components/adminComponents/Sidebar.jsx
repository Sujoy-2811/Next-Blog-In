import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 lg:pl-14 py-4 max-h-[60px] border border-t-0 border-black">
        <Link href="/admin">
          <Image src={assets.logo} width={120} alt="logo" />
        </Link>
      </div>
      <div className="w-full lg:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] lg:w-[80%] absolute right-0">
          <Link
            href="/admin/addBlog"
            className="flex items-center border border-r-0 border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.add_icon} alt="add blog" width={28} />
            <p className="hidden lg:inline-block">Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className=" mt-5 flex items-center border border-r-0 border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.blog_icon} alt="show list" width={28} />
            <p className="hidden lg:inline-block">Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className=" mt-5 flex items-center border border-r-0 border-black gap-3 font-medium px-3 py-2 bg-white  "
          >
            <Image src={assets.email_icon} alt="subscriptions" width={28} />
            <p className="hidden lg:inline-block">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
