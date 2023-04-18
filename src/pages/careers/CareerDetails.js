import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>
        {id}. Career Details for {career.title}
      </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          exercitationem soluta nemo minima eum et sunt excepturi fugit
          veritatis sit saepe maiores voluptatem magnam neque, praesentium
          perferendis modi doloremque illo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis, excepturi?{" "}
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    "https://my-json-server.typicode.com/kishanlalchoudhary/Jobarouter-ReactRouter/careers/" +
      id
  );

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
