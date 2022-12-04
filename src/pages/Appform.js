import "/Users/ryanpratama/Desktop/next-app/src/App.css";
import { React, useEffect, useState, useRef } from "react";
// import "flowbite";
import toast, { Toaster } from "react-hot-toast";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Testimonial from "./Testimonial";

function Appform() {
  const [word, setWord] = useState("Note: valid answers only");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [instagram, setInstagram] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const notifySuccess = () => toast.success("Success");
  const notifyError = () =>
    toast.error("Something went wrong, please try again");
  let isFilledAll = useRef(false);
  let isSubmitted = 0;
  const regex = /^[a-zA-Z]+$/;
  const regexNum = /^[0-9]+$/;
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (
      fName.match(regex) &&
      lName.match(regex) &&
      fName.length > 0 &&
      lName.length > 0 &&
      age >= 18 &&
      instagram.length > 0 &&
      telephoneNum.match(regexNum) &&
      telephoneNum.length > 0 &&
      email.match(validRegex) &&
      country.length > 0 &&
      region.length > 0 &&
      address.length > 0
    ) {
      setWord("All done!");
      isFilledAll.current = true;
      // console.log("KEISI SEMUA MANTAPPU JIWA");
    } else {
      setWord("Note: valid answers only");
      isFilledAll.current = false;
      // console.log("ISI SEMUA DONG");
    }
    if (age < 18) {
      setWord("You are underage");
    }
  }, [
    fName,
    lName,
    telephoneNum,
    email,
    age,
    instagram,
    country,
    region,
    address,
    word,
    isFilledAll,
  ]);

  return (
    <div className="App font-mono text-white">
      <Toaster />
      <div className="App-header">
        {/* This is Title */}
        <div class="max-w-[800px]">
          <h2 className="text-center text-3xl sm:text-6xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-14 mt-14">
            Passionate about programming?
            <br />
            <span className="text-blue-300 ">join FaoTech, </span>
            <span className="text-red-300">NOW.</span>
          </h2>
        </div>
        {/* This is end of Title */}
        {/* This is Form */}
        <div class="w-96">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium  :text-white dark:text-white">
                First Name
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ryan"
                required
                maxLength={20}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                Last Name
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pratama"
                required
                maxLength={20}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                Age
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18+ only"
                required
                maxLength={2}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                Phone Number
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="8 996 100 52 02"
                required
                maxLength={16}
                onChange={(e) => setTelephoneNum(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">
              Instagram Username
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="@ryanpratama14"
              required
              maxLength={30}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">
              Email Address
            </label>
            <input
              maxLength={30}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="partnership@faotech.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                Country
              </label>

              <CountryDropdown
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                Region
              </label>

              <RegionDropdown
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
          </div>

          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white dark:text-white">
              Address
            </label>
            <input
              maxLength={50}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Jackson Street 91"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div class="text-center">
            <button
              onClick={(event) => {
                isSubmitted = isSubmitted + 1;
                if (isFilledAll.current === true && isSubmitted === 1) {
                  notifySuccess();
                } else if (isFilledAll.current === true && isSubmitted === 2) {
                  toast("Already submitted, thank you", {
                    icon: "🙌",
                  });
                } else if (isFilledAll.current === true && isSubmitted > 2) {
                  event.preventDefault();
                } else {
                  notifyError();
                }
              }}
              type="submit"
              class=" btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p class="text-red-200 text-xs mt-3 mb-8 text-center">{word}</p>
        </div>
        {/* This is end of Form */}
      </div>
    </div>
  );
}

export default Appform;
