import "../styles/globals.css";

import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
