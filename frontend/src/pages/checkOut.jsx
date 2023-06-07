import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckOut } from "../components/CheckOut";

const stripePromise = loadStripe(
  "pk_test_51NBrxZExwc4I2AGOECdsJI1NQzZ3lgzwjFpW57EFWFT5ngnu30J0kQoZDWj6fkEydSzVtFdg9TrdlCmXDlQrV5jA00hskiwfLZ"
);

export default function Home() {
  return (
    <Elements stripe={stripePromise}>
      <main>
        <CheckOut />
      </main>
    </Elements>
  );
}
