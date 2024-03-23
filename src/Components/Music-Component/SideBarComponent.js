import { useState } from "react";
import FeaturedPlaylist from "./HomeFeaturedPlayList";
import ShowMusicCategories from "./ShowMusicCategories";
import CreatePlayListComp from "./CreatePlaylistComp";
import Player from "./Player";

const SideBarComponent = () => {

    const [showSearcComponent, setSearchComponent] = useState(false);
    const [showFeaturedComponent, setFeaturedComponent] = useState(true);
    const [showPlaylist, setPlaylist] = useState(false);


    const loadFeaturedComponent = () => {
        setFeaturedComponent(true);
        setSearchComponent(false);
        setPlaylist(false);
    }

    const loadSearchComponent = () => {
        setSearchComponent(true);
        setFeaturedComponent(false);
        setPlaylist(false);
    }

    const loadPlaylistComponent = () => {
        setPlaylist(true);
        setFeaturedComponent(false);
        setSearchComponent(false);

    }

    return (
        <>
            <div className="float-left w-[20%] border border-black h-[718px] bg-black text-white ">

                <div className="flex mt-6 ml-6 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 64 64" style={{ fill: "#FFFFFF" }}>
                        <path d="M 32 4.0605469 L 31.876953 4.1835938 L 31.767578 4.0742188 L 7.921875 27.921875 L 8 28 L 8 28.060547 L 8 56 L 16 56 L 16 31.15625 L 34.71875 12.4375 L 51.990234 29.699219 L 52 56 L 56 56 L 55.990234 28.050781 L 32 4.0605469 z M 25 34 L 25 56 L 27 56 L 29 56 L 37 56 L 39 56 L 41 56 L 41 34 L 25 34 z"></path>
                    </svg>
                    <button className="font-semibold text-lg ml-4" onClick={loadFeaturedComponent}>
                        Home
                    </button>

                </div>
                <div className="flex mt-3 ml-6 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50"
                        style={{ fill: "#FFFFFF" }}>
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                    </svg>
                    <button className="font-semibold text-lg ml-4 " onClick={loadSearchComponent}>Search</button>
                </div>
                <div className="flex ml-7 hover:text-gray-500 mt-20 ">
                    <div className="border border-slate-800 w-[280px] h-[210px] rounded-xl bg-slate-800 ">
                        <h2 className="ml-2 text-white font-bold text-lg">Create your first Playlists</h2>
                        <p className="ml-2 text-white font-bold text-sm mt-6">It's easy, we will help you</p>
                        <button className="text-black bg-white text-sm p-1 border border-white rounded-full mt-20 ml-2 w-32 font-bold"
                            onClick={loadPlaylistComponent}>Create Playlist</button>
                    </div>

                </div>

            </div>
            {showFeaturedComponent && <FeaturedPlaylist />}
            {showSearcComponent && <ShowMusicCategories />}
            {showPlaylist && <CreatePlayListComp />}
   
            <Player/>

        </>
    );
}

export default SideBarComponent;