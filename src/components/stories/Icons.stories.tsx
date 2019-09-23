import * as React from "react";
import { FaEnvelope, FaTwitter, FaFacebookF } from "react-icons/fa";

export default { title: "Icons" };

export const icons = () => {
  return (
    <ul>
      <li>
        <FaEnvelope />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaFacebookF />
      </li>
    </ul>
  );
};

export const coloredIcons = () => {
  return (
    <ul>
      <li>
        <FaEnvelope className="text-green" />
      </li>
      <li>
        <FaTwitter className="text-gray" />
      </li>
      <li>
        <FaFacebookF className="text-dark-blue" />
      </li>
    </ul>
  );
};
