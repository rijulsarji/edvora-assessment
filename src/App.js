import react, { useState, useEffect } from "react";
import "./App.css"
import {FaAngleDown, FaArrowDown, FaInstagram, FaSortDown} from "react-icons/fa"

function App() {

  const [name, setName] = useState([])

  var productStat=false
  var stateStat=false;
  var cityStat=false;

  var loading = true;

  function productDrop() {
    productStat = !productStat;
    if(productStat === true)
      document.getElementById('productId').className = "show";
    else
      document.getElementById('productId').className = "hide";
  }

  function stateDrop() {
    stateStat = !stateStat;
    if(stateStat === true)
      document.getElementById('stateId').className = "show";
    else
      document.getElementById('stateId').className = "hide";
  }

  function cityDrop() {
    cityStat = !cityStat;
    if(cityStat === true)
      document.getElementById('cityId').className = "show";
    else
      document.getElementById('cityId').className = "hide";
  }

  try {
    useEffect(() => {
      fetch("https://assessment-edvora.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => setName(data));
    }, []);
  }

  catch(err) {
    console.log(err);
  }

  useEffect(() => {
    if(name.length===0)
      document.getElementById('loading').className="loadShow"
    else
      document.getElementById('loading').className="loadHide";
  }, [name]);

  return (
    <div className="body">
      {/* left side */}
      <div className="leftSide">
        <p className="filters">Filters</p>
        <div className="leftLine"></div>

        <div className="dropdown">

          {/* Products dropdown */}
          <div className="block" onClick={productDrop}>
            <p id="productDrop">Products</p>
            <FaSortDown />

            <div className="hide" id="productId">
              {name.map((item) => (
                <p className="stateName">{item.product_name}</p>
              ))}
            </div>

          </div>

          {/* State dropdown */}
          <div className="block" onClick={stateDrop}>
            <p id="stateDrop">State</p>
            <FaSortDown />

            <div className="hide" id="stateId">
              {name.map((item) => (
                <p className="stateName">{item.address.state}</p>
              ))}
            </div>

          </div>

          {/* City Dropdown */}
          <div className="block" onClick={cityDrop}>
            <p id="cityDrop">City</p>
            <FaSortDown />

            <div className="hide" id="cityId">
              {name.map((item) => (
                <p className="stateName">{item.address.city}</p>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* right side */}
      <div className="rightSide">
        <p id="edvora">Edvora</p>
        <p id="products">Products</p>
        
        <p id="loading">Loading...</p>

        <p className="productHeading">Product Name</p>

        <div className="rightLine"></div>

        <div className="productBody">
          {name.map((item) => (
            <div className="productCard">
              <img src={item.image} className="productImg" />
              <p className="productName">{item.product_name}</p>
              <p className="brandName">{item.brand_name}</p>
              <p className="price">${item.price}</p>
              <p className="state">
                {item.address.state}, {item.address.city}
              </p>
              <p className="date">{item.date.split("T")[0]}</p>
              <p className="desc">{item.discription}</p>
            </div>
          ))}
        </div>

        <p className="productHeading">Product Name</p>

        <div className="rightLine"></div>

        <div className="productBody">
          {name.map((item) => (
            <div className="productCard">
              <img src={item.image} className="productImg" />
              <p className="productName">{item.product_name}</p>
              <p className="brandName">{item.brand_name}</p>
              <p className="price">${item.price}</p>
              <p className="state">
                {item.address.state}, {item.address.city}
              </p>
              <p className="date">{item.date.split("T")[0]}</p>
              <p className="desc">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;