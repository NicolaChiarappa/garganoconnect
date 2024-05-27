"use client";
import React from "react";
import TranslatePage from "./TranslatePage";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 sticky top-0 z-50 justify-between lg:px-48 pr-5'>
      <a className='btn btn-ghost text-xl max-lg:hidden'>GarganoConnect</a>
      <a className='btn btn-ghost text-xl lg:hidden'>GC</a>
      <a className='bg-error px-4 font-bold text-lg ' href='#locations'>
        Be the first and get 20%
      </a>
    </div>
  );
};

export default Navbar;
