import { useState } from "react";
import style from "./AudioStream.module.css";

function AudioStream() {
  let body,
    num,
    array,
    width,
    context,
    logo,
    myElements,
    analyser,
    src,
    height,
    stream;

  num = 32;
  array = new Uint8Array(num * 2);
  width = 10;

  const [music, setMusic] = useState("");

  async function goStream() {
    if (context) return;
    body = document.querySelector("#newid");

    body.querySelector("#btn44").remove();

    for (let i = 0; i < num; i++) {
      logo = document.createElement("div");
      logo.className = "logo";
      logo.style.background = "red";
      logo.style.minWidth = width + "px";
      body.appendChild(logo);
    }

    myElements = document.getElementsByClassName("logo");
    context = new AudioContext();
    analyser = context.createAnalyser();

    let displayMediaOptions = {
      video: {
        cursor: "always",
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    };

    stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    // console.log(stream, stream.getAudioTracks());
    src = context.createMediaStreamSource(stream);
    src.connect(analyser);
    loop();

    const mStrm = stream.getTracks()[0];
    export {mStrm}
    setMusic(mStrm);

    console.log(music);

    function loop() {
      window.requestAnimationFrame(loop);
      analyser.getByteFrequencyData(array);
      for (let i = 0; i < num; i++) {
        height = array[i + num];
        myElements[i].style.minHeight = height + "px";
        myElements[i].style.opacity = 0.008 * height;
      }
    }
  }

  return (
    <div id="newid" className={style.musicBox}>
      <canvas id="canvas1"></canvas>
      <button className={style.musicBtn} onClick={() => goStream()} id="btn44">
        Начать трансляцию
      </button>
    </div>
  );
}

export default AudioStream;
