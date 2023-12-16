import React, { useContext } from "react";
import { GameContext } from "../GameContext";

const GameCard = ({ name, image, visible,index }) => {
  const {flipimage} = useContext(GameContext);

  return (
    <>
      <div className="imgbox" onClick={()=> flipimage(index)}>
        {visible == true ? (
          <img src={image} />
        ) : (
          <img
            src="https://img.freepik.com/free-photo/fun-backpacker-german-shepherd-dog-cartoon-character_183364-80975.jpg?size=626&ext=jpg&ga=GA1.1.1648147192.1700233650&semt=sph"
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default GameCard;
