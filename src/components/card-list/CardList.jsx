import React from "react";
import Card from "../card/Card";
import './card-list.css';

function CardList({ monsters }) {
  return (
    <div className="card-list" >
      {monsters?.map((monster) => {
        return (
         <Card monster = {monster}></Card>
        );
      })}
    </div>
  );
}

export default CardList;
