import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { GrDocumentText } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/james-n-25a967193/" alt="Linkedin">
    <BsLinkedin />
    </a>
    </div>
    <div>
      <a href="https://github.com/jamesN1307" alt="Github">
      <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/jtnguyen111/" alt="Instagram">
      <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1AHQFVAtF9VVoXNv-_mr61UoJtNJgbU5l/view?usp=sharing" alt="Resume">
      <GrDocumentText />
      </a>
    </div>
  </div>
);

export default SocialMedia;