import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Top } from "./top";
import Header from "@/components/header";
import Footer from "@/components/footer";

import Styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={Styles.wrapper}>
        <Top/>
      </div>
    </>
  );
}
