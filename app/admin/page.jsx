import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/admin/blogList");
  return null;
};

export default page;
