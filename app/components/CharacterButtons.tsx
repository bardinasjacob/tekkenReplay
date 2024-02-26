"use client"
import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useState} from "react";



export default function CharacterButtons() {
  const[clicked, setClicked] = useState(false);

  const handleClick = () => {
    if(clicked){
        setClicked(false);
    }
    else{
        setClicked(true);
    }
  }

  return (
      <div className="flex">
        <Button
        color="primary"
        onClick={handleClick}
        className={clicked ? 'selected' : ''}
        >
            Click Me
        </Button>
      </div>
  );
}
