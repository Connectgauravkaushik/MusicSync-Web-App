import Header from "./Header";
import Footer from "./Footer";
import image2 from "../../images/d.png";
import UPI from "../../images/UPI.png";
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.webp";
import american from "../../images/american.png";
import { MUSIC_APP_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPremiumPlan } from "../../utils/PremiumPlanSlice";

const Premium = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <div className=" border border-black bg-black" id="linearPremium">
                <div>
                    <div className="w-1/2 ml-60 text-white  float-left mt-[122px]">
                        <h1 className="text-5xl font-bold">Listen without limits. Try 2 months of Premium for ₹119.</h1>
                        <p className="text-lg mt-10 font-bold">Only ₹119/month after. Cancel anytime.</p>
                        <div className=" mt-16">
                            <button className=" border border-blue-600 bg-blue-700 text-white rounded-full p-3 w-60 font-bold hover:scale-110 transition-all">Get Premium Individual</button>
                            <button className="ml-20 bg-black border border-slate-100 font-semibold p-3 w-48 rounded-full hover:scale-110 transition-all">View All Plans</button>
                        </div>
                        <div className="w-1/3 mt-10">
                            <p className="text-white text-xs">₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before.</p>
                        </div>
                    </div>
                    <div className="w-1/3 float-right ">
                        <img className="w-[591px]" src={image2} alt=""></img>
                    </div>
                </div>
                <br></br>
                <div>
                    <div className="text-center">
                        <div className="text-white mt-[42rem] font-bold text-4xl">Experience the difference</div>
                        <div className="text-white text-lg mt-5 ml-96 mr-96">Go Premium and enjoy full control of your listening. Cancel anytime.</div>
                    </div>
                    <div className="mt-10">
                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>What you'll get</h3>
                            <h3 className="ml-14 text-center">MusicSync Free plan</h3>
                            <h3 className="ml-14">Premium</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>Ad-free music listening</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>Download to listen offline</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>Play songs in any order</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>High audio quality</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>Listen with friends in real time</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />

                        <div className="flex text-white ml-[610px] mr-[610px] justify-between">
                            <h3>Organize listening queue</h3>
                            <h3 className="ml-14 text-center">___</h3>
                            <h3 className="ml-14">☑️</h3>
                        </div>
                        <hr className="ml-[610px] mr-[610px] mt-10" />
                    </div>
                    <div className="text-center mt-64">
                        <div className="text-white  font-bold text-4xl">Affordable plans for any situation</div>
                        <div className="text-white text-lg mt-5 ml-96 mr-96">Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mt-12">
                            <img src={UPI}
                                className="w-[85px] h-[40px] bg-white border-white"
                                alt=""></img>
                            <img
                                className="w-[85px] h-[40px] ml-4"
                                src={visa} alt=""></img>
                            <img
                                className="w-[85px] ml-4 h-[40px] bg-white border-white"
                                src={mastercard} alt=""></img>
                            <img
                                className="w-[85px] ml-4 h-[40px]  bg-white border-white"
                                src={american} alt=""></img>
                        </div>
                    </div>

                    <div>
                        <div className="text-white  font-bold text-2xl ml-[43rem] mt-20 w-1/3" id="#premiumPlans">All Premium plans include</div>
                    </div>
                </div>
                <div className="bg-black text-white ml-[670px] mt-6">
                    <ul>
                        <li>☑️Ad-free music listening</li>
                        <li>☑️Download to listen offline</li>
                        <li>☑️Play songs in any order</li>
                        <li>☑️High audio quality</li>
                        <li>☑️Listen with friends in real time</li>
                        <li>☑️Organize listening queue</li>
                    </ul>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="flex justify-around ml-20 mr-20 ">
                    <div className="border border-slate-700 w-1/4 h-[440px] rounded-xl bg-gradient-to-tl from-green-300 via-black to-black">
                        <div className=" ">
                            <div className="flex">
                                <img
                                    className="w-[77px] h-[41px]"
                                    src={MUSIC_APP_LOGO} alt=""></img>
                                <p className="text-white mt-3">Premium</p>
                            </div>
                            <div className="mt-8 ml-5">
                                <h1 className="text-green-300 font-bold text-3xl">Mini</h1>
                                <p className="text-white font-semibold text-lg mt-4">₹50 for 1 month</p>
                            </div>
                            <hr className="ml-4 mr-4 mt-10" />
                            <div className="text-white mt-8 ml-5">
                                <ul>
                                    <li>. 1 mobile-only Premium account</li>
                                    <li>. Offline listening of up to 30 songs on 1 device</li>
                                    <li>. One-time payment</li>
                                    <li>. Basic audio quality</li>
                                </ul>
                            </div>
                            <div className="text-black font-semibold ml-20 mt-[58px]">
                                <Link to="/plan">
                                    <button className="bg-green-500 rounded-full p-2 w-52 hover:scale-110 transition-all" onClick={() => {
                                        dispatch(addPremiumPlan({
                                            name: "Mini",
                                            price: "5000",
                                            priceDetails: "₹50 for 1 month",
                                            color: "green"
                                        }))
                                    }}>Get Premium Mini</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="border border-slate-700 w-1/4 h-[440px] rounded-xl bg-gradient-to-tl from-orange-300 via-black to-black">
                        <div className=" ">
                            <div className="w-1/2 h-7 text-black font-semibold text-lg rounded-br-3xl mt-1 bg-orange-400">
                                <p className="ml-2">₹119 for 2 months</p>
                            </div>
                            <div className="flex mt-4">
                                <img
                                    className="w-[77px] h-[41px]"
                                    src={MUSIC_APP_LOGO} alt=""></img>
                                <p className="text-white mt-3">Premium</p>
                            </div>
                            <div className="mt-8 ml-5">
                                <h1 className="text-orange-300 font-bold text-3xl">Individual</h1>
                                <p className="text-white font-semibold text-lg mt-4">₹119 for 2 months</p>
                            </div>
                            <hr className="ml-4 mr-4 mt-10" />
                            <div className="text-white mt-8 ml-5">
                                <ul>
                                    <li>. 1 Premium account</li>
                                    <li>. Cancel anytime</li>
                                    <li>. Subscribe or one-time payment</li>

                                </ul>
                            </div>
                            <div className="text-black font-semibold ml-20 mt-9">
                                <Link to="/plan">
                                    <button className="bg-orange-500 rounded-full p-2 w-52 hover:scale-110 transition-all"
                                        onClick={() => {
                                            dispatch(addPremiumPlan({
                                                name: "Individual",
                                                price: "11900",
                                                priceDetails: "₹119 for 2 months",
                                                color: "orange"
                                            }))
                                        }}
                                    >Get Premium Individual</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="border border-slate-700 w-1/4 h-[440px] rounded-xl bg-gradient-to-tl from-purple-400 via-black to-black">
                        <div className=" ">
                            <div className="w-1/2 h-7 text-black font-semibold text-lg rounded-br-3xl mt-1 bg-purple-300">
                                <p className="ml-2">₹59 for 2 months</p>
                            </div>
                            <div className="flex mt-4">
                                <img
                                    className="w-[77px] h-[41px]"
                                    src={MUSIC_APP_LOGO} alt=""></img>
                                <p className="text-white mt-3">Premium</p>
                            </div>
                            <div className="mt-8 ml-5">
                                <h1 className="text-purple-400 font-bold text-3xl">Student</h1>
                                <p className="text-white font-semibold text-lg mt-4">₹59 for 2 months</p>
                            </div>
                            <hr className="ml-4 mr-4 mt-10" />
                            <div className="text-white mt-8 ml-5">
                                <ul>
                                    <li>. 1 Premium account</li>
                                    <li>. Discount for eligible students</li>
                                    <li>. Cancel anytime</li>
                                </ul>
                            </div>
                            <div className="text-black font-semibold ml-20 mt-9">
                                <Link to="/plan">
                                    <button className="bg-purple-500  rounded-full p-2 w-52 hover:scale-110 transition-all"
                                        onClick={() => {
                                            dispatch(addPremiumPlan({
                                                name: "Student",
                                                price: "5900",
                                                priceDetails: "₹59 for 2 months",
                                                color: "purple"
                                            }))
                                        }}
                                    >Get Premium Student</button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>

        </>
    );
}

export default Premium;