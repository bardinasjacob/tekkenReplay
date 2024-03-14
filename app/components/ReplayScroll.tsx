import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default async function ReplayScroll(props: { charArray: string[] }) {

  const getMatches = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/",
        {
          method: "GET"
        })
      return res.json();
    } catch (error){
      console.log("Something messed up oops", error)
    }
  }

  const {matches} = await getMatches();
  const array = matches
  console.log(matches)

  return (
    <>
      <p>
        {array.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
              <p key={index} className="">
                {item}
              </p>
          ))}
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
