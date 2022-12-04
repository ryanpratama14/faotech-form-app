import "/Users/ryanpratama/Desktop/next-app/src/App.css";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Zikirapp() {
  const [num, setNum] = useState(0);
  const [doa, setDoa] = useState("سُـبْحانَ الله");
  const [totalNum, setTotalNum] = useState(0);
  const [zikir, setZikir] = useState("Start");
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast("The holy gate is near...", {
      icon: "🚪",
    });
  const notifySuccess2 = () =>
    toast("Masha Allah, keep praying brother...", {
      icon: "🤲",
    });

  return (
    <header className="App-header font-mono">
      <Toaster />
      <div class="max-w-[800px] text-center">
        <h2 className="text-white text-3xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
          Welcome to Zikir App!
          <br />
          <span className="text-blue-300 dark:text-blue-300">
            Pray, Pray, Pray.
          </span>
        </h2>
      </div>
      <p class="mb-2 text-white dark:text-white">{num}</p>
      <p class="text-5xl text-white dark:text-white">{doa}</p>
      <button
        onClick={() => {
          setTotalNum(totalNum + 1);
          setNum(num + 1);
          setZikir("Keep praying...");
          if (num === 33) {
            setNum(1);
            if (doa === "سُـبْحانَ الله") {
              setDoa("ٱلْحَمْدُ لِلَّٰهِ");
            } else if (doa === "ٱلْحَمْدُ لِلَّٰهِ") {
              setDoa("الله أكبر");
            } else if (doa === "الله أكبر") {
              setDoa("سُـبْحانَ الله");
            }
          }
          if (totalNum === 33 - 1) {
            notifySuccess();
          } else if (totalNum === 99 - 1) {
            notifySuccess2();
          }
        }}
        class="btn mt-5 text-white font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-500"
      >
        {zikir}
      </button>

      <button
        onClick={() => {
          setNum(0);
          setTotalNum(0);
          setZikir("Start");
          setDoa("سُـبْحانَ الله");
        }}
        class="btn mt-5 text-white font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-violet-600 dark:bg-violet-600 hover:bg-violet-500 dark:hover:bg-violet-500"
      >
        Reset
      </button>
      <div class="max-w-[800px] text-center">
        <h2 className="text-3xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight mt-36">
          <span className="text-white ">
            Declare your faith{" "}
            <span
              onClick={() => {
                navigate("declare");
              }}
              className="text-blue-300 "
            >
              here.{" "}
            </span>
          </span>
        </h2>
      </div>
    </header>
  );
}

export default Zikirapp;
