import React from "react";

export default function Search() {
  return (
    <form className="search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Search Locations"
            className="form-control search-input"
            id="search-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3 p-0">
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Search"
            id="search-btn"
          />
        </div>
      </div>
    </form>
  );
}
