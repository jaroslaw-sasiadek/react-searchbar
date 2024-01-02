import { useEffect } from "react";

import { searchListener } from "./SearchListener";

export type DataType = { id: number; name: string }[];

export interface SearchBarProps {
  data: DataType;
  onFilterChange: (filteredData: DataType) => void;
}

export const useSearchBar = (props: SearchBarProps) => {
  const { data, onFilterChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(newQuery)
    );
    onFilterChange(filteredData);
  };

  useEffect(() => {
    searchListener.subscribe(handleChange);
    return () => {
      searchListener.unsubscribe();
    };
  }, []);

  return { handleChange };
};
