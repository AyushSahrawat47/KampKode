import { useMemo } from "react";
import PropTypes from "prop-types";

const DropdownHeaderNavigationTri = ({
  className = "",
  placeholder,
  text,
  propMinWidth,
}) => {
  const textStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-col items-center justify-start py-1 px-0 text-left text-base text-grays-black font-text-lg-semibold ${className}`}
    >
      <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={placeholder}
        />
        <a
          className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[82px]"
          style={textStyle}
        >
          {text}
        </a>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/chevrondown.svg"
        />
      </div>
    </div>
  );
};

DropdownHeaderNavigationTri.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default DropdownHeaderNavigationTri;
