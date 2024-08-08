import { NavLink } from "react-router-dom";
import profile from "/src/assets/profile.png";

export default function Header() {
  return (
    <header>
      <ul id="header">
        <li id="space">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <img src={profile} alt="" />
          </NavLink>
        </li>
        <li className="header-item">
          <NavLink
            to="Works"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Works
          </NavLink>
        </li>
        <li className="header-item">
          <NavLink
            to="Blog"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Blog
          </NavLink>
        </li>
        <li className="header-item">
          <NavLink
            to="Contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
