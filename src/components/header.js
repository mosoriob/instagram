import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Header() {
  const firebase = useContext(FirebaseContext);
  //const user = null;
  const user = { displayName: "karl" };
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
                  <p>Dashboard</p>
                </Link>
                <button
                  className="bg-white font-bold h-8 w-20 text-black text-center"
                  onClick={() => firebase.auth.logout()}
                  onKeyDown={(e) => e.key === "Enter" && firebase.auth.logout()}
                >
                  Sign Out
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
