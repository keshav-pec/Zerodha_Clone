import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 md-12 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-lg-6 md-12 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className='row'>
            <div className='col-6'>
                <ul>
                  <li>
                      <p>Futures and Options</p>
                  </li>
                  <li>
                      <p>Commodity Derivatives</p>
                  </li>
                  <li>
                      <p>Currency Derivatives</p>
                  </li>
                </ul>
            </div>
            <div className='col-6'>
                <ul>
                  <li>
                      <p>Stocks & IPOs</p>
                  </li>
                  <li>
                      <p>Direct Mutual Funds</p>
                  </li>
                  <li>
                      <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='Press Logos' style={{width: "90%"}} className="mt-3"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
