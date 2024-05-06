import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useState} from "react";
import CharacterButtons from "./components/CharacterButtons";
import Navigation from "./components/Navigation";
import ReplayScroll from "./components/ReplayScroll";
import { Abel, Inter, Lato, Oswald, Roboto } from "next/font/google";


export default function Home() {

  return (
    <main className="w-full">
      <div className="m-auto w-3/4 space-y-28 mt-9">
        <Navigation/>
        <CharacterButtons/>
      </div>
    </main>
  );
}
