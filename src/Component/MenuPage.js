import React from "react";
import NavBar from "./NavBar";
import NutellaHeartPiePops from "../Images/Nutella Heart Pie Pops.jpg";
import StrawberryDonutKabobs from "../Images/Strawberry Donut Kabobs -.jpg";
import NutellaPancakeStacks from "../Images/Nutella Pancake Stacks.jpg";
import HeartyPizza from "../Images/Hearty Pizza.jpg";
import PizzaWheels from "../Images/Pizza Wheels .jpg";
import FilledCroissants from "../Images/Filled Croissants.jpg";
import RainbowPopsicles from "../Images/Rainbow Popsicles.jpg";
import YoghurtPopsicles from "../Images/Yoghurt Popsicles.jpg";
import WhippedHotChocolate from "../Images/Whipped Hot Chocolate.jpg";
import MilkshakeShooters from "../Images/Milkshake Shooters.jpg";

const MenuPage = () => {
  let Menu = [
    {
      image: NutellaHeartPiePops,
      name: "Nutella Heart Pie Pops",
      price: "R",
    },
    {
      image: StrawberryDonutKabobs,
      name: "Strawberry Donut Kabobs",
      price: "R",
    },
    {
      image: NutellaPancakeStacks,
      name: "Nutella Pancake Stacks",
      price: "R",
    },
    {
      photo: HeartyPizza,
      label: "Hearty Pizza",
      cost: "R",
    },
    {
      photo: PizzaWheels,
      label: "Pizza Wheels",
      cost: "R",
    },
    {
      photo: FilledCroissants,
      label: "Filled Croissants",
      cost: "R",
    },
    {
      visual: WhippedHotChocolate,
      tag: "Whipped Hot Chocolate",
      value: "R",
    },
    {
      visual: MilkshakeShooters,
      tag: "Milkshake Shooters",
      value: "R",
    },
    {
      visual: RainbowPopsicles,
      tag: "Rainbow Popsicles",
      value: "R",
    },
    { visual: YoghurtPopsicles, tag: "Yoghurt Popsicles", value: "R" },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="text-center p-3">MENU</h1>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4 text-center" key={index}>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
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
            <img src={item.photo} alt={item.label} style={{ width: "100%" }} />
            <p>
              {item.label} <br /> {item.cost}
            </p>
          </div>
        ))}
      </div>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-3 text-center" key={index}>
            <img src={item.visual} alt={item.tag} style={{ width: "100%" }} />
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
