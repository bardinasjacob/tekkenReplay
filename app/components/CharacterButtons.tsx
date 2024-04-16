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
          <MenuItem value={undefined} className=" text-lg">Any</MenuItem>
          <MenuItem value={"Kazuya"} className=" text-lg">Kazuya</MenuItem>
          <MenuItem value={"Jin"} className=" text-lg">Jin</MenuItem>
          <MenuItem value={"King"} className=" text-lg">King</MenuItem>
          <MenuItem value={"Jun"} className=" text-lg">Jun</MenuItem>
          <MenuItem value={"Paul"} className=" text-lg">Paul</MenuItem>
          <MenuItem value={"Law"} className=" text-lg">Law</MenuItem>
          <MenuItem value={"Jack-8" } className=" text-lg">Jack-8</MenuItem>
          <MenuItem value={"Lars"} className=" text-lg">Lars</MenuItem>
          <MenuItem value={"Xiaoyu"} className=" text-lg">Xiaoyu</MenuItem>
          <MenuItem value={"Nina"} className=" text-lg">Nina</MenuItem>
          <MenuItem value={"Leroy"} className=" text-lg">Leroy</MenuItem>
          <MenuItem value={"Asuka"} className=" text-lg">Asuka</MenuItem>
          <MenuItem value={"Lili"} className=" text-lg">Lili</MenuItem>
          <MenuItem value={"Bryan"} className=" text-lg">Bryan</MenuItem>
          <MenuItem value={"Hwoarang"} className=" text-lg">Hwoarang</MenuItem>
          <MenuItem value={"Claudio"} className=" text-lg">Claudio</MenuItem>
          <MenuItem value={"Azucena"} className=" text-lg">Azucena</MenuItem>
          <MenuItem value={"Raven"} className=" text-lg">Raven</MenuItem>
          <MenuItem value={"Leo"} className=" text-lg">Leo</MenuItem>
          <MenuItem value={"Steve"} className=" text-lg">Steve</MenuItem>
          <MenuItem value={"Kuma"} className=" text-lg">Kuma</MenuItem>
          <MenuItem value={"Yoshimitsu"} className=" text-lg">Yoshimitsu</MenuItem>
          <MenuItem value={"Shaheen"} className=" text-lg">Shaheen</MenuItem>
          <MenuItem value={"Dragunov"} className=" text-lg">Dragunov</MenuItem>
          <MenuItem value={"Feng"} className=" text-lg">Feng</MenuItem>
          <MenuItem value={"Panda" } className=" text-lg">Panda</MenuItem>
          <MenuItem value={"Lee"} className=" text-lg">Lee</MenuItem>
          <MenuItem value={"Alisa"} className=" text-lg">Alisa</MenuItem>
          <MenuItem value={"Zafina"} className=" text-lg">Zafina</MenuItem>
          <MenuItem value={"Devil Jin"} className=" text-lg">Devil Jin</MenuItem>
          <MenuItem value={"Victor"} className=" text-lg">Victor</MenuItem>
          <MenuItem value={"Reina"} className=" text-lg">Reina</MenuItem>
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
