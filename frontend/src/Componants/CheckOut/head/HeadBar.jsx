/* eslint-disable no-unused-vars */
//head of the checkout page;
import React from 'react'
import {UserIcon,HeartIcon,CubeIcon,LogoutIcon} from "@heroicons/react/outline"
import {useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Head.css";
import {Option} from "./optStyled"
export const HeadBar = () => {
  const [toggle, setToggle] = useState(true);

  // set user Name here
  const userName = "Sai"
  
  const handleToggle = () => {
    setToggle(false);
  };

// console.log(address)
  return (
    <div className="head_wrapper">
      <div className="co_head">
        <div className="company_logo">
          <img
            src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"
            alt="companyLogo"/>
        </div>
        <div className="user_det">
          <p>{userName}</p>
          <div className="user_opt">
            <Option>
             <span><UserIcon className="icons" style = {{color : "rgb(43,162,228)", fontweight : "bold"}}/> My Account </span>
            </Option>
            <Option>
             <span><HeartIcon className="icons" style = {{color : "rgb(255,51,153)", fontweight : "bold"}}/> Favorites </span>
            </Option>
            <Option>
             <span><CubeIcon className="icons" style = {{color : "rgb(86,212,0)", fontweight : "bold"}}/> My Orders </span>
            </Option>
            <hr style = {{width:"80%", margin : "auto", marginTop :"8px"}}/>
            <Option>
             <span><LogoutIcon className="icons" style = {{color : "rgb(255,51,153)", fontweight : "bold"}}/> Sign Out </span>
            </Option>
          
          </div>
        </div>
      </div>
    </div>
  );
};
