import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-gray-900">
      <div class="navbar-start">
        <a href="#" class="text-white btn btn-ghost normal-case text-2xl">
          Welcome!
        </a>
      </div>

      <div class="navbar-end">
        <a
          class="btn text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href="https://www.instagram.com/fao30"
          target="_blank"
          rel="noreferrer"
        >
          Contact our ceo
        </a>
      </div>
    </div>
  );
};

export default Navbar;
