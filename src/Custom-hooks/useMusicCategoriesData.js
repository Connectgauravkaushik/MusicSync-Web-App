import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusicCategories, clearCart } from "../utils/musicCategoriesSlice";

export const UseMusicCategoriesData = () => {
    const getToken = useSelector(store => store.accessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (getToken !== null) {
            searchArtists();
        }
        return()=>{
            dispatch(clearCart());
        }
    }, [getToken]);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };
    const searchArtists = async () => {
        const data = await fetch("https://api.spotify.com/v1/browse/categories?offset=0&limit=50", API_OPTIONS);
        const json = await data.json();
        // const Items = json?.categories?.items;
        console.log(json?.categories?.items);
        dispatch(addMusicCategories(json?.categories?.items));
    }
}