import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const selectedCourse = useLoaderData();
    console.log(selectedCourse)
    const {price, availableSeats, enrolled} = selectedCourse;
    const fixedPrice = parseFloat(price.toFixed(2))
    const updatedAvailableSeats = availableSeats - 1;
    const newEnrolled = enrolled + 1;
    
   
    return (
        <div>
            <h2 className="text-3xl"> Make a payment for the <span className="text-red-500">{selectedCourse.slogan}</span> Course</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedCourse={selectedCourse} updatedAvailableSeats ={updatedAvailableSeats} newEnrolled={newEnrolled} fixedPrice={fixedPrice}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;