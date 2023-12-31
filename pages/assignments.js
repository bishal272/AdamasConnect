import React from "react";
import AssignmentComp from "../components/Assignments/AssignmentComp";
import Navbar from "../components/Navbar/Navbar";

const Assignment = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-auto"
          style={{ backgroundColor: "black", borderRight: "2px silver solid" }}>
          <Navbar />
        </div>
        <div className="col" style={{ padding: "0" }}>
          <AssignmentComp />
        </div>
      </div>
    </div>
  );
};

export default Assignment;

export async function getServerSideProps(context) {
  const { req, res } = context;
  if (!req.cookies.token) {
    res.setHeader("location", "/verify");
    res.statusCode = 302;
  }
  return {
    props: {},
  };
}
