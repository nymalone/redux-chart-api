import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";

const Sidebar = styled.aside`
  position: absolute;
  width: 105px;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, #000000 0%, #b5b5b5 100%);
  text-align: center;
  display: block;
`;

const Title = styled.div`
  font-size: 18px;
  color: #fff;
  margin-top: 19px;
  line-height: 25px;
`;

const Page1 = styled.div`
  height: 85px;
  margin-top: 45px;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
`;

const Page2 = styled.div`
  height: 85px;
  margin-top: 45px;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
`;

class Navigation extends Component {
  state = {};

  render() {
    return (
      <>
        <Sidebar>
          <Title> Semantix </Title>

          <NavLink to="/">
            <Page1>
              <Img src={Icon1} alt="circular icon" />
              <p>Page 1</p>
            </Page1>
          </NavLink>

          <NavLink to="page2">
            <Page2>
              <Img src={Icon2} alt="circular icon" />
              <p>Page 2</p>
            </Page2>
          </NavLink>
        </Sidebar>
      </>
    );
  }
}

export default Navigation;
