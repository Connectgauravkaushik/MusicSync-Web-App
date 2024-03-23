import { Link, useNavigate } from "react-router-dom";
import { MUSIC_APP_LOGO } from "../../utils/constant";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = () => {
    const user = useSelector(store => store?.user);
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
            <div className="flex items-center bg-black text-white font-bold h-24">
                <div className="ml-[100px]">
                    <Link to="/"><img
                        className="w-28 h-16 cursor-pointer"
                        src={MUSIC_APP_LOGO}
                        alt="Logo" /></Link>

                </div>
                {user === null ? <h1 className="text-3xl">MusicSync</h1> 
                : 
                 <div className="flex"> <h1 className="text-xl">MusicSync, Welcome to Premium</h1> 
                  <p className="text-red-500 font-bold text-xl ml-2 uppercase">{user.displayName}</p>
                 
                 </div> }

                {user === null ? 
                <div className="flex items-center ml-[605px]">
                    <button className="ml-20 hover:text-red-600"><Link to="/premium">Premium</Link></button>
                    <button className="ml-14 hover:text-red-600">Support</button>
                    <button className="ml-10"> | </button>
                    <button className="ml-14 hover:text-red-600">
                        <Link to="/SignUp"> Sign Up</Link>
                    </button>
                    <button className="ml-14 hover:text-red-600">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
                    :
                    <div className="flex items-center ml-[300px]">
                        <button className="ml-[4.5rem] hover:text-red-600">Support</button>
                        <button className="ml-10"> | </button>
                        <Link to="/premium"><button className="w-44 ml-12 bg-blue-700 border border-blue-700 text-white p-1 rounded-2xl font-bold">Explore Premium</button></Link>
                        <button className="w-32 bg-white border border-white text-black p-1 rounded-2xl font-bold ml-14" onClick={handleSignOut}>logout</button>
                    </div>

                }
                
            </div>
            
        </>
    );
}

export default Header;