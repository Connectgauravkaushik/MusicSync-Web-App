import { useEffect } from "react";
import { addFeaturedMusic, clearResults } from "../utils/featuredSlice";
import { useDispatch, useSelector } from "react-redux";


export const UseFeaturedData = () => {
    const getToken = useSelector(store => store.accessToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if(getToken !== null) {
            getMusicCategoryItem();
        }

    }, [getToken]);


    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };

    const getMusicCategoryItem = async () => {
        const data = await fetch("https://api.spotify.com/v1/browse/featured-playlists", API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addFeaturedMusic(json?.playlists?.items));
      

    }
}