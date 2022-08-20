import { FC } from "react";
import { SearchResponse } from "../../types/Search";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 125px;
`;

interface HotelListItemProps {
  data: SearchResponse;
}

const HotelListItem: FC<HotelListItemProps> = ({ data }) => {
  return (
    <Wrapper data-testid="search-result">
      <PreviewWrapper>
        <PromotionBand>{data.offer.promotion.title}</PromotionBand>
        <HotelPreview
          src={data.property.previewImage.url}
          alt={data.property.previewImage.caption}
        />
      </PreviewWrapper>
      <DescriptionWrapper>d</DescriptionWrapper>
    </Wrapper>
  );
};

export default HotelListItem;

const HotelPreview = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PromotionBand = styled.div`
  background: #fff;
  color: #f00;
  padding: 5px;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  top: 10%;
`;

const PreviewWrapper = styled.div`
  width: 20%;
  margin: 5px;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  border-top: 1px solid #ddd;
  flex-grow: 1;
`;
