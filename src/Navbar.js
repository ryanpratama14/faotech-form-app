import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-gray-900">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#ceo">Our CEO</a>
            </li>
            <li tabindex="0">
              <ul class="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>
        <a href="#" class="text-white btn btn-ghost normal-case text-2xl">
          Welcome!
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a href="#ceo">About CEO</a>
          </li>
          <li tabindex="0">
            <ul class="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
        </ul>
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
