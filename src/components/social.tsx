import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDev,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="absolute md:fixed left-0 bottom-0">
      <div className="flex flex-col p-10">
        <a
          href="https://github.com/albingroen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-white text-xl opacity-50 hover:opacity-100">
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </a>
        <a
          href="https://dev.to/albingroen"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4"
        >
          <i className="text-white text-xl opacity-50 hover:opacity-100">
            <FontAwesomeIcon icon={faDev} />
          </i>
        </a>
        <a
          href="https://twitter.com/albingroen"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4"
        >
          <i className="text-white text-xl opacity-50 hover:opacity-100">
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </a>
        <a
          href="https://linkedin.com/in/albingroen"
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4"
        >
          <i className="text-white text-xl opacity-50 hover:opacity-100">
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
        </a>
      </div>
    </div>
  );
}
