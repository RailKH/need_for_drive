import React from "react";
import classnames from "classnames";

export default function Pagination({
  postsPerPage,
  postsCount,
  changePage,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.floor(postsCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li
            key={number}
            className={classnames("page-item", {
              active: number === currentPage,
            })}>
            <span className="page-link" onClick={() => changePage(number)}>
              {number}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
