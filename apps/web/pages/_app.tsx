import "src/style/index.css";

import type { CustomAppPage } from "next/app";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default memo(App);
