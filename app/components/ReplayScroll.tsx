import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default async function ReplayScroll(props: { charArray: string[] }) {

  //fetches correct data but parses it wrong ("http://localhost:3000/api/") leads to correct json
  //fix this method
  const getMatches = async () => {
    try {
      const res = await fetch("http://localhost:3000/api", {
        method: "GET"
      })
      const body = res.json();
      return body
    } catch (error){
      console.log("Something messed up oops", error)
    }
  }

  const { matches } = await getMatches();

  return (
    <>
      <p>
        {JSON.stringify(matches)}
      </p>
      {/* <ul></ul>
      <Table color="primary" size="lg">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Player 1</th>
            <th>Player 2</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          {props.charArray.map((item, index) => (
              <td key={index} className="">
                {item}
              </td>
          ))}
        </tr>
        </tbody>
      </Table> */}
    </>
  );
}
