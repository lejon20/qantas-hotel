import styled from "styled-components";
import React, { FC } from "react";
import { PriceSortingOrder, SearchCategory } from "../../types/Search";
import pluralise from "../../utils/pluralise";
import { searchCategoryToPlural } from "../../utils/search";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0 10px;
`;

interface HotelListControlsProps {
  resultCount: number;
  searchTerm: string;
  searchCategory: SearchCategory;
  order: PriceSortingOrder;
  onSort: (order: PriceSortingOrder) => void;
}

const HotelListControls: FC<HotelListControlsProps> = ({
  resultCount,
  searchTerm,
  searchCategory,
  order,
  onSort,
}) => {
  /**
   * Components are defines internally for convenience
   * As they grow they could be moved out of this function body
   * and even further to a dedicated file
   */
  const SearchResult = () => (
    <div>
      <b data-testid="total-result">{resultCount}</b>&nbsp;
      <span data-testid="category-result">
        {pluralise(
          resultCount,
          searchCategory,
          searchCategoryToPlural(searchCategory)
        )}
      </span>
      &nbsp;in&nbsp;
      <b data-testid="term-result">{searchTerm}</b>.
    </div>
  );

  const ResultSort = () => {
    const sortByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSort(e.currentTarget.value as PriceSortingOrder);
    };
    return (
      <select
        onChange={sortByPrice}
        aria-label="Sort search result"
        value={order}
      >
        <option value={PriceSortingOrder.LowToHigh}>Price low-high</option>
        <option value={PriceSortingOrder.HighToLow}>Price high-low</option>
      </select>
    );
  };

  return (
    <Wrapper role="region" aria-label="Hotel list controls">
      <SearchResult />
      <ResultSort />
    </Wrapper>
  );
};

export default HotelListControls;
