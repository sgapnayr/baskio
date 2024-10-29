import "@assets/scss/bootstrap.scss";
import "../assets/scss/app.scss";
import "@assets/icons/font-icon.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
