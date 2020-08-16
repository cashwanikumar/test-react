import React from "react";
import {
  Navbar,
  NavbarBrand,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavbarText,
  Collapse,
} from "reactstrap";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./index.scss";

const TopBar = () => {
  return (
    <Navbar light expand="md" className="nav-item">
      <InputGroup className="search">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <FiSearch />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search..." />
      </InputGroup>
      <div className="mr-4">
        <div>
          <strong>Cody Simmons</strong>
        </div>
        <span>Lecturer</span>
      </div>
      <img
        src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
        width="72"
        height="72"
        className="mr-2"
      />
      <div
        className="border-right"
        style={{
          height: "60px",
          marginRight: "27px",
        }}
      >
        <FiChevronDown
          className="fs-2 mr-3 mt-3"
        />
      </div>
      <IoMdNotificationsOutline className="fs-2" />
    </Navbar>
  );
};

export default TopBar;
