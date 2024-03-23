import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addMusicAlbum, clearData } from "../../utils/ItemsByIdSlice";
import SideBarComponent from "./SideBarComponent";
import { MUSIC_APP_LOGO } from "../../utils/constant";
import premium from "../../images/premium.png";
import { FiPlayCircle } from "react-icons/fi";
import { addPlayingSongs } from "../../utils/playingSongSlice";
import { addSongs } from "../../utils/playlistSlice";
import ShimmerUI from "./shimmer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { RxCross1 } from "react-icons/rx";

const CategoryItemId = () => {
    const params = useParams();
    const getToken = useSelector(store => store.accessToken);
    const dispatch = useDispatch();

    const getMusicDetails = useSelector(store => store?.musicsById?.tracks?.items);
    const getType = useSelector(store => store?.musicsById?.type);
    const getDescription = useSelector(store => store?.musicsById?.description);
    const getPlaylistName = useSelector(store => store?.musicsById?.name);
    const getFollower = useSelector(store => store?.musicsById?.followers?.total);
    const getMusicPopularities = useSelector(store => store?.musicsById?.tracks?.items);
    const getPremiumPlan = useSelector(store => store.premiumPlan);

    const images = getPremiumPlan === null ? premium : "";

    console.log(getMusicPopularities);

    useEffect(() => {
        getMusicItemById();

        return () => {
            dispatch(clearData());
        }
    }, []);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };
    const getMusicItemById = async () => {
        //  to get the items based on the above categories 
        const data = await fetch("https://api.spotify.com/v1/playlists/" + params?.trackId, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addMusicAlbum(json));
    }

    const getTime = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    if (getMusicDetails === undefined) return <ShimmerUI />;


    return (
        <>
            <div className="bg-black w-[20%] h-[96px]">
                <img
                    className="w-28 h-16 cursor-pointer"
                    src={MUSIC_APP_LOGO}
                    alt="Logo" />
            </div>
            <SideBarComponent />
            <div className="text-black w-[80%] h-[96px]">
                <div>
                    <div id="category" className="w-[100%] ml-[330px] -mt-[100px] h-64 border border-black bg-gradient-to-b  from-yellow-500 via-black to-black">

                        <h1 className="text-white font-bold text-7xl mt-16 ml-5">{getPlaylistName}</h1>
                        <div className="flex">
                            <p className="ml-6 mt-5 text-sm text-slate-300">{getDescription}</p>
                            <p className="text-base text-slate-300 ml-6 mt-5"> - {getType}</p>

                        </div>
                        <div className="flex mt-3">
                            <img
                                className="w-20 h-10"
                                src={MUSIC_APP_LOGO}
                                alt="Logo" />
                            <p className="text-white font-bold mt-3">Music Sync</p>
                            <p className="text-white font-bold ml-4 mt-[13px]">⚪{getFollower} likes</p>
                            <p className="text-white font-bold ml-4 mt-[13px]">⚪{getMusicDetails.length} songs</p>
                        </div>
                        <div className="h-[562px] overflow-y-scroll scroll-smooth bg-black shadow-xl mt-[23px] overflow-x-hidden">
                            <div className="sticky top-0 bg-black rounded-lg shadow-2xl">
                                <div className=" text-slate-400 grid grid-cols-5">
                                    <div className="w-[60%] ml-12 mt-2">S.no</div>
                                    <div className="w-[60%] mt-2 -ml-[65px]">#title</div>
                                    <div className="w-[500px] float-right mr-[17rem] mt-2 ml-[140px]">Duration</div>
                                    <div className="w-[500px] float-right mr-[17rem] ml-[112px] mt-2">Add To Playlist</div>
                                </div>
                            </div>


                            {getMusicDetails.map((l, index) => (
                                <>
                                    <div className="mt-5 text-white ml-8 grid grid-cols-7 ">
                                        <div className="text-slate-400 col-span-1">{index + 1}</div>
                                        <div className="-ml-[148px]"><img src={l?.track?.album?.images[2]?.url} alt="" /></div>
                                        <div className="font-bold -ml-[251px] overflow-hidden text-ellipsis col-span-1 mr-44 row-span-2">{l?.track?.name}</div>
                                        <span className="text-white">{l?.track?.popularity > 80 ? <img className="w-10 -ml-[37px]" src={images} alt="" /> : ""}</span>
                                        <div className=" float-right mt-2 text-slate-300 col-span-1 -ml-[76px]">{getTime(l?.track?.duration_ms)}</div>
                                        <div> <button className="-ml-[31px] border border-black bg-slate-500 text-white  mr-2 rounded-2xl w-[88px] col-span-1 row-span-1"
                                            onClick={() => dispatch(addSongs(l))}>Add</button></div>
                                        <div className="ml-[100px]">
                                            <div>
                                                {l?.track?.popularity > 80 && getPremiumPlan === null ?
                                                    (<Popup trigger=
                                                        {<FiPlayCircle size="25px" className="hover:text-red-500"
                                                        />}
                                                        className="'border rounded-full"
                                                        contentStyle={{width: "500px", height:"200px" , borderRadius:"5%"}}
                                                        modal nested>
                                                        {
                                                            close => (
                                                                <div className="">
                                                                    <RxCross1 size="28px"
                                                                     className="float-right -mt-10 mr-4 hover:text-red-500 scale-105 transition-all transform"
                                                                     onClick=
                                                                            {() => close()}/>
                                                                    <div className='text-center font-bold text-xl mt-12'>
                                                                       Buy premium Plan!!
                                                                       To Access the Premium Songs
                                                                    </div>
                                                                    <div className="text-center">
                                                                       <Link to="/premium"><button
                                                                         className="border border-blue-600 bg-blue-600 text-white text-lg w-80 p-2 mt-9 rounded-lg hover:scale-105 transition-all transform"
                                                                        onClick=
                                                                            {() => close()}>
                                                                          Buy Premium Plan
                                                                        </button></Link> 
                                                                        
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </Popup>)
                                                    :
                                                    (
                                                        <FiPlayCircle size="25px" className="hover:text-red-500" onClick={() => {
                                                            l?.track?.popularity > 80 && getPremiumPlan !== null ? dispatch(addPlayingSongs(l)) :
                                                                l?.track?.popularity < 80 && dispatch(addPlayingSongs(l));
                                                        }} />
                                                    )


                                                }
                                            </div>
                                        </div>

                                    </div>
                                </>

                            ))}

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}


export default CategoryItemId;


