import Footer from "./Footer";
import Header from "./Header";
import image from "../../images/image.png";
import Accordion from "./Accordion";
import { HOME_MUSIC_ICON_1, HOME_MUSIC_ICON_2, HOME_MUSIC_ICON_3, HOME_MUSIC_ICON_4 } from "../../utils/constant";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <div className="w-auto h-[500px] bg-red-500 bg-gradient-to-r from-red-600 to-black flex">
                <div className="w-1/2">
                    <h1 className="text-white text-5xl font-bold mt-[145px] ml-[220px] ">Play millions of songs and podcasts, for free.</h1>

                    <button
                        className="border border-white bg-white text-black ml-[220px] mt-12 p-3 rounded-3xl 
                    w-48 font-semibold hover:scale-125 transition-all"><Link to="/SignUp">GET FREE MUSIC</Link></button>
                </div>
                <div className="w-1/3 mt-[76px] ml-[276px]">
                    <img src={image} alt=""></img>
                </div>

            </div>

            <div className="text-center font-bold text-3xl mt-24">Why Music App ?</div>
            <div className="flex ml-40 mr-36 justify-between mt-14">
                <div className="ml-8 text-center">
                    <img
                        className="w-[160px] ml-[75px]"
                        src={HOME_MUSIC_ICON_1} alt=""></img>
                    <h3 className="font-bold text-xl mt-7">Play your favorites.</h3>
                    <p>Listen to the songs you love, and discover new music and podcasts.</p>
                </div>
                <div className="ml-8 text-center">
                    <img
                        className="w-[160px] ml-[75px]"
                        src={HOME_MUSIC_ICON_2} alt=""></img>
                    <h3 className="font-bold text-xl mt-7">Playlists made easy.</h3>
                    <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
                </div>
                <div className="ml-8 text-center">
                    <img
                        className="w-[160px] ml-[57px]"
                        src={HOME_MUSIC_ICON_3} alt=""></img>
                    <h3 className="font-bold text-xl mt-7">Make it yours.</h3>
                    <p>Tell us what you like, and we'll recommend music for you.</p>
                </div>
                <div className="ml-8 text-center">
                    <img
                        className="w-[160px] ml-[75px]"
                        src={HOME_MUSIC_ICON_4} alt=""></img>
                    <h3 className="font-bold text-xl mt-7">Save mobile data.</h3>
                    <p>To use less data when you play music, turn on Data Saver in Settings.</p>
                </div>
            </div>

            <div className="mt-20 w-auto h-[400px] bg-red-500 bg-gradient-to-b from-red-600 to-black text-center font-bold text-4xl text-white">

                <div className="pt-40">
                    It's free.
                </div>
                <div>
                    No credit card required.
                </div>
            </div>
            <Accordion />
            <Footer />
        </>
    );
}

export default Home;