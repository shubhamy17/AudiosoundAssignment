import React from "react";
import ReactAudioPlayer from "react-audio-player";
import sound from "../assets/sound.flac";
import Babblebot from "./Babblebot";
import "../styles/BabblebotSound.css";
import Footer from "./Footer";
function BabblebotSound() {
  return (
    <>
      <Babblebot />
      <div className="Audio">
        <div className="headphone"></div>
        <ReactAudioPlayer src={sound} controls />
      </div>
      <Footer />
    </>
  );
}

export default BabblebotSound;
