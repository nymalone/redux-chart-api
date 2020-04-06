import React, { Component } from "react";

import styled from "styled-components";

import BarChart from '../../components/charts/BarChart'
import PieChart from '../../components/charts/PieChart'

const Main = styled.div`
  font-size: 18px;
  color: black;
  display: flex;
  justify-content: space-evenly;
  line-height: 25px;
  padding-top: 167px;
`;

const Title = styled.p`
  color: #001B36;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  position: absolute;
  margin-left: 178px;
  margin-top: 50px;
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
