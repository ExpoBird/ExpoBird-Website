"use client";

import Script from "next/script";
import Navbar from "../components/Navbar";
import TestingNav from "../components/TestingNav";
import DigitalHero from "../components/DigitalHero";
import Contact from "../components/Contact";

const page = () => {
  return (
    <>
      <Script src="/scripts/script-3.js" strategy="lazyOnload"></Script>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <TestingNav />
        <DigitalHero
          title={
            "ExpoBird is leading mobile app development company  Dubai, helping business transform their ideas into reality. We build mobile app \
         development solutions to empower startups, SMBs, enterprises and brands."
          }
          text1={"We Are"}
          text2={"Social Media Marketing"}
          text3={"Company"}
        />
      </div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle w-[500px] p-3">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Contact />
        </div>
      </dialog>
      <Contact />
    </>
  );
};

export default page;
