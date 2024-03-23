import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { MUSIC_APP_LOGO } from "../../utils/constant";

const HeaderMusicSync = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            }).catch((error) => {
                navigate("/Error");
            });
    }
    return (
        <>
            <div className="float-left flex w-[60%] ml-4">
                <img
                    className="w-28 h-16 cursor-pointer mt-4"
                    src={MUSIC_APP_LOGO}
                    alt="Logo" />
                <h1 className="text-2xl font-bold mt-8">Welcome to Music Sync,</h1>
                <span className="text-2xl font-bold text-red-600 mt-8 ml-3">Gaurav</span>


            </div>
            <div className=" float-right w-[30%] mt-8">
                <Link to="/premium"><button className="w-44 ml-32 bg-blue-700 border border-blue-700 text-white p-1 rounded-2xl font-bold">Explore Premium</button></Link>
                <button className="w-32 bg-white border border-white text-black p-1 rounded-2xl font-bold ml-6" onClick={handleSignOut}>logout</button>
            </div>

        </>
    );
}

export default HeaderMusicSync;