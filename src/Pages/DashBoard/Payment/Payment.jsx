import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const selectedCourse = useLoaderData();
    const {price} = selectedCourse;
    const fixedPrice = parseFloat(price.toFixed(2))
   
    return (
        <div>
            <h2 className="text-3xl"> Make a payment for the Course</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedCourse={selectedCourse} fixedPrice={fixedPrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;