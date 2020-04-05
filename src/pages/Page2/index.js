import React, { Component } from "react";

import styled from "styled-components";

const Title = styled.div`
  font-size: 18px;
  color: black;
  margin-left: 300px;
  line-height: 25px;
`;

class Page1 extends Component {
  state = {};

  render() {
    return (
      <div>
       <Title> PAGE 2  </Title>
      </div>
    );
  }
}

export default Page1;
