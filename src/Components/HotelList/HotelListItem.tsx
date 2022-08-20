import { FC } from "react";
import styled from "styled-components";
import { SearchResponse } from "../../types/Search";
import { currencyISOToSign } from "../../utils/currency";
import pluralise from "../../utils/pluralise";
import Rating, { RatingType } from "../../Components/Rating";

const Wrapper = styled.div`
  display: flex;
  height: 125px;
`;

interface HotelListItemProps {
  data: SearchResponse;
  nights: number;
}

const HotelListItem: FC<HotelListItemProps> = ({ data, nights }) => {
  return (
    <Wrapper data-testid="search-result">
      <PreviewWrapper>
        <PromotionBand>{data.offer.promotion.title}</PromotionBand>
        <HotelPreview
          src={data.property.previewImage.url}
          alt={data.property.previewImage.caption}
        />
      </PreviewWrapper>
      <DescriptionWrapper>
        <PropertyDetailsWrapper>
          <FirstLine>
            <PropertyTitle data-testid="property-name">
              {data.property.title}
            </PropertyTitle>
            <RatingWrapper>
              <Rating
                type={data.property.rating.ratingType as RatingType}
                score={data.property.rating.ratingValue}
              />
            </RatingWrapper>
          </FirstLine>

          <Address>{data.property.address.join(", ")}</Address>
        </PropertyDetailsWrapper>

        <PricingDetailsWrapper>
          <PriceForDuration>
            <b>{nights}</b> {pluralise(nights, "night", "nights")} total (
            {data.offer.displayPrice.currency})
          </PriceForDuration>

          <Amount>
            <sup>{currencyISOToSign(data.offer.displayPrice.currency)}</sup>
            {data.offer.displayPrice.amount}
          </Amount>
        </PricingDetailsWrapper>
      </DescriptionWrapper>
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
  margin: 5px 20px 5px 0;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  flex-grow: 1;
  justify-content: space-between;
`;

const PropertyDetailsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 70%;
  flex-direction: column;
`;

const PropertyTitle = styled.h2`
  font-size: 1.5rem;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const RatingWrapper = styled.div`
  display: inline;
  margin-left: 10px;
`;

const Address = styled.div`
  color: #888;
  font-size: 0.85rem;
`;

const PricingDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PriceForDuration = styled.div`
  font-size: 0.85rem;
`;

const Amount = styled.div`
  font-size: 1.5rem;
`;

const FirstLine = styled.div`
  display: flex;
  align-items: baseline;
`;
