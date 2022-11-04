import React from "react";
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import Socials from "../../components/Socials";

const index = () => {
  return (
    <>
      <Header />
      <Link id="twitter" redirect="_blank" link="https://twitter.com/0ejemeh">
        Twitter Link
      </Link>
      <Link id="btn__zuri" redirect="_blank" link="https://training.zuri.team/">
        Zuri Team
      </Link>
      <Link id="books" redirect="_blank" link="http://books.zuri.team/">
        Zuri Books
      </Link>

      <Link
        id="book__python"
        redirect="_blank"
        link="https://books.zuri.team/python-for-beginers?ref_id=divine-james"
      >
        Python Books
      </Link>
      <Link id="pitch" redirect="_blank" link="https://background.zuri.team/">
        Background Check for Coders
      </Link>
      <Link
        id="book__design"
        redirect="_blank"
        link="https://books.zuri.team/design-rules"
      >
        Design Books
      </Link>
      <Link id="contact" link="/contact">
        Contact Me
      </Link>
      <Socials />
    </>
  );
};

export default index;
