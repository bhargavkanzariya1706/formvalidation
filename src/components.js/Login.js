/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login_img from "./Login_img";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();

  const [Inpvl, setInpvl] = useState({
    email: "",
    password: "",
  });

  console.log(Inpvl);

  const getdata = (e) => {
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

    const getuserArray = localStorage.getItem("useryt");

    console.log(getuserArray);

    const { email, password } = Inpvl;

    if (email === "") {
      toast.error("Email Field is requred", { position: "top-center" });
    } else if (!email.includes("@")) {
      toast.error(" Plz Enter Valid Email @ Address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password Field is requred", { position: "top-center" });
    } else if (password.length < 5) {
      toast.error("Password Length Greater than 5", { position: "top-center" });
    } else {
      if (getuserArray && getuserArray.length) {
        const userData = JSON.parse(getuserArray);
        const userlogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          toast.error("invalid details", { position: "top-center" });
        } else {
          console.log("User login successfuly");

          localStorage.setItem("user_login", JSON.stringify(getuserArray));
          history("/details");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-5 p-5 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6  ">Sign In</h3>

            <Form>
              <Form.Group
                className="mb-3 col-lg-6  "
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
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
                style={{ backgroundColor: " #20c997" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span>SignIn</span>
            </p>
          </div>
          <ToastContainer />
          <Login_img />
        </section>
      </div>
    </>
  );
};

export default Login;
