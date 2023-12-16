import React, { useEffect, useState } from "react";
import "./App.css";
import { GameContext } from "./GameContext";
import GameBoard from "./Components/GameBoard";
import Oogy from "./assets/oggy.jpeg";
import chotbheem from "./assets/chotbheem.jpeg";
import doremon from "./assets/doremon.png";
import Motu from "./assets/motu.jpg";
import shincha from "./assets/shincha.png";
import tom from "./assets/tom.jpeg";

const App = () => {
  const [images, setImages] = useState([
    {
      name: "oggy",
      image: Oogy,
      visible: false,
    },
    {
      name: "chotbheem",
      image: chotbheem,
      visible: false,
    },
    {
      name: "doremon",
      image: doremon,
      visible: false,
    },
    {
      name: "motu",
      image: Motu,
      visible: false,
    },
    {
      name: "shincha",
      image: shincha,
      visible: false,
    },
    {
      name: "tom",
      image: tom,
      visible: false,
    },
    {
      name: "oggy",
      image: Oogy,
      visible: false,
    },
    {
      name: "chotbheem",
      image: chotbheem,
      visible: false,
    },
    {
      name: "doremon",
      image: doremon,
      visible: false,
    },
    {
      name: "motu",
      image: Motu,
      visible: false,
    },
    {
      name: "shincha",
      image: shincha,
      visible: false,
    },
    {
      name: "tom",
      image: tom,
      visible: false,
    },
  ]);
  const [score, setScore] = useState(0);
  const [first, setFirst] = useState(-1);
  const [second, setSecond] = useState(-1);

  function flipimage(index) {
    if (second != -1) {
      alert("Don't Cheat Betaa");
      return;
    }

    setImages((values) => {
      const temp = [...values];
      temp[index].visible = true;

      return temp;
    });

    if (first == -1) {
      setFirst(index);
    } else {
      setSecond(index);
    }
  }

  useEffect(() => {
    if (second == -1) {
      return;
    }

    if (images[first].name == images[second].name) {
      setScore(score + 10);
      setFirst(-1);
      setSecond(-1);
    } else {
      setTimeout(() => {
        setImages((values) => {
          const temp = [...values];
          temp[first].visible = false;
          temp[second].visible = false;

          setFirst(-1);
          setSecond(-1);

          return temp;
        });
      }, 1000);
    }
  }, [second]);

  return (
    <>
      <GameContext.Provider value={{ images, flipimage, score }}>
        <div>
          <GameBoard />
        </div>
      </GameContext.Provider>
    </>
  );
};

export default App;
