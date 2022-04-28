import { useState, useEffect } from 'react'
import Icon from '@hackclub/icons'
import Flag from './flag'
import { Link, routes } from '@redwoodjs/router'

const Join = () => (
  <Link to={routes.signup()} className="badge">
    Join
    <style jsx>{`
      .badge {
        background-color: var(--colors-muted);
        color: var(--colors-background);
        padding: 3px 12px 1px;
        margin-left: 16px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.125s background-color ease-in-out;
      }
      .badge:hover,
      .badge:focus {
        background-color: var(--colors-purple);
      }
    `}</style>
  </Link>
)

const Nav = () => {
  return (
    <nav className="nav">
      <Flag />
      <Link to={routes.home()} href="/" className="nav-link nav-link-home">
        Scrapbook
      </Link>
      <Link to={routes.about()} className="nav-link nav-link-about">
        About
      </Link>
      <a
        href="https://github.com/hackclub/scrapbook"
        className="nav-link nav-link-github"
        title="GitHub"
      >
        <Icon glyph="github" size={32} />
      </a>
      <Link to={routes.newPost()} className="badge">
        Share
      </Link>
      <Link to={routes.signup()} className="badge">
        Join
      </Link>
      <Link to={routes.login()} className="badge">
        Login
      </Link>
      <style>{`
      .badge {
        background-color: var(--colors-muted);
        color: var(--colors-background);
        padding: 3px 12px 1px;
        margin-left: 16px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.125s background-color ease-in-out;
      }
      .badge:hover,
      .badge:focus {
        background-color: var(--colors-purple);
      }
    `}</style>

    </nav>
  )
}

export default Nav
