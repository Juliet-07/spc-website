import React, { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";

const CustomFlutterWaveButton = ({
  name,
  email,
  amount,
  phone_number,
  className,
}) => {
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // exchangeRates
  const exchangeRates = {
    USD: 1,
    NGN: 1279,
    GHS: 13,
    KES: 167,
    RWF: 1345,
    ZAR: 19,
  };
  // function to convert amount to the desired currency
  const convertAmount = () => {
    const exchangeRate = exchangeRates[selectedCurrency] || 1;
    return amount * exchangeRate;
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const config = {
    // FLWPUBK-c6f724817c1f64161aca009fa198bb17-X
    public_key: "FLWPUBK_TEST-94613899ad48523e9213a1351b5e9505-X",
    tx_ref: Date.now(),
    amount: parseInt(convertAmount()),
    currency: selectedCurrency,
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
    text: `Pay ${selectedCurrency}${convertAmount()} with Flutterwave!`,
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
      if (response.status === "successful" || "completed") {
        navigate("/events/payment-sucessful");
      }
    },
    onClose: () => {},
  };

  return (
    <div>
      <label htmlFor="currency" className="font-semibold">
        Select Currency:{" "}
      </label>
      <select
        id="currency"
        onChange={handleCurrencyChange}
        value={selectedCurrency}
      >
        <option value="USD">USD</option>
        <option value="NGN">NGN</option>
        <option value="GHS">GHS</option>
        <option value="KES">KES</option>
        <option value="RWF">RWF</option>
        <option value="ZAR">ZAR</option>
      </select>
      <FlutterWaveButton {...fwConfig} className={className} />
    </div>
  );
};

export default CustomFlutterWaveButton;
