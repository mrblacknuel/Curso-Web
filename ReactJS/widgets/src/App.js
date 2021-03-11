import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  { title: "What is React?", content: "React is a frontend framework" },
  {
    title: "What is Javascript?",
    content: "Javascript is a client side programming language",
  },
  {
    title: "What is PHP?",
    content: "PHP is not a good programming language",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color green", value: "green" },
  { label: "The Color blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
    </div>
  );
};
