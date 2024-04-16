"use client";
import { Button, Input, Stack } from "@mui/joy";
import Table from "@mui/joy/Table/Table";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
  colors,
} from "@mui/material";
import { blue, grey, orange, pink } from "@mui/material/colors";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SubmissionForm() {
  const [drops, setDrops] = useState<{ [key: string]: string }>({});
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [selectedValue, setSelectedValue] = useState("a");

  var selected: string[] = [];

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

  //Putting all different dropdown menus into key value pairs to send to character array
  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setDrops((prevDrops) => ({ ...prevDrops, [name]: value }));
  };

  async function handleSubmit() {
    var winner = "-1"
    if(selectedValue  == "a"){
      winner = player1Name
    }
    else{
      winner = player2Name
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        p1Name: player1Name,
        p1Char: drops.drop1,
        p2Name: player2Name,
        p2Char: drops.drop2,
        winner: winner,
        youtubeLink: youtubeLink,
      }),
    };
    try {
      const response = await fetch("../api", requestOptions);
      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className=" py-16">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Stack spacing={10}>
            <div className="flex">
              <Input
                placeholder="Player 1 Name"
                required
                sx={{
                  "--Input-gap": "5px",
                  "--Input-radius": "5px",
                  width: "150%",
                }}
                onChange={(field): void => setPlayer1Name(field.target.value)}
              />
              {createButton(1)}
              <FormLabel sx={{
                  color: grey[400],
                  my: "auto",
                }}
                className=" mx-10">
                Winner
              </FormLabel>
              <Radio
                checked={selectedValue === "a"}
                onChange={(field): void => setSelectedValue(field.target.value)}
                value="a"
                name="winnerButton1"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: grey[400],
                  '&.Mui-checked': {
                    color: blue[400],
                  },
                }}
              />
            </div>
            <div className="flex">
              <Input
                placeholder="Player 2 Name"
                required
                sx={{
                  "--Input-gap": "5px",
                  "--Input-radius": "5px",
                  width: "150%",
                }}
                onChange={(field): void => setPlayer2Name(field.target.value)}
              />
              {createButton(2)}
              <FormLabel sx={{
                  color: grey[400],
                  my: "auto",
                }}
                className=" mx-10">
                Winner
              </FormLabel>
              <Radio
                checked={selectedValue === "b"}
                onChange={(field): void => setSelectedValue(field.target.value)}
                value="b"
                name="winnerButton2"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: grey[400],
                  '&.Mui-checked': {
                    color: blue[400],
                  },
                }}
              />
            </div>
            <Input
              placeholder="Youtube Link"
              required
              sx={{
                "--Input-gap": "5px",
                "--Input-radius": "5px",
                height: 45
              }}
              onChange={(field): void => setYoutubeLink(field.target.value)}
            />
          </Stack>
          <div className="my-20 w-full flex justify-center">
            <Button type="submit" className=" py-6 px-24">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
