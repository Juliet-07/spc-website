import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const CustomFlutterWaveButton = ({
  name,
  email,
  amount,
  phone_number,
  className,
  currency,
}) => {
  const publicKey = getPublicKeyForCurrency(currency);

  const config = {
    public_key: publicKey,
    tx_ref: Date.now(),
    amount: amount,
    currency: currency,
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
    text: `Pay ${amount} ${currency} with Flutterwave!`,
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return <FlutterWaveButton {...fwConfig} className={className} />;
};

// Function to get the appropriate public key based on the currency
const getPublicKeyForCurrency = (currency) => {
  // Add logic to map currencies to their respective Flutterwave public keys
  // You may want to store this mapping somewhere, like in a configuration file
  // For demonstration purposes, this is a simple example:
  const currencyPublicKeyMap = {
    USD: "YOUR_USD_PUBLIC_KEY",
    EUR: "YOUR_EUR_PUBLIC_KEY",
    // Add more currencies as needed
  };

  return currencyPublicKeyMap[currency] || "DEFAULT_PUBLIC_KEY";
};

export default CustomFlutterWaveButton;
