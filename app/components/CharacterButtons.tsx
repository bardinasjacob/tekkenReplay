"use client";
import Image from "next/image";
import Button from "@mui/joy/Button";
import React, { useRef, useState } from "react";
import ReplayScroll from "./ReplayScroll";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function CharacterButtons() {
  var selected: string[] = [];
  const [drops, setDrops] = useState<{ [key: string]: string }>({});

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setDrops((prevDrops) => ({ ...prevDrops, [name]: value }));
  };

  function createButton(buttonNum: number) {
    return (
      <FormControl fullWidth className=" bg-stone-600">
        <InputLabel id={"inputLabel" + buttonNum} className=" text-gray-50">
          Character
        </InputLabel>
        <Select
          labelId={"labelId" + buttonNum}
          id={"selectId" + buttonNum}
          value={drops[`drop${buttonNum}`]}
          label="Character"
          name={`drop${buttonNum}`}
          onChange={handleChange}
        >
          <MenuItem value={"King"}>King</MenuItem>
          <MenuItem value={"Blabla"}>Twenty</MenuItem>
          <MenuItem value={"BeepBoop"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }

  selected[0] = drops.drop1
  selected[1] = drops.drop2

  return (
    <>
      <div className="flex w-full flex-wrap justify-evenly">
        {createButton(1)}
        {createButton(2)}
      </div>
      <div>
        <ReplayScroll charArray={selected} />
      </div>
    </>
  );
}

const MemoizedButtons = React.memo(CharacterButtons);

export default MemoizedButtons;
