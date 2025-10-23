import React from "react";
import { Hero } from "./hero";
import { List } from './List';



export const Header = () => {
  return (
    <header className="main-header mb-1 border-b-2 border-orange">
      <Hero />
      <List/>
    </header>
  );
};
