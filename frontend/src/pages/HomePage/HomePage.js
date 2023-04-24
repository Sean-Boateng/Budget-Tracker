import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import LandingPage from "../../components/LandingPage/LandingPage";
import Navbar from "../../components/NavBar/NavBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        // console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div>
      
      {/* <div className="container">
        <h1 style={{color:"white"}}>{user.username}'s Expense Tracker!</h1>
        {cars &&
          cars.map((car) => (
            <p key={car.id}>
              {car.year} {car.model} {car.make}
            </p>
          ))}
      </div> */}

      <div>

      </div>

      <LandingPage/>
    </div>
  );
};

export default HomePage;
