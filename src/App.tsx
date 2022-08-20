import React from "react";
import "./App.css";
import styled from "styled-components";
import Logo, { LogoSize } from "./Components/Logo";
import HotelList from "./Components/HotelList";

const Main = styled.div`
  width: 844px; // we're going fixed width
  margin: 0 auto;
  padding: 40px 40px 10px 10px;
`;

function App() {
  return (
    <Main>
      <div>
        <Logo size={LogoSize.small} />
        <HotelList />
      </div>
    </Main>
  );
}

export default App;
