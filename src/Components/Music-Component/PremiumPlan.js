
import { useSelector } from "react-redux";
import Header from "../Home-Component/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentGateway from "./paymentGateway";



const PremiumPlan = () => {

    const getPremiumPlan = useSelector(store => store.premiumPlan);
    const [showpaybtn, setShowbtn] = useState(false);

    return (
        <>
            <Header />
            <div>
                <div className="ml-96 mr-96 text-lg font-bold mt-6 flex justify-between">
                    <div>Your Plan</div>
                    <div className="underline"><Link to="/premium">Choose your Plan</Link></div>
                </div>
                <div className={"ml-96 mr-96 border border-red-400 rounded-tl-2xl rounded-tr-2xl mt-12 h-16 bg-red-500 shadow-2xl"}>
                    <h1 className="text-white text-2xl font-bold ml-4 mt-2">{getPremiumPlan?.name}</h1>
                </div>
                <div className="ml-96 mr-96 border border-white rounded-bl-2xl rounded-br-2xl h-14 shadow-2xl">
                    <p className="text-sm font-bold text-black ml-4 mt-2">
                        Terms and conditions apply. Open only to users who haven’t already tried Premium.</p>
                </div>
                <div className="ml-[400px] mr-96 mt-16">
                    <h2 className="text-2xl font-bold">Subscribe</h2>
                    <p className="text-sm">Auto-renews monthly; cancel anytime.</p>
                </div>
                <div className="ml-96 mr-96 border border-black h-44 mt-4">
                    <p className="bg-red-500 text-white font-bold w-44 ml-2 mt-4 rounded-lg text-center">{getPremiumPlan?.priceDetails}</p>
                    <p className="mt-3 text-lg ml-2 font-bold">Monthly subscription</p>
                    <p className="ml-2 mt-3">{getPremiumPlan?.priceDetails} / after offer</p>
                    <img className="float-right w-11 mr-5 -mt-20" src={"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"} alt=""
                        onClick={() => setShowbtn(!showpaybtn)}
                    ></img>

                    {showpaybtn && <PaymentGateway />}
                </div>
            </div>
        </>
    );
}

export default PremiumPlan;