import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Happy first year Anniversary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-red-500 w-full">
        <div className="w-5/6">
        <h1 className=" text-center animate-text bg-gradient-to-r from-red-900 via-purple-900 to-orange-900 bg-clip-text text-transparent  font-mono font-black p-4 text-4xl leading-20">
          Happy first year Anniversary!
        </h1>
        </div>
        
      </div>
    </>
  );
}
