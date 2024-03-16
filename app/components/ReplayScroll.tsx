import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import useSWR, { Fetcher } from "swr";

function ReplayScroll(props: { charArray: string[] }) {


  const queryString = '?p1Char=' + props.charArray[0] + '&p2Char=' + props.charArray[1]

  function fetcher(url: string){
    return fetch('http://localhost:3000/api' + queryString).then(res => res.json())
  }

  const { data } = useSWR('http://localhost:3000/api' + queryString, fetcher)

  var matches

  try{
    var matches = data.matches
  }
  catch(error){
    console.log('oops')
  }
  
  
  return (
    <>
      <p className=" bg-white">
        {JSON.stringify(matches)}
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

const MemoizedReplay = React.memo(ReplayScroll)

export default MemoizedReplay
