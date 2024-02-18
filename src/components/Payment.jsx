import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import Navbar from "./Navbar"; // Assuming Navbar is a component in a separate file

const PaymentPage = () => {
  const [isGooglePayLoaded, setIsGooglePayLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsGooglePayLoaded(true);
  }, []);

  const handlePayment = () => {
    setTimeout(() => {
      console.log("Payment completed!");
      // Navigate to the "/ordered" route
      alert("Payment details will be sent on your Email")
      navigate("/ordered");
    }, 5000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="text-center mt-5 mb-2" style={{margin:"2rem"}}>
        <p className="text-lg mb-2" style={{color:"indigo"}}>
          Welcome to our seamless Payment Page, where convenience meets security
          to elevate your online shopping experience. With our intuitive
          interface and trusted payment methods, completing your purchases has
          never been easier. Simply click on the Google Pay Button to initiate
          a swift and secure transaction, allowing you to shop with peace of
          mind. Our commitment to user-friendly design ensures a hassle-free
          checkout process, while robust security measures safeguard your
          sensitive payment information. Whether you're browsing on your
          desktop or mobile device, our responsive design ensures a seamless
          experience across all platforms. Join countless satisfied customers
          who have trusted us with their online transactions, and let us take
          your shopping journey to new heights of convenience and confidence.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center mb-14">
        {isGooglePayLoaded && (
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "10.00", 
                currencyCode: "USD",
                countryCode: "US",
              },
              shippingAddressRequired: true,
              callbackIntents: ["PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log("payment authorized", paymentData);
              return { transactionState: "SUCCESS" };
            }}
            existingPaymentMethodRequired={false}
            buttonColor="black"
            buttonType="buy"
            buttonSizeMode="static"
            style={{
              height: "64px",
              width: "100%",
            }}
            onClick={handlePayment}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
