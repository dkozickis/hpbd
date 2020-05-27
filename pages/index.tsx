import Head from "next/head";
import ReactFullpage from "@fullpage/react-fullpage";
import YouTube from "react-youtube";
import React from "react";

export default class Home extends React.Component {
  youtubePlayer: YT.Player;

  render() {
    return (
      <>
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000} /* Options here */
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <h1
                    onClick={() => {
                      fullpageApi.moveSectionDown();
                      this.youtubePlayer.playVideo();
                      setTimeout(() => {
                        // this.youtubePlayer.
                        // this.youtubePlayer.pauseVideo();
                        this.youtubePlayer.seekTo(999999, true);
                        fullpageApi.moveSectionDown();
                      }, 55000);
                    }}
                    className="title"
                  >
                    Do you want to fly?
                  </h1>
                </div>
                <div className="section">
                  <YouTube
                    videoId={"wn-91qR511k"}
                    id={"veryId"}
                    className={"youtube"}
                    containerClassName={"youtubeContainer"}
                    opts={{
                      height: "390",
                      width: "640",
                      playerVars: {
                        autoplay: 0,
                        // playsinline: 1,
                      },
                    }}
                    onReady={({ target }) => (this.youtubePlayer = target)}
                    // onEnd={() => {
                    // fullpageApi.moveSectionDown();
                    // }}
                    onPlay={() => console.log("PLAY")}
                    onStateChange={() => console.log("CHANGE")}
                  />
                </div>
                <div className="section">
                  <h1 className="title">You decide when</h1>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <Head>
          <title>Alina - 29</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <style jsx global>{`
          .section {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }

          .title {
            font-family: "Faster One";
            text-align: center;
            text-transform: uppercase;
          }

          .youtubeContainer {
            display: flex;
            justify-content: center;
            align-itenms: center;
          }

          .youtube {
            // width: 100%;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </>
    );
  }
}
