import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const CustomFlutterWaveButton = ({
  name,
  email,
  amount,
  phone_number,
  className,
}) => {
  const config = {
    public_key: "FLWPUBK_TEST-bfa6ac065a0a03235ef4c2649111314e-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "USD",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: email,
      phone_number: phone_number,
      name: name,
    },
    customizations: {
      title: "Delegate Pass Purchase",
      description: "Payment for ADIS tickets",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: `Pay $${amount} with Flutterwave!`,
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return <FlutterWaveButton {...fwConfig} className={className} />;
};

export default CustomFlutterWaveButton;
