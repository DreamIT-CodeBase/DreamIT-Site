import "antd/dist/reset.css"; // Import Ant Design CSS first
import "../../public/assets/css/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
