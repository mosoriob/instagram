import React from "react";
import { Link } from "react-router-dom";
const Header = ({ username }) => {
  return (
    <div className="flex justify-between p-4">
      <Link to={`/p/${username}`} className="flex items-center">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={`images/avatars/${username}.jpg`}
          alt={`${username} profile`}
        />
        <p className="font-bold">{username}</p>
      </Link>
    </div>
  );
};
export default Header;
