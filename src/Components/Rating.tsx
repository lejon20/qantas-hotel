import { FC } from "react";
import styled from "styled-components";

export enum RatingType {
  self = "self",
  star = "star",
}

interface RatingProps {
  type: RatingType;
  score: number;
}

const Rating: FC<RatingProps> = ({ type, score }) => {
  return (
    <RatingWrapper>
      {Array(5)
        .fill(0)
        .map((_v, idx) =>
          type === RatingType.star ? (
            <Star filled={score >= idx + 1} key={idx} />
          ) : (
            <Circle filled={score >= idx + 1} key={idx} />
          )
        )}
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  display: flex;
`;

interface StarProps {
  filled: boolean; // does not yet handle partly filled
}

const yellow = "rgb(251, 203, 59)";
const grey = "#bbb";

const Star: FC<StarProps> = ({ filled }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path fill={filled ? yellow : grey} d="M8 .2l4.9 15.2L0 6h16L3.1 15.4z" />
    </svg>
  );
};

const Circle: FC<StarProps> = ({ filled }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <circle cx="8" cy="8" r="6" fill={filled ? yellow : grey} />
    </svg>
  );
};

export default Rating;
