import React from "react";
import StickyFooter from "react-sticky-footer";

const stickyFooter = () => {
  return (
    <div>
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "#b0afab",
          padding: "3rem",
          width: "100%",
          textAline: "center"
        }}
        stickyStyles={{
          backgroundColor: "#8c8a80",
          padding: "2rem",
          width: "100%",
          textAline: "center "
        }}
      >
        Copyright &copy; January 2020: Ethiopian Christian Fellowship Church
        Kansas
      </StickyFooter>
    </div>
  );
};

export default stickyFooter;
