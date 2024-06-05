import React from 'react'

export default function Header() {
  return (
    <header className='flex align-center justify-between px-16 py-4 bg-black text-white'>
      <img src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" alt="logo" className='w-24' />
      <ul className='flex items-center justify-around w-[50%]'>
        <li><a href="/"> Home </a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/learn">Learn</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </header>
  )
}
