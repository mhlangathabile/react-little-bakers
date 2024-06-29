import React from "react";
import NavBar from "./NavBar";

const MenuPage = () => {
  let Menu = [
    {
      name: "Nutella Heart Pie Pops",
      price: "R",
    },
    {
      name: "Strawberry Donut Kabobs",
      price: "R",
    },
    {
      name: "Nutella Pancake Stacks",
      price: "R",
    },
    {
      label: "Heart Pizza",
      cost: "R",
    },
    {
      label: "Pizza Wheels",
      cost: "R",
    },
    {
      label: "Filled Croissants",
      cost: "R",
    },
    {
      tag: "Whipped Hot Chocolate",
      value: "R",
    },
    {
      tag: "Milkshake Shooters",
      value: "R",
    },
    {
      tag: "Rainbow Popsicles",
      value: "R",
    },
    {
      tag: "Yoghurt Popsicles",
      value: "R",
    },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="text-center p-3">MENU</h1>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4 text-center" key={index}>
            <p>
              {item.name}
              <br /> {item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4 text-center" key={index}>
            <p>
              {item.label} <br /> {item.cost}
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-3 text-center" key={index}>
            <p>
              {item.tag} <br />
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
