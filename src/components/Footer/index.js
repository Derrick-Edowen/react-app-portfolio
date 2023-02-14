import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>* Derrick Edowen *</h2>
      <p>
        <ul>
          <a href="https://github.com/Derrick-Edowen">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://ca.linkedin.com/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
