import React from "react";
import { MdArticle } from "react-icons/md";
import "./button.css";
const Button = (props) => {
  // console.log(props)
  return (
    <div>
      <button className="primary_btn"> <MdArticle/>{props.text} {props.icons}</button>
    </div>
  );
};

export default Button;
