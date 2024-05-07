import { useId } from "react";

export const SearchBox = ({ value, onFilter }) => {
  const filterFieldId = useId();

  return (
    <div>
      <label htmlFor={filterFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={filterFieldId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
