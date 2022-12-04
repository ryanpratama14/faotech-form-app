import "/Users/ryanpratama/Desktop/next-app/src/App.css";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Declare = () => {
  const [word, setWord] = useState("أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ");
  const [button, setButton] = useState("Next");
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const navigate = useNavigate();
  const notifySuccess2 = () =>
    toast("Welcome, brother!", {
      icon: "😇",
    });

  return (
    <div className="App font-mono">
      <Toaster />
      <header className="App-header ">
        <div class="max-w-[800px] text-center">
          <h2 className=" text-white dark:text-white text-3xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">
            Declare your Shahada
            <br />
          </h2>
        </div>
        <p class="text-2xl mb-6  text-white dark:text-white">repeat:</p>
        <p class="text-3xl text-center text-white dark:text-white">{word}</p>
        <button
          onClick={() => {
            if (word === "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ") {
              setWord("وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰ");
              setButton("Finish");
            } else {
              notifySuccess2();
            }
          }}
          class="btn mt-5 text-white font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-500 dark:hover:bg-indigo-500"
        >
          {button}
        </button>
        <div class="max-w-[800px] text-center">
          <h2 className="text-3xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight mt-12">
            <span
              onClick={() => {
                navigate("/zikir-app");
              }}
              className="text-blue-300 dark:text-blue-300"
            >
              Back to Zikir App
            </span>
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Declare;
