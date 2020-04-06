import React, { Component } from "react";

import styled from "styled-components";

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
       <Title>Page 2</Title>
      </div>
    );
  }
}

export default Page1;
