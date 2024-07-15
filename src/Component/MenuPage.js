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
      flavours: "FLAKY PIE CRUST | CREAMY NUTELLA FILIING",
    },
    {
      image: StrawberryDonutKabobs,
      name: "Strawberry Donut Kabobs",
      price: "R20",
      flavours: "SWEET STRAWBERRY GLAZE ",
    },
    {
      image: NutellaPancakeStacks,
      name: "Nutella Pancake Stacks",
      price: "R30",
      flavours: "RICH NUTELLA SPREAD | FRESH STRAWBERRIES",
    },
    {
      image: HeartyPizza,
      name: "Hearty Pizza",
      price: "R35",
      flavours: "HAWAIIAN BLISS | BUFFALO CHICKEN | PESTO VEGGIE",
    },
    {
      image: PizzaWheels,
      name: "Pizza Wheels",
      price: "R40",
      flavours: "PEPPERONI DELIGHT | CHEESY VEGGIE | BBQ CHICKEN",
    },
    {
      image: FilledCroissants,
      name: "Filled Croissants",
      price: "R45",
      flavours: "TURKEY & CHEESE | CHICKEN AN AND RANCH | EGG & CHEESE",
    },
    {
      image: BubbleWaffles,
      name: "Breakfast Bubble Waffles",
      price: "R50",
      flavours: "HAM & CHEESE | GRILLED CHICKEN AND AVO | BACON LETTUCE TOM",
    },
    {
      image: WhippedHotChocolate,
      name: "Whipped Hot Chocolate",
      price: "R50",
      flavours: "MARSHMALLOW MELT | CINNAMON SPICE | CLASSIC COCOA",
    },
    {
      image: MilkshakeShooters,
      name: "Milkshake Shooters",
      price: "R55",
      flavours: "OREO CRUNCH | VANILLA DREAM | STRAWBERRY BLISS",
    },
    {
      image: RainbowPopsicles,
      name: "Rainbow Popsicles",
      price: "R60",
      flavours: "PEACH PARADISE | GRAPE ESCAPE | TROPICALTWIST",
    },
    {
      image: YoghurtPopsicles,
      name: "Yoghurt Popsicles",
      price: "R65",
      flavours: "BERRY BLAST | CHOCO BANANA | UNICORN DELIGHT",
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
              <p>{item.flavours}</p>
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
