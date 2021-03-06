import React from "react";
import App, { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "../reducers/configureStore";
import "../style/login.css";
import "../style/schedule.css";
import "../style/modal.css";
// store 설정파일 로드
const store = configureStore();

const TestApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

TestApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default TestApp;
