import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useState} from "react";
import CharacterButtons from "./components/CharacterButtons";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CharacterButtons/>
      </div>
    </main>
  );
}
