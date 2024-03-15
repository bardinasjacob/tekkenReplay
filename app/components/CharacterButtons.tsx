"use client"
import Image from "next/image";
import Button from '@mui/joy/Button';
import React, {useRef, useState} from "react";
import ReplayScroll from "./ReplayScroll";

function CharacterButtons(){
    const[clicked, setClicked] = useState<string[]>([]);
  const handleClick = (element: string) => {
    if(clicked.length < 2){
        if(clicked.indexOf(element) === -1){
            setClicked([...clicked, element]);
          }
          else{
            removeItem(element)
          }
    }
    if(clicked.indexOf(element) != -1){
        removeItem(element)
    }
  }

  const removeItem = (element: string) => {
    const updatedItems = [...clicked];
    updatedItems.splice(clicked.indexOf(element), 1);
    setClicked(updatedItems);
  };

  return (
      <>
        <div className="flex w-full flex-wrap justify-evenly">
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
        className={clicked.indexOf("king") != -1 ? 'selected' : ''}
        >
            King
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("jun")}
        className={clicked.indexOf("jun") != -1 ? 'selected' : ''}
        >
            Jun
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("paul")}
        className={clicked.indexOf("paul") != -1 ? 'selected' : ''}
        >
            Paul
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("law")}
        className={clicked.indexOf("law") != -1 ? 'selected' : ''}
        >
            Law
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("jack")}
        className={clicked.indexOf("jack") != -1 ? 'selected' : ''}
        >
            Jack-8
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lars")}
        className={clicked.indexOf("lars") != -1 ? 'selected' : ''}
        >
            Lars
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("xiao")}
        className={clicked.indexOf("xiao") != -1 ? 'selected' : ''}
        >
            Xiaoyu
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("nina")}
        className={clicked.indexOf("nina") != -1 ? 'selected' : ''}
        >
            Nina
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("leroy")}
        className={clicked.indexOf("leroy") != -1 ? 'selected' : ''}
        >
            Leroy
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("asuka")}
        className={clicked.indexOf("asuka") != -1 ? 'selected' : ''}
        >
            Asuka
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lili")}
        className={clicked.indexOf("lili") != -1 ? 'selected' : ''}
        >
            Lili
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("bryan")}
        className={clicked.indexOf("bryan") != -1 ? 'selected' : ''}
        >
            Bryan
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("hwoarang")}
        className={clicked.indexOf("hwoarang") != -1 ? 'selected' : ''}
        >
            Hwoarang
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("claudio")}
        className={clicked.indexOf("claudio") != -1 ? 'selected' : ''}
        >
            Claudio
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("azucena")}
        className={clicked.indexOf("azucena") != -1 ? 'selected' : ''}
        >
            Azucena
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("raven")}
        className={clicked.indexOf("raven") != -1 ? 'selected' : ''}
        >
            Raven
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("leo")}
        className={clicked.indexOf("leo") != -1 ? 'selected' : ''}
        >
            Leo
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("steve")}
        className={clicked.indexOf("steve") != -1 ? 'selected' : ''}
        >
            Steve
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("kuma")}
        className={clicked.indexOf("kuma") != -1 ? 'selected' : ''}
        >
            Kuma
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("yoshi")}
        className={clicked.indexOf("yoshi") != -1 ? 'selected' : ''}
        >
            Yoshimitsu
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("shaheen")}
        className={clicked.indexOf("shaheen") != -1 ? 'selected' : ''}
        >
            Shaheen
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("drag")}
        className={clicked.indexOf("drag") != -1 ? 'selected' : ''}
        >
            Dragunov
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("feng")}
        className={clicked.indexOf("feng") != -1 ? 'selected' : ''}
        >
            Feng
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("panda")}
        className={clicked.indexOf("panda") != -1 ? 'selected' : ''}
        >
            Panda
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("lee")}
        className={clicked.indexOf("lee") != -1 ? 'selected' : ''}
        >
            Lee
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("alisa")}
        className={clicked.indexOf("alisa") != -1 ? 'selected' : ''}
        >
            Alisa
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("zafina")}
        className={clicked.indexOf("zafina") != -1 ? 'selected' : ''}
        >
            Zafina
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("devilJin")}
        className={clicked.indexOf("devilJin") != -1 ? 'selected' : ''}
        >
            Devil Jin
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("victor")}
        className={clicked.indexOf("victor") != -1 ? 'selected' : ''}
        >
            Victor
        </Button>

        <Button
        color="primary"
        onClick={() => handleClick("reina")}
        className={clicked.indexOf("reina") != -1 ? 'selected' : ''}
        id="reina"
        >
            Reina
        </Button>
        </div>
    <div>
        <ReplayScroll charArray={clicked}/>
   </div>
      </>
  );

}

const MemoizedButtons = React.memo(CharacterButtons)

export default MemoizedButtons;
