import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2023 Origin of Civilization. All Right Reserved.</div>
      <div className="socials">
        <ul>
        {/* <FontAwesomeIcon icon="fa-brands fa-github" spin style={{color: "#041025",}} /> */}
          <li><a href="https://github.com/differs" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.youtube.com/@OriginofCivilization/playlists" target='_blank' rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://link.civi.ink" target='_blank' rel="noreferrer"><i class="fa-brands fa-weixin"></i></a></li>
          <li><a href="https://t.me/Origin_of_Civilization" target='_blank' rel="noreferrer"><i className="fab fa-telegram"></i></a></li>
          <li><a href="https://twitter.com/Origin_Of_Civil" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;