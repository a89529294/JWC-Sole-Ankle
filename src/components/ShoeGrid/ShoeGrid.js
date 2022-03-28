import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <StyledShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const StyledShoeCard = styled(ShoeCard)``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${StyledShoeCard} {
    min-width: 250px;
    flex: 1;
  }
  gap: 16px;
`;

export default ShoeGrid;
