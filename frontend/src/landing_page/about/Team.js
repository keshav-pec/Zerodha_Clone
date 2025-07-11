import React from "react";

function Team() {
  return (
    <div className="container">
      <div
        className="row py-5 px-1 mt-5 border-top"
        style={{ marginBottom: "-3rem" }}
      >
        <h1 className="text-center mt-3" style={{ lineHeight: "3rem" }}>
          People
        </h1>
      </div>
      <div
        className="row py-5 px-1 mb-5 text-muted mx-5 p-2"
        style={{ lineHeight: "2rem", fontSize: "1.1rem" }}
      >
        <div className="col-6 p-4 text-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHmSLw2VFiCtQ/profile-displayphoto-crop_800_800/B4DZejSR5AHkAI-/0/1750791169907?e=1757548800&v=beta&t=iBhXY-RnhrYjfihrKJsTTHOA1U1KA9_8ytVZj-DFihY"
            alt="Creator"
            style={{ width: "50%", borderRadius: "50%", opacity: "95%" }}
          />
          <h4 className="mt-3">Keshav Goyal</h4>
          <h6 className="text-secondary">Creator</h6>
        </div>
        <div className="col-6 p-4">
          <p>
            Keshav bootstrapped and founded Zerodha in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a student of Punjab Engineering College, pursuing his btech in
            Computer Science Engineering.
          </p>
          <p>Playing cricket is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
