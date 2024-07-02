import React from "react";
import NavBar from "./NavBar";
import "./Menu.css";
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
      price: "R25",
    },
    {
      image: StrawberryDonutKabobs,
      name: "Strawberry Donut Kabobs",
      price: "R20",
    },
    {
      image: NutellaPancakeStacks,
      name: "Nutella Pancake Stacks",
      price: "R30",
    },
    {
      image: HeartyPizza,
      name: "Hearty Pizza",
      price: "R35",
    },
    {
      image: PizzaWheels,
      name: "Pizza Wheels",
      price: "R40",
    },
    {
      image: FilledCroissants,
      name: "Filled Croissants",
      price: "R45",
    },
    {
      image: WhippedHotChocolate,
      name: "Whipped Hot Chocolate",
      price: "R50",
    },
    {
      image: MilkshakeShooters,
      name: "Milkshake Shooters",
      price: "R55",
    },
    {
      image: RainbowPopsicles,
      name: "Rainbow Popsicles",
      price: "R60",
    },
    {
      image: YoghurtPopsicles,
      name: "Yoghurt Popsicles",
      price: "R65",
    },
  ];

  return (
    <div class="menuBody">
      <NavBar />
      <h1 className="text-center p-3">MENU</h1>
      <div className="row">
        {Menu.map((item, index) => (
          <div className="col-4 text-center" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <p>
              {item.name}
              <br /> {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
