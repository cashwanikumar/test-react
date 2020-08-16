import React from "react";
import { SpinnerIcon } from "react-line-awesome";
import { FaSpinner } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

import "./index.scss";

const Loading = ({ active }) => (
  <div className="loading-div">
    <div id="spinner" style={{ display: active ? "block" : "none" }}>
      <div id="status">
        <ClipLoader
          css={{
            display: "block",
            margin: "30px auto",
            borderColor: "#FFFFFF",
          }}
          size={50}
          color={"#FFFFFF"}
          loading={active}
        />
      </div>
    </div>
  </div>
);

export default Loading;
