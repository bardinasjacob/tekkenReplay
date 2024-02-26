"use client"
import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useRef, useState} from "react";



export default function CharacterButtons() {
  const[clicked, setClicked] = useState<string[]>([]);
  

  const handleClick = (element: string) => {
    if(clicked.indexOf(element) === -1){
      setClicked([...clicked, element]);
    }
    else{
      removeItem(element)
    }
  }

  const removeItem = (element: string) => {
    const updatedItems = [...clicked];
    updatedItems.splice(clicked.indexOf(element), 1);
    setClicked(updatedItems);
  };

  return (
      <div className="flex">
        <ul>
        {clicked.map((item, index) => (
          <li key={index} className=" bg-white">
            {item}
          </li>
        ))}
      </ul>
        <Button
        color="primary"
        onClick={() => handleClick("kaz")}
        className={clicked.indexOf("kaz") != -1 ? 'selected' : ''}
        >
            Kazuya
        </Button>
        
        <Button
        color="primary"
        onClick={() => handleClick("jin")}
        className={clicked.indexOf("jin") != -1 ? 'selected' : ''}
        >
            Jin
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("king")}
        className={clicked ? 'selected' : ''}
        >
            King
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("jun")}
        className={clicked ? 'selected' : ''}
        >
            Jun
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("paul")}
        className={clicked ? 'selected' : ''}
        >
            Paul
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("law")}
        className={clicked ? 'selected' : ''}
        >
            Law
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("jack")}
        className={clicked ? 'selected' : ''}
        >
            Jack-8
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lars")}
        className={clicked ? 'selected' : ''}
        >
            Lars
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("xiao")}
        className={clicked ? 'selected' : ''}
        >
            Xiaoyu
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("nina")}
        className={clicked ? 'selected' : ''}
        >
            Nina
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("leroy")}
        className={clicked ? 'selected' : ''}
        >
            Leroy
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("asuka")}
        className={clicked ? 'selected' : ''}
        >
            Asuka
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lili")}
        className={clicked ? 'selected' : ''}
        >
            Lili
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("bryan")}
        className={clicked ? 'selected' : ''}
        >
            Bryan
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("hwoarang")}
        className={clicked ? 'selected' : ''}
        >
            Hwoarang
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("claudio")}
        className={clicked ? 'selected' : ''}
        >
            Claudio
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("azu")}
        className={clicked ? 'selected' : ''}
        >
            Azucena
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("raven")}
        className={clicked ? 'selected' : ''}
        >
            Raven
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("leo")}
        className={clicked ? 'selected' : ''}
        >
            Leo
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("steve")}
        className={clicked ? 'selected' : ''}
        >
            Steve
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("kuma")}
        className={clicked ? 'selected' : ''}
        >
            Kuma
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("yoshi")}
        className={clicked ? 'selected' : ''}
        >
            Yoshimitsu
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("shaheen")}
        className={clicked ? 'selected' : ''}
        >
            Shaheen
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("drag")}
        className={clicked ? 'selected' : ''}
        >
            Dragunov
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("feng")}
        className={clicked ? 'selected' : ''}
        >
            Feng
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("panda")}
        className={clicked ? 'selected' : ''}
        >
            Panda
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lee")}
        className={clicked ? 'selected' : ''}
        >
            Lee
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("alisa")}
        className={clicked ? 'selected' : ''}
        >
            Alisa
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("zafina")}
        className={clicked ? 'selected' : ''}
        >
            Zafina
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("devilJin")}
        className={clicked ? 'selected' : ''}
        >
            Devil Jin
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("victor")}
        className={clicked ? 'selected' : ''}
        >
            Victor
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("reina")}
        className={clicked ? 'selected' : ''}
        id="reina"
        >
            Reina
        </Button>
      </div>
  );
}
