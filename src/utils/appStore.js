import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import accessTokenSlice from './accessTokenSlice';
import musicCategoriesSlice from "./musicCategoriesSlice";
import musicCategoryItems from "./musicCategoryItems";
import ItemsByIdSlice from "./ItemsByIdSlice";
import searchSlice from "./searchSlice";
import searchAlbumSlice from "./searchAlbumSlice";
import featuredSlice from "./featuredSlice";
import playlistSlice from "./playlistSlice";
import PremiumPlanSlice from "./PremiumPlanSlice";
import playingSongSlice from "./playingSongSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            accessToken: accessTokenSlice,
            categories: musicCategoriesSlice,
            musicItem: musicCategoryItems,
            musicsById: ItemsByIdSlice,
            searchQuery: searchSlice,
            searchAlbum: searchAlbumSlice,
            featuredPlaylist: featuredSlice,
            playlistSongs:playlistSlice,
            premiumPlan:PremiumPlanSlice,
            CurrentlyPlaying:playingSongSlice
        }
    }
);

export default appStore;