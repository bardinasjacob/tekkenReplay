import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import Button from "@mui/joy/Button";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Navigation() {
  return (
    <div>
      <Dropdown>
        <MenuButton
        variant="solid"
        color="primary"
        size="lg">
            Menu</MenuButton>
        <Menu>
          <MenuItem><Link href={"/"}>Home</Link></MenuItem>
          <MenuItem><Link href={"./submit"}>Submit</Link></MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}
