import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function ReplayScroll(props: { charArray: string[] }) {
  return (
    <>
      <ul></ul>
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
      </Table>
    </>
  );
}
