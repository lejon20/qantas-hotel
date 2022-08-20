import { SearchCategory } from "../types/Search";

export const searchCategoryToPlural = (category: SearchCategory) => {
  switch (category) {
    case SearchCategory.Hotel:
      return "hotels";
  }
};
