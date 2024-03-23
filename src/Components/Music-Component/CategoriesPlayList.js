import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addMusicItems } from "../../utils/musicCategoryItems";
import HeaderMusicSync from "./MusicSyncHeader";
import SideBarComponent from "./SideBarComponent";
import { clearResults } from "../../utils/featuredSlice";
import ShimmerUI from "./shimmer";

const CategoriesPlayListItem = () => {
    const param = useParams();
    const getToken = useSelector(store => store.accessToken);
    const dispatch = useDispatch();
    const getMusicItems = useSelector(store => store?.musicItem);
    const getFeaturedItem = useSelector(store => store.featuredPlaylist);


    useEffect(() => {
        getMusicCategoryItem();
    }, []);


    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };

    const getMusicCategoryItem = async () => {
        //  to get the items based on the above categories 
        const data = await fetch("https://api.spotify.com/v1/browse/categories/" + `${param.categoryName}` + "/playlists?offset=0&limit=50", API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addMusicItems(json?.playlists?.items));
    }

    if (getMusicItems === null) return <ShimmerUI/>;
    
    if (getFeaturedItem !== null) {
        dispatch(clearResults());
    }

    return (
        <>
            <div className="bg-black">
                <div className="bg-black text-white h-24">
                    <HeaderMusicSync />
                </div>
                <SideBarComponent />
            </div>
            <div className="h-80 border border-black float-right w-[80%] bg-gradient-to-br from-red-500 via-black to-black">
                <h1 className="text-6xl text-white font-bold flex mt-28 ml-7">{param.categoryName}.........</h1>
            </div>
            <div className="flex flex-wrap ml-72  justify-evenly -mt-[28rem] bg-black float-right w-[80%] relative z-10 h-[448px] overflow-y-scroll">

                {getMusicItems.map((i) => (
                    <>
                        <Link to={"/track/" + i?.id}><div className="mt-9 hover:scale-125 transition-all shadow-xl" key={i?.id}>
                            <img
                                className="w-[200px]"
                                src={i?.images[0]?.url} alt=""></img>
                            <h1 className="text-center text-white font-semibold text-lg">{i?.name}</h1>
                        </div></Link>
                    </>
                ))
                }
            </div>
        </>

    )
}

export default CategoriesPlayListItem;