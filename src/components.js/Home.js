/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [Inpvl, setInpvl] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [Data, setData] = useState([]);
  console.log(Inpvl);
  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);

    setInpvl(() => {
      return {
        ...Inpvl,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = Inpvl;

    if (name === "") {
      toast.error("Name Field is requred", { position: "top-center" });
    } else if (email === "") {
      toast.error("Email Field is requred", { position: "top-center" });
    } else if (!email.includes("@")) {
      toast.error(" Plz Enter Valid Email @ Address", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error(" Date Field is requred", { position: "top-center" });
    } else if (password === "") {
      toast.error("Password Field is requred", { position: "top-center" });
    } else if (password.length < 5) {
      toast.error("Password Length Greater than 5", { position: "top-center" });
    } else {
      toast.success("Data Added Successfully", { position: "top-center" });

      localStorage.setItem("useryt", JSON.stringify([...Data, Inpvl]));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-5 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6  ">Sign Up</h3>

            <Form>
              <Form.Group
                className="mb-3 col-lg-6  "
                
              >
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your Name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6  "
              
              >
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6  "
              
              >
                <Form.Control
                  type="date"
                  name="date"
                  onChange={getdata}
                  placeholder="Enter date"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6 "
              
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={addData}
                className="col-lg-6"
                style={{ backgroundColor:"#20c997" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              {" "}
              Creat a New Account?{" "}
              <span>
                <NavLink to="/Login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <ToastContainer />
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
