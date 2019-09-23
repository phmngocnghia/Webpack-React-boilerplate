import * as React from "react";

export default { title: "Styles" };

export const typos = () => {
  return (
    <ul>
      <li>body</li>
      <li>
        <h1>header</h1>
      </li>
      <li>
        <a href="#">link</a>
      </li>
    </ul>
  );
};

export const colors = () => {
  return (
    <ul>
      <li className="text-dark-blue">dark-blue</li>
      <li className="text-green">green</li>
      <li className="text-gray">gray</li>
    </ul>
  );
};

export const fonts = () => {
  return (
    <ul>
      <li className="font-heading">heading</li>
      <li className="font-body">body</li>
    </ul>
  );
};
