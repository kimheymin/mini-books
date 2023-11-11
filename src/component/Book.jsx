import React from "react";

export default function Book({ book : {thumbnail, title, publisher, isbn} }) {

  return (
    <div>
      <img src={thumbnail} alt={isbn} />
      <p>{title}</p>
      <span>{publisher}</span>
    </div>
  );
}