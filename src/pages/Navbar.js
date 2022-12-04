import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div class="navbar font-mono bg-gray-800 dark:bg-base-300 text-white dark:text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 dark:bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  navigate("/cards");
                }}
              >
                #1: Member Card
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/appform");
                }}
              >
                #2: Form App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/zikir-app");
                }}
              >
                #3: Zikir App
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/reviews");
                }}
              >
                About/Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a
          onClick={() => {
            navigate("/");
          }}
          class="btn btn-ghost normal-case text-xl"
        >
          Homepage
        </a>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end ml-4">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://sun9-37.userapi.com/impf/c849420/v849420304/17cfc5/nfKSzS-gsDk.jpg?size=1104x1472&quality=96&sign=920e9e16cb4e493063fd89da83965365&type=album" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-900 dark:bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/ryanpratama14"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ryanpratama14"
                target="_blank"
                rel="noreferrer"
              >
                My Instagram
              </a>
            </li>
            <li>
              <a
                class="justify-between"
                href="https://t.me/ryanpratama14"
                target="_blank"
                rel="noreferrer"
              >
                Contact<span class="badge">Telegram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
