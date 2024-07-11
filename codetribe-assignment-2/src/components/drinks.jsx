import React from "react";
import "./drinks.css";
import drink from "../assets/drink.png";

function drinks() {
  return (
    <>
      <div className="container">
        <div className="drinkContainer">
          <div className="drink-1">
            <img src={drink} alt="" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2" >Trans Fat 0.5g</h6>
          </div>
          <div className="drink-2">
            <img src={drink} alt="" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2" >Trans Fat 0.5g</h6>
          </div>
          <div className="drink-3">
            <img src={drink} alt="" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2" >Trans Fat 0.5g</h6>
          </div>
          <div className="drink-4">
            <img src={drink} alt="" />
            <h5 id="drinkName">
              Midnight Mint <br /> Mocha Frappuccino
            </h5>
            <h6 id="drinkStats">Calories</h6>
            <h6 id="drinkStats">Total Fat 19g</h6>
            <h6 id="drinkStats-1">saturated Fat 13g</h6>
            <h6 id="drinkStats-2" >Trans Fat 0.5g</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default drinks;
