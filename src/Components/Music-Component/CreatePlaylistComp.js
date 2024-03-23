import { useEffect, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingSongs } from "../../utils/playingSongSlice";

const CreatePlayListComp = () => {
  const [showImage, setShowImage] = useState("https://i.pinimg.com/736x/23/5e/91/235e91d4700ad78e27d04177c0126277.jpg");
  const getplayListSongs = useSelector(store => store?.playlistSongs);
  const [getplaylist, setplaylist] = useState(getplayListSongs);
  const [searchSong, setSearchsongs] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setShowImage(URL.createObjectURL(e.target.files[0]));
  }

  const getTime = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const searchSongs = (e) => {
    setSearchsongs(e.target.value);
  }

  useEffect(() => {

    const filteredSongs = getplayListSongs.filter((l) => { return l?.track?.name.toLowerCase().includes(searchSong.toLowerCase()) });
    setplaylist(filteredSongs);

  }, [searchSong]);




  return (
    <div className="flex flex-wrap  ml-72 justify-evenly bg-black -mt-[45.5rem] float-right w-[80%] h-[728px] overflow-y-hidden text-white ">
      <div className="flex w-[100%]  ml-[0px] -mt-[19px] h-[418px] border border-black bg-gradient-to-b  from-slate-500  via-black to-black">
        <div className="-mt-[124px]">
          <img
            className="w-64 mt-44 ml-4 shadow-2xl"
            src={showImage} alt=""></img>
        </div>

        <h1 className="mt-36 text-6xl font-bold ml-3">My Playlist-1</h1>
      </div>
      <div className="-mt-[120px]  font-bold text-base w-96 ml-[700px] h-[49px]">

        <input
          className="w-96 p-2 cursor-pointer bg-gray-700 border border-gray-700"
          type="text" placeholder="Search for songs and albums"
          value={searchSong}
          onChange={searchSongs}
        ></input>

      </div>

      <div className="sticky top-0 bg-black shadow-2xl -mt-[22px] overflow-x-hidden h-[430px]">
        <div className=" text-slate-400 grid grid-cols-4">
          <div className="w-[60%] ml-12 ">S.no</div>
          <div className="w-[60%] -ml-[108px] ">#title</div>
          <div className="w-[500px] float-right mr-[17rem] ml-[0px]">Duration</div>
        </div>

        {getplaylist.map((l, index) => (
          <div className=" text-white ml-8 grid grid-cols-5 mt-3 ">
            <div className="text-slate-400 col-span-1">{index + 1}</div>
            <div className="-ml-[148px]"><img src={l?.track?.album?.images[2]?.url} alt="" /></div>
            <div className="font-bold  overflow-hidden text-ellipsis col-span-1 mr-44 row-span-2 -ml-[314px] mt-[19px]">{l?.track?.name}</div>
            <div className=" float-right  text-slate-300 col-span-1 -ml-[124px]">{getTime(l?.track?.duration_ms)}</div>
            <div className="ml-[100px]"><FiPlayCircle size="25px" className="hover:text-red-500" onClick={() => dispatch(addPlayingSongs(l))} /></div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default CreatePlayListComp;