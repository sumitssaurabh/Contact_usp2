import React from "react";
import Button from "../button/Button";
import { MdArticle} from "react-icons/md";
import Form from '../Form/Form'
import './count.css';

 import { IconName } from "react-icons/bi";

// import './App.css';


const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="margin">
          <h1 className="h1">CONTACT US</h1>
          <p className="para">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
          <div className="btn">     <Button text = "VIA SUPPOORT CHAT" 

icon = {MdArticle}
/>

<Button    className="call"  text = "VIA Call" 

// icon = {HiCheckCircle}
/>

</div>



<button className="email_form"> VAI EMAIL FORM  </button>
<div className="side2">
<div>
<Form/>
</div>
<div className ="g">
  <img className ="img2"  src="./g.PNG" alt="loading" />

</div>



</div>



        </div>
      </div>
    </>
  );
};

export default Contact;
