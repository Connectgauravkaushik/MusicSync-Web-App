import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAlbum, addTrackData, clearCart } from "../../utils/searchAlbumSlice";
import { MUSIC_APP_LOGO } from "../../utils/constant";
import SideBarComponent from "./SideBarComponent";
import { clearResults } from "../../utils/featuredSlice";
import { addSongs } from "../../utils/playlistSlice";
import { FiPlayCircle } from "react-icons/fi";
import { addPlayingSongs } from "../../utils/playingSongSlice";


const SearchMusicAlbum = () => {
    const params = useParams();
    const getToken = useSelector(store => store.accessToken);
    const getSearchAlbumData = useSelector(store => store?.searchAlbum);
    const getSearchtrackData = useSelector(store => store?.searchAlbum?.addTrack);
    const getFeaturedItem = useSelector(store => store.featuredPlaylist);

    const dispatch = useDispatch();

    useEffect(() => {
        getAlbum();

        return () => {
            dispatch(clearCart());

        }
    }, []);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };

    const getAlbum = async () => {
        const data = await fetch("https://api.spotify.com/v1/albums/" + params.albumId, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addAlbum(json));
        dispatch(addTrackData(json?.tracks?.items));
    }

    const getTime = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }


    if (getSearchtrackData === null) return;

    if (getFeaturedItem !== null) {
        dispatch(clearResults());
    }


    return (
        <div className="">
            <div className="bg-black w-[20%] h-[96px]">
                <img
                    className="w-28 h-16 cursor-pointer"
                    src={MUSIC_APP_LOGO}
                    alt="Logo" />
            </div>
            <SideBarComponent />
            <div className="w-[80%] h-[96px] ">
                <div className="w-[100%] ml-[330px] -mt-[100px] h-[818px] border border-black bg-gradient-to-b  from-green-500  via-black to-black">
                    <div className="flex ">
                        <img
                            className="ml-16 mt-8 shadow-2xl"
                            src={getSearchAlbumData?.addAlbumData?.images[1]?.url} alt=""></img>
                        <h1 className="text-5xl font-bold text-white mt-36 ml-3">{getSearchAlbumData?.addAlbumData?.name}</h1>
                    </div>
                    <p className="text-lg text-white fint-bold -mt-20 ml-96 ">{getSearchAlbumData?.addAlbumData?.label}</p>
                    <br></br>
                    <hr className="mt-28  border border-slate-500"></hr>
                    <div className="h-[385px] overflow-y-scroll scroll-smooth bg-black shadow-xl mt-[15px] overflow-x-hidden">

                        <div className="sticky top-0 bg-black rounded-lg shadow-2xl">
                            <div className=" text-slate-400 grid grid-cols-4">
                                <div className="w-[60%] ml-12 mt-2">S.no</div>
                                <div className="w-[60%] ml-12 mt-2">#title</div>
                                <div className="w-[500px] float-right mr-[17rem] ml-[290px] mt-2">Duration</div>
                                <div className="w-[500px] float-right mr-[17rem] ml-[116px] mt-2">Add To Playlist</div>
                            </div>

                        </div>
                        {getSearchtrackData.map((l, index) => (
                            <div className="mt-5 text-white ml-8 grid grid-cols-6">
                                <div className="text-slate-400 col-span-1">{index + 1}</div>
                                <div className="-ml-[85px]"><img src={getSearchAlbumData?.addAlbumData?.images[2].url} alt=""></img></div>
                                <div className="font-bold -ml-[169px] overflow-hidden text-ellipsis col-span-1 mr-44 row-span-2">{l?.name}</div>
                                <div className=" float-right mt-2 text-slate-300 col-span-1 ml-[288px]">{getTime(l?.duration_ms)}</div>
                                <div><button className="font-semibold ml-[224px] border border-black bg-slate-600 text-white  mr-2 rounded-2xl w-[88px] col-span-1 row-span-1"
                                    onClick={() => dispatch(addSongs(l))}>Add</button></div>
                                <div className="ml-[170px]">
                                    <FiPlayCircle size="25px" className="hover:text-red-500" onClick={() => dispatch(addPlayingSongs(l))} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}


export default SearchMusicAlbum;