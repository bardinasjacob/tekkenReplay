"use client";
import { Button, Input, Stack } from "@mui/joy";
import Table from "@mui/joy/Table/Table";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SubmissionForm() {

  async function postCheck() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ p1Name: 'player1' })
    };
    try{
      const response = await fetch('../api', requestOptions);
      const data = await response.json();
    }
    catch(e){
      console.log(e)
    }
}

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          postCheck()
        }}
      >
        <Stack spacing={2} className="">
            <Input
              placeholder="Player 1 Name"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "2px",
              }}
            />
            <Input
              placeholder="Player 1 Character"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "2px",
              }}
            />
            <Input
              placeholder="ADD RADIAL BUTTONS HERE (P1 WIN)"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "2px",
              }}
            />
            <Input
              placeholder="Player 2 Name"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "2px",
              }}
            />
            <Input
              placeholder="Player 2 Character"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "2px",
              }}
            />
            <Input
              placeholder="ADD RADIAL BUTTONS HERE (P2 WIN)"
              required
              sx={{
                "--Input-gap": "0px",
                "--Input-radius": "0px",
              }}
            />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </>
  );
}
