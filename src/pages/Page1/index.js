import React, { Component } from "react";

import styled from "styled-components";

import BarChart from "../../components/charts/BarChart";
import PieChart from "../../components/charts/PieChart";

const Main = styled.div`
  font-size: 18px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  line-height: 25px;
  padding-top: 167px;

  @media screen and (max-width: 700px) {
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  color: #001b36;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  position: absolute;
  margin-left: 170px;
  margin-top: 50px;

  @media screen and (max-width: 700px) {
    margin-left: 135px;
    font-size: 40px;
  }
`;

class Page1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Title>Page 1</Title>
        <Main>
          <BarChart />
          <PieChart />
        </Main>
      </div>
    );
  }
}

export default Page1;
