import React from "react";
import { Button } from "antd";

const ButtonOutline = ({ children }:any) => {
  return (
    <Button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </Button>
  );
};

export default ButtonOutline;
