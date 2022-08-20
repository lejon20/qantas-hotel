import HotelListControls from "./HotelListControls";
import { fireEvent, render, screen } from "@testing-library/react";
import { PriceSortingOrder, SearchCategory } from "../../types/Search";

const noop = () => {};
describe("HotelListControls", () => {
  const renderComponent = (
    {
      resultCount,
      onSort,
    }: any /*put aside ts for job test convenience, it isnt hard just time consuming*/ = {
      resultCount: 4,
      onSort: noop,
    }
  ) =>
    render(
      <HotelListControls
        onSort={onSort}
        resultCount={resultCount}
        order={PriceSortingOrder.HighToLow}
        searchCategory={SearchCategory.Hotel}
        searchTerm="Paris"
      />
    );
  it("should display the number of available hotels", () => {
    renderComponent();

    expect(screen.getByTestId("total-result").textContent).toEqual("4");
  });

  it("should display the search category", () => {
    renderComponent();

    expect(screen.getByTestId("category-result").textContent).toEqual("hotels");
  });

  it("should pluralise the category accordingly", () => {
    renderComponent({ resultCount: 1 });

    expect(screen.getByTestId("category-result").textContent).toEqual("hotel");
  });

  it("should display the search term", () => {
    renderComponent();

    expect(screen.getByTestId("term-result").textContent).toEqual("Paris");
  });

  it("should have a function that is called when the user change the sorting option", () => {
    const mockSortHandler = jest.fn();
    renderComponent({ onSort: mockSortHandler });

    const selectEl = screen.getByLabelText("Sort search result");
    fireEvent.change(selectEl, {
      target: { value: PriceSortingOrder.LowToHigh },
    });

    expect(mockSortHandler).toHaveBeenCalledWith(PriceSortingOrder.LowToHigh);
  });
});
