import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useState} from "react";
import CharacterButtons from "./components/CharacterButtons";
import Navigation from "./components/Navigation";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.SERVER_URI
const client = new MongoClient(uri);



export default function Home() {
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  return (
    <main className="w-full">
      <div className="m-auto w-1/2 space-y-28 mt-9">
        <Navigation/>
        <CharacterButtons/>
      </div>
  
    </main>
  );
}
