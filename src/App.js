import React from "react";
import styled from "styled-components";

import Posts from "./containers/Posts";

const App = styled.div`
  width: 60%;
  margin: 1rem auto 0;
`;

const Heading = styled.h1`
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
`;

export default () => (
  <App>
    <Heading>Posts</Heading>
    <Posts />
  </App>
);
