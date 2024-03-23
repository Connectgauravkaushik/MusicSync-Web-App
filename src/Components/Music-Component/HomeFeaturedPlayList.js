import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UseFeaturedData } from "../../Custom-hooks/useFeaturedData";


const FeaturedPlaylist = () => {
    UseFeaturedData();
    const getFeaturedItem = useSelector(store => store.featuredPlaylist);
    const getPlaylistID = useSelector(store => store?.musicsById);

  
    if (getFeaturedItem === null) return ;
    if (getPlaylistID !== null) return;

    return (
        <div className="flex flex-wrap ml-72 justify-evenly bg-black -mt-[45.5rem] float-right w-[80%] h-[728px] overflow-y-scroll text-white ">
            {getFeaturedItem.map((c) => (
                <Link to={"/track/" + c?.id}><div className="mt-9 hover:scale-110 transition-all" key={c?.id}>
                    <img
                        className="w-[200px]"
                        src={c?.images[0]?.url} alt=""></img>
                    <p className="w-52 text-center text-white font-semibold text-sm overflow-x-hidden text-ellipsis">{c.name}</p>
                </div></Link>
            ))}

        </div>
    )
}

export default FeaturedPlaylist;