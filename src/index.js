import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

const animalCards = [
  { id: "card 1", name: "Lion", photoname: "./lion.jpg" },
  { id: "card 2", name: "Elephant", photoname: "./elephant.jpg" },
  { id: "card 3", name: "Tiger", photoname: "./tiger.jpg" },
  { id: "card 4", name: "Giraffe", photoname: "./giraffe.jpg" },
  { id: "card 5", name: "Zebra", photoname: "./zebra.jpg" },
  { id: "card 6", name: "Panda", photoname: "./panda.jpg" },
  { id: "card 7", name: "Kangaroo", photoname: "./kangaroo.jpg" },
  { id: "card 8", name: "Penguin", photoname: "./penguin.jpg" },
  { id: "card 9", name: "Koala", photoname: "./koala.jpg" },
  { id: "card 10", name: "Leopard", photoname: "./leopard.jpg" },
  { id: "card 11", name: "Wolf", photoname: "./wolf.jpg" },
  { id: "card 12", name: "Fox", photoname: "./fox.jpg" },
  { id: "card 13", name: "Bear", photoname: "./bear.jpg" },
  { id: "card 14", name: "Deer", photoname: "./deer.jpg" },
  { id: "card 15", name: "Rabbit", photoname: "./rabbit.jpg" },
];

function App() {
  return (
    <div className="app-wrapper">
      <h1>All cards are here</h1>
      <div className="app">
        {animalCards.map((animal) => (
          <AnimalCard obj={animal} key={animal.id} />
        ))}
      </div>
    </div>
  );
}
function AnimalCard(props) {
  return (
    <div className="card">
      <img
        src={props.obj.photoname}
        alt={props.obj.photoname}
        className="img"
      />
      <p className="id">{props.obj.id}</p>
      <h2 className="name">{props.obj.name}</h2>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
