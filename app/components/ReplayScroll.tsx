"use client"
import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function ReplayScroll(props: { charArray: string[] }) {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api", {
        method: "GET",
        next: {revalidate: 60}
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })

  })

  const getMatches = async () => {
    try {
      const res = await fetch("http://localhost:3000/api", {
        method: "GET",
        next: {revalidate: 60}
      })
      const body = res.json();
      return body
    } catch (error){
      console.log("Something messed up oops", error)
    }
  }

  //const { matches } = await getMatches();

  return (
    <>
      <p className=" bg-white">
        {JSON.stringify(data)}
        {props.charArray}
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
