import React, { Component } from "react";

import styled from "styled-components";

import LineChart from '../../components/charts/LineChart'

const Main = styled.div`
  font-size: 18px;
  color: black;
  position: absolute;
  margin-left: 178px;
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

class Page2 extends Component {
  state = {};

  render() {
    return (
      <div>
       <Title>Page 2</Title>
       <Main> 
       <LineChart />
       </Main>
      </div>
    );
  }
}

export default Page2;
