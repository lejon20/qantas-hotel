import HotelList from "./HotelList";
import { render, screen } from "@testing-library/react";

describe("HotelList", () => {
  it("has controls", () => {
    render(<HotelList />);
    screen.getByRole("region", { name: "Hotel list controls" });
  });
});
