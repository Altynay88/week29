import React from "react";
import "../components/comments.css";

function ListItems(props) {
  const { items = [] } = props;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item}>
        <p className="text">{item.text}</p>
      </div>
    );
  });

  return <ul className="items-list">{listItems}</ul>;
}

export default ListItems;
