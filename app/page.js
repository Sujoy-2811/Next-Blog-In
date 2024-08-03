"use client";
import BlogList from "@/Components/BlogList";
import BlogListPulseEffect from "@/Components/BlogListPulseEffect";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
