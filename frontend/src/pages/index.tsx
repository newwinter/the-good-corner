import Head from "next/head";
import Header from "../components/Header";
import styles from "@/styles/Home.module.css";
import RecentAds from "@/components/RecentAds";

export default function Home() {
  return (
    <>
      <body>
        <main className="main-content"></main>
        <Header />
        <RecentAds />
      </body>
    </>
  );
}
