import React from "react";
import StickyFooter from "react-sticky-footer";

const stickyFooter = () => {
  return (
    <div>
      <StickyFooter
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: "darkgray",
          padding: "2rem",
          width: "100%",
          textAline: "center"
        }}
        stickyStyles={{
          backgroundColor: "gray",
          padding: "2rem",
          width: "100%",
          textAline: "center"
        }}
      >
        Copyright &copy; January 2020: Ethiopian Christian Fellowship Church
        Kansas
      </StickyFooter>
    </div>
  );
};

export default stickyFooter;
