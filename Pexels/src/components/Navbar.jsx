import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">

        <div onClick={() => {
          setSearch("nature");
          navigate("/");  
        }}
          className="button btn btn-outline-success mx-3"
        >
          Nature
        </div>
        <div onClick={() => {
          setSearch("travel");
          navigate("/");  
        }}
          className="button btn btn-outline-primary mx-3"
        >
          Travel
        </div>
        <div onClick={() => {
          setSearch("city");
          navigate("/");  
        }}
          className="button btn btn-outline-warning mx-3"
        >
          Cities
        </div>
        <div onClick={() => {
          setSearch("car");
          navigate("/");  
        }}
          className="button btn btn-outline-danger mx-3"
        >
          Cars
        </div>
        <div onClick={() => {
          setSearch("fashion");
          navigate("/");  
        }}
          className="button btn btn-outline-info mx-3"
        >
          Fashion
        </div>
        <div onClick={() => {
          setSearch("animals");
          navigate("/");  
        }}
          className="button btn btn-outline-success mx-3"
          >
            Animals
          </div>
        <div onClick={() => {
          setSearch("technology");
          navigate("/");  
        }}
          className="button btn btn-outline-light mx-3"
        >
          Technology
        </div>
        <div onClick={() => {
          setSearch("finance");
          navigate("/");  
        }}
          className="button btn btn-outline-secondary mx-3"
        >
          Business
        </div>
        <div onClick={() => {
          setSearch("tokyo");
          navigate("/");  
        }}
          className="button btn btn-outline-primary mx-3"
        >
          Tokyo
        </div>
        <div onClick={() => {
          setSearch("dubai");
          navigate("/");  
        }}
          className="button btn btn-outline-warning mx-3"
        >
          Dubai
        </div>
        {location.pathname == "/saved" ? (
            <div
              className="button btn btn-warning mx-3"
              onClick={() => navigate("/")}
            >
              Home
            </div>
          ) : (
            <div
              className="button btn btn-warning mx-3"
              onClick={() => navigate("/saved")}
            >
              Saved
            </div>
        )}

      </div>

      <div className="container my-4" style={{width:"780px"}}>
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
