import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Card from "../component/Card";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Check the structure of data
      setFoodItem(data.food_item);
      setFoodCat(data.food_category);
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle the error gracefully (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: 10 }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×900/?pastry"
                className="d-block w-100"
                style={{
                  objectFit: "cover",
                  filter: "brightness(30%)",
                  maxHeight: "400px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×900/?barbecue"
                className="d-block w-100"
                style={{
                  objectFit: "cover",
                  filter: "brightness(30%)",
                  maxHeight: "400px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×900/?burger"
                className="d-block w-100"
                style={{
                  objectFit: "cover",
                  filter: "brightness(30%)",
                  maxHeight: "400px",
                }}
                alt="..."
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div>
              <div key={data.id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />

              {fooditem.length !== 0
                ? fooditem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItem) => {
                      return (
                        <div className="container">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mb-3">
                              <Card
                                foodName={filterItem.name}
                                options={filterItem.options[0]}
                                imgSrc={filterItem.img}
                              />
                            </div>
                            {/* Other columns go here */}
                          </div>
                        </div>
                      );
                    })
                : "no such Data Found"}
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
