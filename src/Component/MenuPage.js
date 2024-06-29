import React from "react";
import NavBar from "./NavBar";

const MenuPage = () => {
  let Menu = [
    {
      name: "Nutella Heart Pie Pops",
      price: "R25",
    },
    {
      name: "Popsicles",
      price: "R10",
    },
    {
      name: "Another Item",
      price: "R30",
    },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="text-center p-3">MENU</h1>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4" key={index}>
            <p>
              {item.name} {item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4" key={index}>
            <p>
              {item.name} {item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4" key={index}>
            <p>
              {item.name} {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
