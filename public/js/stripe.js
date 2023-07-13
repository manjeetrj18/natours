/*eslint-disable*/
import axios from "axios";
import { showAlert } from "./alerts";

const stripe = Stripe(
  "pk_test_51NPHmZSIf3raM9B2RfnHqzABpT3Ti9lYy8jeqfFlQWvglr9TE1y99ly2E9u2kFCcoVO8MYifKkaEiJQxuj2g2Jf400vg1Ya5w4"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);
    // Create checkout form + charge credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    })
  } catch (error) {
    console.log(error);
    showAlert("error", error);
  }
};
