import Head from "next/head";
import {geistMono, geistSans} from "@/utils/constants";
import LandingPage from "@/pages/landingPage";
import React from "react";
import { ToastContainer} from 'react-toastify';

export default function Home() {
  return (
    <>
      <Head>
        <title>CODELOGIC</title>
        <meta name="description" content="Generated by CODELOGIC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main >
            <LandingPage />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
