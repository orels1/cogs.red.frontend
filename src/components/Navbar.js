import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = props => (
  <div className="Navbar">
    <div className="Navbar__logo">
      <Link to="/" exact className="Navbar__logo-link">Cogs.Red</Link>
    </div>
    <div className="Navbar__search" />
    <div className="Navbar__menu">
      <NavLink
        to="/cogs"
        className="Navbar__menu-link"
        isActive={(match, location) => {
          if (!match) return false;
          return location.pathname !== '/cogs/orels1/Red-Portal-Cogs/redportal';
        }}
        activeClassName="Navbar__menu-link_active"
      >
        cogs
      </NavLink>
      <NavLink to="/cogs/orels1/Red-Portal-Cogs/redportal" exact className="Navbar__menu-link" activeClassName="Navbar__menu-link_active">our cog</NavLink>
      <NavLink to="/about" className="Navbar__menu-link" activeClassName="Navbar__menu-link_active">about</NavLink>
      <a href="https://github.com/Twentysix26/Red-DiscordBot" rel="noopener noreferrer" target="_blank" className="Navbar__menu-link">red-discordbot</a>
      <a href="https://github.com/Twentysix26/Red-Docs" rel="noopener noreferrer" target="_blank" className="Navbar__menu-link">Docs</a>
      <a href="https://discord.gg/red" target="_blank" rel="noopener noreferrer" className="Navbar__menu-link">Community</a>
    </div>
  </div>
);

export default Navbar;
