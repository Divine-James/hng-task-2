import React from "react";
import Header from "../../components/Header";
import LinkTag from "../../components/LinkTag";
import Socials from "../../components/Socials";

const index = () => {
  return (
    <>
      <Header />
      <LinkTag
        id="twitter"
        redirect="_blank"
        link="https://twitter.com/0ejemeh"
      >
        Twitter Link
      </LinkTag>
      <LinkTag
        id="btn__zuri"
        redirect="_blank"
        link="https://training.zuri.team/"
      >
        Zuri Team
      </LinkTag>
      <LinkTag id="books" redirect="_blank" link="http://books.zuri.team/">
        Zuri Books
      </LinkTag>

      <LinkTag
        id="book__python"
        redirect="_blank"
        link="https://books.zuri.team/python-for-beginers?ref_id=divine-james"
      >
        Python Books
      </LinkTag>
      <LinkTag
        id="pitch"
        redirect="_blank"
        link="https://background.zuri.team/"
      >
        Background Check for Coders
      </LinkTag>
      <LinkTag
        id="book__design"
        redirect="_blank"
        link="https://books.zuri.team/design-rules"
      >
        Design Books
      </LinkTag>
      <LinkTag id="contact" link="/contact">
        Contact Me
      </LinkTag>
      <Socials />
    </>
  );
};

export default index;
