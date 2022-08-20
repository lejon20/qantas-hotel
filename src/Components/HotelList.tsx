import styled from "styled-components";
import HotelListControls from "./HotelList/HotelListControls";
import HotelListItem from "./HotelList/HotelListItem";
import data from "../data.json";
import { PriceSortingOrder, SearchCategory } from "../types/Search";
import { useMemo, useState } from "react";

const Wrapper = styled.div``;

// hardcoded for now
const searchTerm = "Sydney";
const searchCategory = SearchCategory.Hotel;

const HotelList = () => {
  const [order, setOrder] = useState(PriceSortingOrder.HighToLow);

  const sortedData = useMemo(
    () =>
      [...data.results] /*shallow copy before sorting*/
        .sort((a, b) => {
          const reverse = order === PriceSortingOrder.HighToLow ? 1 : -1;
          return (
            reverse *
            (b.offer.displayPrice.amount - a.offer.displayPrice.amount)
          );
        }),
    [order]
  );

  return (
    <Wrapper>
      <HotelListControls
        resultCount={data.results.length}
        searchTerm={searchTerm}
        searchCategory={searchCategory}
        order={order}
        onSort={setOrder}
      />
      {sortedData.map((hotelData) => (
        <HotelListItem key={hotelData.id} data={hotelData} />
      ))}
    </Wrapper>
  );
};

export default HotelList;
