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
            <div className="size">
              <div className="sizeText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Select a size</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
              <div className="milkText">
                <h6>Milk</h6>
                <select name="" id="">
                  <option value="">Select a milk type</option>
                  <option value="">Full cream</option>
                  <option value="">Coconut milk</option>
                  <option value="">Fat milk</option>
                </select>
              </div>
              <div className="drinkText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Drink type</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
            </div>
            <div className="stats">
              <h6 id="drinkStats">Calories</h6>
              <h6 id="drinkStats-1">Total Fat 19g 29%</h6>
              <h6 id="drinkStats-1">saturated Fat 13g </h6>
              <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            </div>
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
            <div className="size">
              <div className="sizeText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Select a size</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
              <div className="milkText">
                <h6>Milk</h6>
                <select name="" id="">
                  <option value="">Select a milk type</option>
                  <option value="">Full cream</option>
                  <option value="">Coconut milk</option>
                  <option value="">Fat milk</option>
                </select>
              </div>
              <div className="drinkText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Drink type</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
            </div>
            <div className="stats">
              <h6 id="drinkStats">Calories</h6>
              <h6 id="drinkStats-1">Total Fat 19g 29%</h6>
              <h6 id="drinkStats-1">saturated Fat 13g </h6>
              <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            </div>
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
            <div className="size">
              <div className="sizeText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Select a size</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
              <div className="milkText">
                <h6>Milk</h6>
                <select name="" id="">
                  <option value="">Select a milk type</option>
                  <option value="">Full cream</option>
                  <option value="">Coconut milk</option>
                  <option value="">Fat milk</option>
                </select>
              </div>
              <div className="drinkText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Drink type</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
            </div>
            <div className="stats">
              <h6 id="drinkStats">Calories</h6>
              <h6 id="drinkStats-1">Total Fat 19g 29%</h6>
              <h6 id="drinkStats-1">saturated Fat 13g </h6>
              <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            </div>
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
            <div className="size">
              <div className="sizeText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Select a size</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
              <div className="milkText">
                <h6>Milk</h6>
                <select name="" id="">
                  <option value="">Select a milk type</option>
                  <option value="">Full cream</option>
                  <option value="">Coconut milk</option>
                  <option value="">Fat milk</option>
                </select>
              </div>
              <div className="drinkText">
                <h6>Size</h6>
                <select name="" id="">
                  <option value="">Drink type</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>
              </div>
            </div>
            <div className="stats">
              <h6 id="drinkStats">Calories</h6>
              <h6 id="drinkStats-1">Total Fat 19g 29%</h6>
              <h6 id="drinkStats-1">saturated Fat 13g </h6>
              <h6 id="drinkStats-2">Trans Fat 0.5g</h6>
            </div>
            <button className="button">ADD TO BASKET</button>
          </div>
        </div>
      </div>

      <div className="size">
        <div className="sizeText">
          <h6>Size</h6>
          <select name="" id="">
            <option value="">Select a size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
        </div>
        <div className="selector"></div>
      </div>
    </>
  );
}

export default drinks;
