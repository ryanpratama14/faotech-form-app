import "./App.css";
import { React, useEffect, useState, useRef } from "react";
// import "flowbite";
import toast, { Toaster } from "react-hot-toast";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
// import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [word, setWord] = useState("*Please fill all the fields");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [instagram, setInstagram] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const notifySuccess = () => toast.success("Success");
  const notifyError = () => toast.error("Please try again");
  let isFilledAll = useRef(false);
  let isSubmitted = 0;
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    if (
      fName.length > 0 &&
      lName.length > 0 &&
      age.length === 2 &&
      instagram.length > 0 &&
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
      setWord("*Please fill all the fields");
      isFilledAll.current = false;
      // console.log("ISI SEMUA DONG");
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
    isFilledAll,
  ]);

  return (
    <div className="App font-mono">
      <Toaster />
      {/* <Navbar /> */}

      <div className="App-header">
        <div className="max-w-[800px]">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8 mt-8">
            Make a major life change,
            <br />
            <span className="text-blue-300">join FaoTech, </span>
            <span className="text-red-300">NOW.</span>
          </h2>
        </div>

        {/* <div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ryan"
                required
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pratama"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+7 996 100 52 02"
                required
                onChange={(e) => setTelephoneNum(e.target.value)}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@faotech.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Country/Region
              </label>

              <CountryDropdown
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={country}
                onChange={(val) => setCountry(val)}
              />
              <br />

              <RegionDropdown
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-white-900 dark:text-white">
                Address
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mariana Street 40"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          >
            Submit
          </button>

          <p class="text-red-200 text-xs mt-5 mb-5">{word}</p>
        </div> */}

        <div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                First name
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ryan"
                required
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last name
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pratama"
                required
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Age
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18+"
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
                onChange={(e) => setTelephoneNum(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Instagram Username
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="@ryanpratama14"
              required
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email address
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="shiritainouka@faotech.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Country
              </label>

              <CountryDropdown
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Elvie Street 91"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

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
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
        <p class="text-red-200 text-xs mt-5 mb-5">{word}</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
