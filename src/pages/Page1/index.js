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
`;

class Page1 extends Component {
  state = {};

  render() {
    return (
      <div>
       <Main> 
       <BarChart />
       <PieChart />
       </Main>
      </div>
    );
  }
}

export default Page1;
