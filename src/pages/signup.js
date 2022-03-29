import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "" || fullName === "" || userName === "" || (password !== confirmPassword) || userName.indexOf(' ') > 0;
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const new_user = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
      await new_user.user.updateProfile({
        displayName: fullName,
      });
      await firebase.firestore().collection("users").doc(new_user.user.uid).set({
        fullName: fullName,
        userName: userName,
        emailAddress: emailAddress,
        following: [],
        followers: [],
        dateCreated: Date.now()
      });
      setError("");
    } catch (error) {
      setConfirmPassword("");
      setPassword("");
      setEmailAddress("");
      setFullName("");
      setUserName("");
      setError(error.message);

    }

  };

  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your username"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            ></input>
            <input
              aria-label="Enter your full name"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              value={fullName}
              placeholder="Full name"
              onChange={({ target }) => setFullName(target.value)}
            ></input>
            <input
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              value={emailAddress}
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
            ></input>
            <input
              aria-label="Enter your password"
              value={password}
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            ></input>
            <input
              aria-label="Confirm your password"
              value={confirmPassword}
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Confirm password"
              onChange={({ target }) => setConfirmPassword(target.value)}
            ></input>
            <button 
                className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'}`}
            >
                Sign up
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
            <p className="text-sm text-center">
                Already have an account?
            </p>
            <Link to={ROUTES.LOGIN} className="text-blue-500">
                Login
            </Link>
        </div>
      </div>
    </div>
  );
}
