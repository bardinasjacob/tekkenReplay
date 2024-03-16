import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useState} from "react";
import CharacterButtons from "./components/CharacterButtons";
import Navigation from "./components/Navigation";
import ReplayScroll from "./components/ReplayScroll";



export default function Home() {

  return (
    <main className="w-full">
      <div className="m-auto w-1/2 space-y-28 mt-9">
        <Navigation/>
        <CharacterButtons/>
      </div>
    </main>
  );
}
