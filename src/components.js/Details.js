/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const history = useNavigate();

  const [logindata, setlogindata] = useState([]);
  console.log(logindata);

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("useryt");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      // console.log(user);
      setlogindata(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };
  const userlogout = () => {
    localStorage.removeItem("useryt");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>User Detail</h1>
          <br />
          <h1>{logindata[0].name}</h1>
          <br />
          <Button onClick={userlogout}>Log Out</Button>

          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish You Happy Birthday </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
