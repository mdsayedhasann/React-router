/* eslint-disable react/jsx-no-undef */
import { Outlet, Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}

      <nav>
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to='/users'>Users</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
        <NavLink className="link" to="/posts">Posts</NavLink>
      </nav>
      
    </div>
  );
};

export default Header;
