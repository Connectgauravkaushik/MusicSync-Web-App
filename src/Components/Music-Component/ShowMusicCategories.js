import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cacheResults, clearResults } from "../../utils/searchSlice";

const ShowMusicCategories = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [show, setShow] = useState(true);

    const dispatch = useDispatch();

    const categories = useSelector(store => store.categories);
    const getToken = useSelector(store => store.accessToken);
    const searchCache = useSelector(store => store.searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache !== null && searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            if (searchQuery === "") {
                setShow(true);
                dispatch(clearResults());
            }

            else {
                setShow(false);
                playMusic();

            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }


    }, [searchQuery]);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken}`,
        }
    };
    const playMusic = async () => {
        const data = await fetch("https://api.spotify.com/v1/search?q=" + searchQuery + "&type=album&offset=50&limit=50", API_OPTIONS);
        const json = await data.json();
        dispatch(cacheResults(json?.albums?.items));
        console.log(json);
    }




    if (categories === null) return;
   

    return show ? (
        <>
            <div className="">
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    className="border border-slate-400 w-[500px] p-2 rounded-xl bg-black ml-3 focus:border-red-500"
                    type="text"
                    placeholder="What do you want to play ?">
                </input>
            </div>
            <div className="flex flex-wrap ml-72 justify-evenly bg-black -mt-[43.5rem] float-right w-[80%] h-[696px] overflow-y-scroll ">

                {categories.map((c) => (
                    <>
                        <Link to={"/" + c.name}><div className="mt-9 hover:scale-110 transition-all">
                            <img
                                className="w-[200px]"
                                src={c?.icons[0]?.url} alt=""></img>
                            <p className="text-center text-white font-semibold text-xl">{c.name}</p>
                        </div></Link>
                    </>

                ))}
            </div>
        </>


    ) : (
        <>
            <div className="">
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    className="border border-slate-400 w-[500px] p-2 rounded-xl bg-black ml-3 focus:border-red-500"
                    type="text"
                    placeholder="What do you want to play ?">
                </input>
            </div>
            <div className="flex flex-wrap ml-72 justify-evenly bg-black -mt-[43.5rem] float-right w-[80%] h-[696px] overflow-y-scroll ">
                {
                    searchCache !== null && searchCache.map((s) => (
                        <>
                            <Link to={"/albums/" + s.id}><div className="mt-9 hover:scale-110 transition-all">
                                <img
                                    className="w-[200px]"
                                    src={s?.images[1]?.url} alt=""></img>
                                <p className="w-52 text-center text-white font-semibold text-sm overflow-x-hidden text-ellipsis">{s.name}</p>
                            </div></Link>
                        </>

                    ))
                }
            </div>
        </>

    )
}

export default ShowMusicCategories;