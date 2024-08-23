import PropTypes from "prop-types";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[137px] flex flex-row items-start justify-start ${className}`}
    >
      <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-kampkodetech-cornflower-blue border-plum border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-3.5 px-[26px] gap-3">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
        />
        <div className="relative text-lg leading-[28px] font-semibold font-text-lg-semibold text-base-white text-left inline-block min-w-[82px]">
          Join Now
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
