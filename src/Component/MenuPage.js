import React from "react";
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
import BubbleWaffles from "../Images/Bubble waffles.jpg";

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
      image: BubbleWaffles,
      name: "Breakfast Bubble Waffles",
      price: "R50",
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
    <div className="menuBody content">
      <h1 className="text-center p-3">MENU</h1>
      <div className="card-container">
        {Menu.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>Flavours</p>
              <div className="card-price">
                <h2>{item.price}</h2>
                <button href="" className="btn">
                  BUY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
