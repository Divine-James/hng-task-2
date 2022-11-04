import React from "react";
import "./socials.css";

function Socials() {
  return (
    <section className="socials">
      <a href="https://slack.com/Divine-james" className="slack">
        <img src="img/slacklogo.png" alt="slack" className="slack"></img>
      </a>
      <a href="https://github.com/Divine-James" className="github">
        <img src="img/icon.svg" alt="github" className="github"></img>
      </a>
    </section>
  );
}
export default Socials;
/*
import React from 'react';
import './socials.css';

const index = () => {
  
  return (
      <section className="socials">
          <a href="https://slack.com/dprincecoder" className="slack">
              <img src="slack-icon.svg" alt="" className="slack-icon" />
          </a>
          <a href="https://github.com/dprincecoder" className="github">
              <img src="github-icon.svg" alt="" className="slack-icon" />
          </a>
    </section>
  )
}

export default index
*/
