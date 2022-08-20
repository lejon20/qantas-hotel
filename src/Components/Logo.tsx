import logo from "../qantas-logo.png";
import React from "react";

/**
 * more variant could be added and they would use different source
 */
export enum LogoSize {
  small,
}

interface LogoProps {
  size: LogoSize;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  const sizeToPx = (size: LogoSize) => {
    switch (size) {
      case LogoSize.small:
        return "200px";
    }
  };

  return <img src={logo} alt="Qantas Logo" width={sizeToPx(size)} />;
};

export default Logo;
