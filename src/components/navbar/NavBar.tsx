import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Image
        src={"/images/logo.png"}
        alt={"Trello Logo"}
        width={300}
        height={100}
        priority
      />
      <h1>NavBar</h1>
    </nav>
  );
};

export default NavBar;
