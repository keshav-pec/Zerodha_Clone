import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 px-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="/">Track account opening</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/">Track segment activation</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/">Intraday margins</a> &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-2">
          <h1 className="fs-3">Featured</h1>
          <p></p>
          <ol>
            <li>
              <a href="/">Current Takeovers and Delisting - January 2024</a>
            </li>
            <p></p>
            <li>
              <a href="/">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
