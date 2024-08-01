import React, { useState } from "react";
import "./Collapsible.css";
import { Employee } from "../models/Employee";

interface CollapsibleProps {
  title: string;
  content: Employee | null | undefined;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button className="collapsible-button" onClick={toggleCollapse}>
        {isOpen ? "Hide" : "Show"} {title}
      </button>
      <div className={`collapsible-content ${isOpen ? "open" : "closed"}`}>
        {isOpen && <p>{content?.firstname}</p>}
      </div>
    </div>
  );
};


