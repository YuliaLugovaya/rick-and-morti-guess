import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="footer-container">
            <span>© 2023 Rick and Morty: Guess the characters</span>
            <a className="grey-text text-lighten-4 right footer-link"
              href="https://en.wikipedia.org/wiki/Rick_and_Morty"
              target='blank'>
              Rick and Morty
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;