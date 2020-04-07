import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

import { percentageResultChartPie } from "../../../services/api";
import { data, options } from "./chartPie.settings";

import styled from "styled-components";


const Container = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  padding: 2rem 2rem 5rem;
  border-radius: 5px;
  border: 1px solid #D8DDE6;
  background: rgba(255, 255, 255, 0.0001);
  box-shadow:  0px 7px 60px 
    rgba(90, 97, 105, 0.16), 0px 8px 8px 
    rgba(90, 97, 105, 0.06), 0px 3px 6px rgba(90, 97, 105, 0.12), 0px 1px 0px 
    rgba(90, 97, 105, 0.11);
  
  
  @media screen and (max-width: 700px){
    width: 300px;
   margin-left: 24px;
  margin-bottom: 30px;
  }
`;

const Chart = styled.div`
  position: relative;
  height: 100%;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 20px;
  text-transform: uppercase;
  color: green;
  margin-bottom: 2rem;
`;


export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anualResult: [],
    };
  }

  getResult = async () => {
    const response = await percentageResultChartPie.get("/anual-percentage");
    this.setState({ anualResult: response.data });
  };

  componentDidMount() {
    this.getResult().catch((err) => console.error('Failed retrieving information', err));
  }


  render() {
    const { anualResult } = this.state;
    let dataResult = anualResult
      .filter((item, idx) => idx < 6) 
      .map((item) => item);

    let dataPie = data;
    dataPie.labels = dataResult.map((res) => res.label);
    dataPie.datasets[0].data = dataResult.map((res) => res.value);

    return (
      <Container>
        <Title> PIE CHART</Title>
        <Chart>
          <Pie data={dataPie} options={options} />
        </Chart>
      </Container>
    );
  }
}

