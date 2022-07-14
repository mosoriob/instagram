import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import UserContext from "../context/user";

export default function Header() {
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(UserContext);
  console.log(user)
  return (
    //create a header component
    //heigth 16: 4rem Use h-{number} or h-px to set an element to a fixed height.
    //border bottom
    //margin bottom
    <header className="h-16 bg-white border-b mb8">
      {/*
            create a container
            max-width-lg: set the maximium width of an element using `max-w-{size}` utilies
            mx-auto: center the element 
            h-full: set the height of the element to 100% of its parent
        */}
      <div className="container mx-auto max-width-lg h-full">
        {/*
        
        */}
        <div className="flex justify-between h-full">
          <div className="text-gray-700 flex items-center align-center text-center cursor-pointer ">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Instagram"
                className="w-6/12 mt-2"
              />
            </Link>
          </div>
          <div className="flex items-center align-items">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} arial-label="Home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
                <button
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => e.key === "Enter" && firebase.auth().signOut()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full flex"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN} arial-label="Login">
                  <button
                    type="button"
                    className="bg-blue-500 font-bold rounded h-8 w-20 text-white"
                  >
                    Login
                  </button>
                </Link>
                <Link to={ROUTES.SIGNUP} arial-label="Sign up">
                  <button
                    type="button"
                    className="bg-white font-bold rounded h-8 w-20 text-black"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        {/* <Link to="/">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
        </Link> */}
      </div>
    </header>
  );
}
