"use client";

import React, { useState, useEffect } from "react";

const TranslatePage = () => {
  const [language, setLanguage] = useState("en");

  return (
    <details className='dropdown '>
      <summary className='m-1 btn'>Language</summary>
      <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
        <li>
          <a onClick={() => setLanguage("it")}>Italiano</a>
        </li>
        <li>
          <a onClick={() => setLanguage("en")}>English</a>
        </li>
      </ul>
    </details>
  );
};

export default TranslatePage;
