import { useState } from "react";
import AudioFiles from "./AudioFiles";
import { audios } from "./audioData";
import "./musicPlayer.css";
import Player from "./Player";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsMusicPlayerFill } from "react-icons/bs";

const Music = () => {
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };
  const nextSong = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentSong(audios[currentIndex + 1]);
  };
  const prevSong = () => {
    setCurrentIndex(currentIndex - 1);
    setCurrentSong(audios[currentIndex - 1]);
  };
  return (
    <section id="music">
      <>
      <PageHeaderContent
      headerText = "Drop Chain Ent. Music"
      icon={<BsMusicPlayerFill size={40}/>}
      />
        <div className="player-main">
          <Player
            currentSong={currentSong}
            currentIndex={currentIndex}
            nextSong={nextSong}
            prevSong={prevSong}
          />
        </div>
        <div className="app-main" data-aos="fade-up">
          {songs.map((song, index) => {
            return (
              <AudioFiles key={index} song={song} getSongData={getSongData} index={index} />
            );
          })}
        </div>
      </>
    </section>
  );
};

export default Music;
