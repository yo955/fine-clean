import React from "react";
import { Hero } from "./hero";
import { List } from './List';



export const Header = () => {
  return (
    <header className="main-header">
      <Hero />
      <List/>
    </header>
  );
};
