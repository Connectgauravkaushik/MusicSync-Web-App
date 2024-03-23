import { FiPause, FiPlay } from "react-icons/fi";
import { useSelector } from "react-redux";
import 'react-h5-audio-player/lib/styles.css';
import { useEffect, useRef, useState } from "react";
import { CiVolume } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";
import { BiVolumeMute } from "react-icons/bi";

const Player = () => {
    const getCurrentlyPlayingSongs = useSelector(store => store.CurrentlyPlaying);
    const getArtistName = useSelector(store => store?.CurrentlyPlaying?.track?.artists[0]?.name);
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(50);
    const [showImage, setShowImage] = useState("");
    const [playingSong, setPlayingSong] = useState(getCurrentlyPlayingSongs?.track?.preview_url);
    const [muted, setMuted] = useState(false);



    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);

    };

    function convertDuration(durationseconds) {
        const minutes = Math.floor(durationseconds / 60);
        const seconds = '' + Math.floor(durationseconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${formattedSeconds}`;
    }


    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value / 100;
        setVolume(e.target.value);

    };

    const handleplay = () => {
        audioRef.current.play();
        setIsPlaying(true);

    }

    const handlepause = () => {
        audioRef.current.pause();
        setIsPlaying(false);

    }

    const handlePlayPause = () => {
        if (isPlaying) {
            handlepause();
        } else {
            handleplay();
        }
    }


    useEffect(() => {
        setShowImage(getCurrentlyPlayingSongs?.track?.album?.images[0]?.url);

        getCurrentlyPlayingSongs?.preview_url === undefined ?
            setPlayingSong(getCurrentlyPlayingSongs?.track?.preview_url)
            : setPlayingSong(getCurrentlyPlayingSongs?.preview_url)

        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

        const ref = audioRef.current;
        return () => {
            ref.removeEventListener("timeupdate", handleTimeUpdate);
        };

    }, [getCurrentlyPlayingSongs, volume]);

    console.log(showImage);

    return (
        <div className="border border-black text-white bg-black w-[98.8%] ml-1 h-28 absolute bottom-0 z-20 mt-10 flex shadow-2xl bg-gradient-to-bl from-red-700 via-black to-black">
            <div className="">
                <div className="flex ml-10">
                    <img
                        className="w-16 mt-1"
                        src={
                            getCurrentlyPlayingSongs === null ?
                                "https://i.pinimg.com/736x/23/5e/91/235e91d4700ad78e27d04177c0126277.jpg"
                                :
                                showImage
                        } alt=""></img>


                    <div className="ml-10 w-[260px]">
                        <h2 className="text-sm font-bold">{getCurrentlyPlayingSongs?.track?.name === undefined ? "" : getCurrentlyPlayingSongs?.track?.name}</h2>
                        <h3>{getArtistName === undefined ? "" : getArtistName}</h3>
                    </div>

                </div>
            </div>
            <div >
                <div className="flex ml-[310px]">
                    <div className="-ml-[117px] mt-2 text-white w-[500px]">
                        <div className="track-duration flex">
                            <p className="ml-[23px]">{convertDuration(currentTime)}</p>
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleSeek}

                            />
                            <p className="ml-[23px]">{isNaN(duration) ? "0:00" : convertDuration(duration)}</p>
                        </div>

                        <audio
                            ref={audioRef}
                            muted={muted}
                            src={playingSong}
                        />



                        <button
                            className=" ml-[237px] -mt-[3px] w-[54px]  h-[50px] text-4xl flex items-center justify-center text-white bg-red-700 border-none rounded-[50%] cursor-pointer "
                            onClick={handlePlayPause}>
                            <span>
                                {isPlaying ? <FiPause size="20px" /> : <FiPlay size="20px" />}
                            </span>
                        </button>

                    </div>
                    <div className="flex ml-[220px]">
                        <div><CiVolume className="ml-[9px] mt-[15px]" size="25px" /></div>
                        <input
                            className="ml-[14px] mr-[19px] mt-[31px]"
                            id="volume"
                            type="range"
                            min={0}
                            max={50}
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                        <div><CiVolumeHigh className="mt-[15px]" size="28px" /></div>
                        <div className="ml-[42px] mt-[15px]"> <BiVolumeMute size="26px" onClick={() => setMuted(!muted)} /></div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Player;