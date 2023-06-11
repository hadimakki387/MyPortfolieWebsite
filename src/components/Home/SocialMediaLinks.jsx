import React from "react";

function SocialMediaLinks() {
  return (
    <div className="flex gap-2 SocialMediaLinksDiv">
      <a
        className="socialMediaLinks"
        href="https://github.com/hadimakki387"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        className="socialMediaLinks"
        href="https://www.instagram.com/hadi_mk00/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        className="socialMediaLinks"
        href="https://www.linkedin.com/in/hadi-makki1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        className="socialMediaLinks"
        href="https://www.facebook.com/rohjxjxjnzkdi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-facebook-f"></i>
      </a>
    </div>
  );
}

export default SocialMediaLinks;
