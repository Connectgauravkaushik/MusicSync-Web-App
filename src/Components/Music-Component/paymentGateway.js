import { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";

import { useDispatch, useSelector } from "react-redux";
import { RazorPayConfig } from "../../utils/constant";
import { addPremiumPlan, clearPlanCart } from "../../utils/PremiumPlanSlice";
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
    const [Razorpay, isLoaded] = useRazorpay();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getPremiumPlan = useSelector(store => store.premiumPlan);
    const getPremiumPlanPrice = useSelector(store => store.premiumPlan.price);

    const handlePayment = useCallback(() => {
        const order = "";

        const options = {
            key: RazorPayConfig.apiKey,
            amount: getPremiumPlanPrice,
            currency: "INR",
            name: getPremiumPlan?.name,
            description: "Test Transaction",
            order_id: order.id,
            handler: (res) => {
                console.log(res);
                if (true) {
                    dispatch(clearPlanCart());
                    navigate("/home");
                    dispatch(addPremiumPlan({ message: "Success" }));
                 
                }

            },
            prefill: {
                name: "Gaurav",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    useEffect(() => {
        if (isLoaded) {
            handlePayment();

        }



    }, [isLoaded, handlePayment])

    return (
        <div>
            <button className="text-white bg-black rounded-2xl ml-2 w-28 mt-3 p-1 " onClick={handlePayment}>Pay Now</button>
        </div>

    );
}

export default PaymentGateway;