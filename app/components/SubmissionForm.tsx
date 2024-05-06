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
import { Lato, Roboto } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


export default function SubmissionForm() {
  const [drops, setDrops] = useState<{ [key: string]: string }>({});
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [selectedValue, setSelectedValue] = useState("a");

  var postResponse = '';

  function createButton(buttonNum: number) {
    return (
      <FormControl fullWidth className="bg-stone-600">
        <InputLabel id={"inputLabel" + buttonNum} className="text-gray-50"
         >
          Character {`${buttonNum}`}
        </InputLabel>
        <Select
          labelId={"labelId" + buttonNum}
          id={"selectId" + buttonNum}
          value={drops[`drop${buttonNum}`]}
          label="Character"
          name={`drop${buttonNum}`}
          onChange={handleChange}
          defaultValue="Kazuya"
          className="text-lg text-gray-50"
          
        >
          <MenuItem value={"Kazuya"} className=" text-lg" >Kazuya</MenuItem>
          <MenuItem value={"Jin"} className=" text-lg" >Jin</MenuItem>
          <MenuItem value={"King"} className=" text-lg" >King</MenuItem>
          <MenuItem value={"Jun"} className=" text-lg" >Jun</MenuItem>
          <MenuItem value={"Paul"} className=" text-lg " >Paul</MenuItem>
          <MenuItem value={"Law"} className=" text-lg " >Law</MenuItem>
          <MenuItem value={"Jack-8" } className=" text-lg " >Jack-8</MenuItem>
          <MenuItem value={"Lars"} className=" text-lg " >Lars</MenuItem>
          <MenuItem value={"Xiaoyu"} className=" text-lg " >Xiaoyu</MenuItem>
          <MenuItem value={"Nina"} className=" text-lg " >Nina</MenuItem>
          <MenuItem value={"Leroy"} className=" text-lg " >Leroy</MenuItem>
          <MenuItem value={"Asuka"} className=" text-lg " >Asuka</MenuItem>
          <MenuItem value={"Lili"} className=" text-lg " >Lili</MenuItem>
          <MenuItem value={"Bryan"} className=" text-lg " >Bryan</MenuItem>
          <MenuItem value={"Hwoarang"} className=" text-lg " >Hwoarang</MenuItem>
          <MenuItem value={"Claudio"} className=" text-lg " >Claudio</MenuItem>
          <MenuItem value={"Azucena"} className=" text-lg " >Azucena</MenuItem>
          <MenuItem value={"Raven"} className=" text-lg " >Raven</MenuItem>
          <MenuItem value={"Leo"} className=" text-lg " >Leo</MenuItem>
          <MenuItem value={"Steve"} className=" text-lg " >Steve</MenuItem>
          <MenuItem value={"Kuma"} className=" text-lg " >Kuma</MenuItem>
          <MenuItem value={"Yoshimitsu"} className=" text-lg " >Yoshimitsu</MenuItem>
          <MenuItem value={"Shaheen"} className=" text-lg " >Shaheen</MenuItem>
          <MenuItem value={"Dragunov"} className=" text-lg " >Dragunov</MenuItem>
          <MenuItem value={"Feng"} className=" text-lg " >Feng</MenuItem>
          <MenuItem value={"Panda" } className=" text-lg " >Panda</MenuItem>
          <MenuItem value={"Lee"} className=" text-lg " >Lee</MenuItem>
          <MenuItem value={"Alisa"} className=" text-lg " >Alisa</MenuItem>
          <MenuItem value={"Zafina"} className=" text-lg " >Zafina</MenuItem>
          <MenuItem value={"Devil Jin"} className=" text-lg " >Devil Jin</MenuItem>
          <MenuItem value={"Victor"} className=" text-lg " >Victor</MenuItem>
          <MenuItem value={"Reina"} className=" text-lg " >Reina</MenuItem>
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
    //Finding who the winner of the match was using the radial buttons
    if(selectedValue  == "a"){
      winner = player1Name
    }
    else{
      winner = player2Name
    }
    //Quick fix for default value submitting null instead of kazuya
    if(drops.drop1 == null){
      drops.drop1 = "Kazuya"
    }
    if(drops.drop2 == null){
      drops.drop2 = "Kazuya"
    }
    console.log(drops)

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
      postResponse = data.message
      alert(postResponse)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="py-16">
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
                className=" text-lg " 
              />
              {createButton(1)}
              <FormLabel sx={{
                  color: grey[400],
                  my: "auto",
                }}
                className=" mx-10 text-xl">
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
                className=" text-lg " 
              />
              {createButton(2)}
              <FormLabel sx={{
                  color: grey[400],
                  my: "auto",
                }}
                className=" mx-10 text-xl">
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
              className=" text-lg " 
            />
          </Stack>
          <div className="my-20 w-full flex justify-center">
            <Button type="submit" className=" py-6 px-24 text-lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
