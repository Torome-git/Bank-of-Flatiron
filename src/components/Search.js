import React from "react";

function Search( handleSearch ) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(event) => {
          console.log("Searching...");
          handleSearch(event.target.value);
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
