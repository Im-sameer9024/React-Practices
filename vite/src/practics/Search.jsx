import { useState } from "react";

const Search = () => {
  const arr = [
    "item",
    "Update",
    "Item3",
    "Remove",
    "Delete",
    "Add Item",
    "add",
  ];
  const [searchItem, setSearchItem] = useState("");

  const filtered = arr.filter((el) =>
    el.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className=" outline "
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {filtered.map((Item, Index) => (
        <li key={Index}>{Item}</li>
      ))}
    </div>
  );
};

export default Search;
