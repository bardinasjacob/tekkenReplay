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
  const [drops, setDrops] = useState<{ [key: string]: string }>({});

  var selected: string[] = [];

  //Putting all different dropdown menus into key value pairs to send to character array
  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setDrops((prevDrops) => ({ ...prevDrops, [name]: value }));
  };

  //Creating the dropdown menus for the characters
  function createButton(buttonNum: number) {
    return (
      <FormControl fullWidth className=" bg-stone-600">
        <InputLabel id={"inputLabel" + buttonNum} className=" text-gray-50">
          Character {`${buttonNum}`}
        </InputLabel>
        <Select
          labelId={"labelId" + buttonNum}
          id={"selectId" + buttonNum}
          value={drops[`drop${buttonNum}`]}
          label="Character"
          name={`drop${buttonNum}`}
          onChange={handleChange}
        >
          <MenuItem value={undefined}>Any</MenuItem>
          <MenuItem value={"Kazuya"}>Kazuya</MenuItem>
          <MenuItem value={"Jin"}>Jin</MenuItem>
          <MenuItem value={"King"}>King</MenuItem>
          <MenuItem value={"Jun"}>Jun</MenuItem>
          <MenuItem value={"Paul"}>Paul</MenuItem>
          <MenuItem value={"Law"}>Law</MenuItem>
          <MenuItem value={"Jack-8"}>Jack-8</MenuItem>
          <MenuItem value={"Lars"}>Lars</MenuItem>
          <MenuItem value={"Xiaoyu"}>Xiaoyu</MenuItem>
          <MenuItem value={"Nina"}>Nina</MenuItem>
          <MenuItem value={"Leroy"}>Leroy</MenuItem>
          <MenuItem value={"Asuka"}>Asuka</MenuItem>
          <MenuItem value={"Lili"}>Lili</MenuItem>
          <MenuItem value={"Bryan"}>Bryan</MenuItem>
          <MenuItem value={"Hwoarang"}>Hwoarang</MenuItem>
          <MenuItem value={"Claudio"}>Claudio</MenuItem>
          <MenuItem value={"Azucena"}>Azucena</MenuItem>
          <MenuItem value={"Raven"}>Raven</MenuItem>
          <MenuItem value={"Leo"}>Leo</MenuItem>
          <MenuItem value={"Steve"}>Steve</MenuItem>
          <MenuItem value={"Kuma"}>Kuma</MenuItem>
          <MenuItem value={"Yoshimitsu"}>Yoshimitsu</MenuItem>
          <MenuItem value={"Shaheen"}>Shaheen</MenuItem>
          <MenuItem value={"Dragunov"}>Dragunov</MenuItem>
          <MenuItem value={"Feng"}>Feng</MenuItem>
          <MenuItem value={"Panda"}>Panda</MenuItem>
          <MenuItem value={"Lee"}>Lee</MenuItem>
          <MenuItem value={"Alisa"}>Alisa</MenuItem>
          <MenuItem value={"Zafina"}>Zafina</MenuItem>
          <MenuItem value={"Devil Jin"}>Devil Jin</MenuItem>
          <MenuItem value={"Victor"}>Victor</MenuItem>
          <MenuItem value={"Reina"}>Reina</MenuItem>
        </Select>
      </FormControl>
    );
  }

  selected[0] = drops.drop1;
  selected[1] = drops.drop2;

  return (
    <>
      <div className="flex w-full flex-wrap justify-between">
        <div className="w-1/3">
          <Stack>
            <div className="w-full relative h-80">
              <Image src={`/${selected[0]}.png`} alt={""} fill={true} />
            </div>
            {createButton(1)}
          </Stack>
        </div>
        <div className="text-white text-center my-auto w-1/3">
          <h1>VS</h1>
        </div>
        <div className="w-1/3">
          <Stack>
            <div className="w-full relative h-80">
              <Image src={`/${selected[1]}.png`} alt={""} fill={true} />
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
