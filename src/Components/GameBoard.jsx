import React, { useContext } from "react";
import GameCard from "./GameCard";
import { GameContext } from "../GameContext";

const GameBoard = () => {
  const { images,score } = useContext(GameContext);

  return (
    <>
      <h1>Memory Game </h1>
      <p>Score: {score}</p>
      <div className="box">
        {images.map((item, index) => (
          <GameCard
            image={item.image}
            visible={item.visible}
            name={item.name}
            index={index}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
