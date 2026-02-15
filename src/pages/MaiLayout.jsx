import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "@/component/Header";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
