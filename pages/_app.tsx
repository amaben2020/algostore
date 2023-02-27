import type { AppProps } from "next/app";
import CartState from "../components/context/state";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <Component {...pageProps} />
    </CartState>
  );
}

export default MyApp;
