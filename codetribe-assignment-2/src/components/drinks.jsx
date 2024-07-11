import React from "react";
import "./drinks.css";
import drink from "../assets/drink.png";
import starbucks from "../assets/starbucks.png";
import darkMocha from "../assets/dark-mocha.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function drinks() {
  return (
    <>
      <div className="container">
        <div className="drinkContainer">
          <div className="drink-1">
            <div className="arrows">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <img src={drink} alt="Midnight Mint" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            <button className="button">ADD TO BASKET</button>
          </div>
          <div className="drink-2">
          <div className="arrows">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <img src={darkMocha} alt="Dark Mocha" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            <button className="button">ADD TO BASKET</button>
          </div>
          <div className="drink-3">
          <div className="arrows">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <img src={starbucks} alt="Midnight Mint" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            <button className="button">ADD TO BASKET</button>
          </div>
          <div className="drink-4">
          <div className="arrows">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <img src={drink} alt="" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            <button className="button">ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default drinks;
