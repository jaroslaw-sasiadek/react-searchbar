import { SearchBarProps, useSearchBar } from "./useSearchBar";

export const SearchBar = (props: SearchBarProps) => {
  const { handleChange } = useSearchBar(props);

  return (
    <>
      <input
        type="text"
        placeholder="What are you searching for..."
        onChange={(event) => handleChange(event)}
      />
    </>
  );
};
