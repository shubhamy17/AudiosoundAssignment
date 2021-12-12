import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../styles/BabblebotAssistant.css";
import Babblebot from "./Babblebot";
import Footer from "./Footer";

const BabblebotAssistant = () => {
  const commands = [
    {
      command: "open *",
      callback: (site) => window.open("https://" + site),
    },
  ];

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <Babblebot />

      <div className="diffrent">
        <div className="mainimg">
          <div className="main"></div>
        </div>

        <div className="mainDiv">
          <div>
            <h1>Check Mic</h1>
          </div>
          <div className="newMessage">
            <div className="micStatus">
              <div className="mic">
                {listening ? (
                  <div class="on">
                    <div class="dots">
                      <MicIcon
                        onClick={SpeechRecognition.startListening}
                        style={{ fill: "#4285f4", margin: "24px" }}
                      />
                      <p>Speak Now</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div class="off">
                      <div class="dots">
                        <MicIcon
                          onClick={SpeechRecognition.startListening}
                          style={{ fill: "red", margin: "24px" }}
                        />
                        <p>Turn on</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="message">{transcript}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BabblebotAssistant;
