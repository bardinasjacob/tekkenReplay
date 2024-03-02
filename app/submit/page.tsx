import Image from "next/image";
import Button from "@mui/joy/Button";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Stack from "@mui/joy/Stack";
import { Input } from "@mui/joy";
import SubmissionForm from "../components/SubmissionForm";

export default function Submit() {
  return (
    <main className="w-full">
      <div className="m-auto w-1/2 space-y-10 mt-9">
        <Navigation />
        <SubmissionForm/>
      </div>
    </main>
  );
}
