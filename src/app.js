import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body.jsx";
import Restaurantcard from "./components/Restaurantcard.jsx";


const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello My name is Kshitj"
);






const Applayout = () => {
  return (
    <div className="App">
      <>
        <Header></Header>
      </>
      <>
        <Body></Body>
      </>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
