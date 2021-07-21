import React from "react";

function TheFooter() {
  return (
    <div id="footer">
      <div className="container">
        <ul className="contact">
          <li>
            <a
              href="https://www.facebook.com/adrian.aristimuno.3/"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              alt="twitter"
              href="https://twitter.com/AdrianJotaa"
              target="_blank"
              rel="noreferrer noopener"
              title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adrianjotaa/"
              target="_blank"
              rel="noreferrer noopener"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <span>
          Made with React<i className="fab fa-react"></i> by AJota
        </span>
        <div className="credits">
          <a href="https://www.themoviedb.org/" target="blank" title="TMDb">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="The Movie Database"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TheFooter;
