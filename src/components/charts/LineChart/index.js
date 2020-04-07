import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import { timeResultChartLine } from "../../../services/api";
import { data, options } from "./chartLine.settings";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 300px;
  padding: 2rem 2rem 5rem;
  border-radius: 5px;
  border: 1px solid #D8DDE6;
  background: rgba(255, 255, 255, 0.0001);
  box-shadow:  0px 7px 60px 
    rgba(90, 97, 105, 0.16), 0px 8px 8px 
    rgba(90, 97, 105, 0.06), 0px 3px 6px rgba(90, 97, 105, 0.12), 0px 1px 0px 
    rgba(90, 97, 105, 0.11);
  }
`;

const Chart = styled.div`
  position: relative;
  height: 100%;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 20px;
  text-transform: uppercase;
  color: green;
  margin-bottom: 2rem;
`;

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anualResult: [],
      today: "",
      yesterday: "",
    };
  }

  getResult = async () => {
    const response = await timeResultChartLine.get("/time-data");
    this.setState({ anualResult: response.data }, () => {
      this.setState({ today: response.data.today });
      this.setState({ yesterday: response.data.yesterday });
    });
  };

  componentDidMount() {
    this.getResult().catch((err) =>
      console.error("Failed retrieving information", err)
    );
  }

  render() {
    const { today, yesterday } = this.state;

    let todayData = { labels: [], values: [] };
    let yesterdayData = { labels: [], values: [] };

    for (let results in today) {
      if (today.hasOwnProperty(results) && yesterday.hasOwnProperty(results)) {
        todayData.labels.push(today[results].label);
        todayData.values.push(today[results].value);

        yesterdayData.labels.push(yesterday[results].label);
        yesterdayData.values.push(yesterday[results].value);
      }
    }

    

    let dataLine = data;
    dataLine.labels = todayData.labels;
    dataLine.datasets[0].data = todayData.values
    dataLine.datasets[1].data = yesterdayData.values

    return (
      <Container>
        <Title>LINES CHART 2 DATA</Title>
        <Chart>
          <Line data={dataLine} options={options} />
        </Chart>
      </Container>
    );
  }
}
