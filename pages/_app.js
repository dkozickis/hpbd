// /pages/_app.js
import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Faster+One&display=swap");
        `}</style>
      </div>
    );
  }
}
export default MyApp;
