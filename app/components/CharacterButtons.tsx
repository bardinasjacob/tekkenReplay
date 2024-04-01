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
  Stack,
} from "@mui/material";

function CharacterButtons() {
  var selected: string[] = ["Mokujin", "Mokujin"];
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
          <MenuItem value={"undefined"}>Any</MenuItem>
          <MenuItem value={"Dragunov"}>Dragunov</MenuItem>
          <MenuItem value={"Kazuya"}>Kazuya</MenuItem>
          <MenuItem value={"BeepBoop"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }

  selected[0] = drops.drop1
  selected[1] = drops.drop2

  return (
    <>
      <div className="flex w-full flex-wrap justify-between">
        <div className="w-1/3">
          <Stack>
            <div className="w-full relative h-52">
            <Image src={`/${selected[0]}.png`} alt={""}
             fill={true}/>
            </div>
            {createButton(1)}
          </Stack>
        </div>
        <div className="text-white text-center my-auto w-1/3">
          <h1>VS</h1>
        </div>
        <div className="w-1/3">
        <Stack>
            <div className="w-full relative h-52">
            <Image src={`/${selected[1]}.png`} alt={""}
             fill={true}/>
            </div>
            {createButton(2)}
          </Stack>
        </div>
      </div>
      <div>
        <ReplayScroll charArray={selected} />
      </div>
    </>
  );
}

const MemoizedButtons = React.memo(CharacterButtons);

export default MemoizedButtons;
