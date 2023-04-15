import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//  loader function
export const careersLoader = async () => {
  const res = await fetch("https://my-json-server.typicode.com/kishanlalchoudhary/Jobarouter-ReactRouter/careers");

  if (!res.ok) {
    throw Error("Could not fetch the career");
  }

  return res.json();
};
