import DropdownHeaderNavigationTri from "./DropdownHeaderNavigationTri";
import NavigationActions from "./NavigationActions";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[35px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 shadow-[2px_4px_20px_rgba(125,_110,_235,_0.5)] [backdrop-filter:blur(10px)] rounded-xl bg-kampkodetech-alto-1 flex flex-row flex-wrap items-center justify-between py-2.5 px-10 box-border max-w-full z-[1] text-center text-21xl text-kampkodetech-cornflower-blue font-kampkodetech-poppins-medium-16">
        <div className="w-[200px] flex flex-col items-start justify-start gap-2.5">
          <a className="[text-decoration:none] w-[158px] h-[60px] relative flex items-center whitespace-nowrap text-[inherit]">
            <span className="[line-break:anywhere] w-full">
              <span>N</span>
              <span className="text-grays-black">AV</span>
              <span>B</span>
              <span className="text-grays-black">AR</span>
            </span>
          </a>
          <img
            className="w-[158px] h-[41.6px] relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/kodekamp-transparent-header624670349ceb3c775b20png@2x.png"
          />
        </div>
        <div className="w-[894px] flex flex-row flex-wrap items-center justify-between py-0 pl-0 pr-0.5 box-border gap-5 max-w-full text-base text-kampkodetech-tolopea">
          <div className="w-[404px] flex flex-col items-start justify-start max-w-full mq1100:w-0">
            <div className="w-[70px] hidden flex-col items-center justify-start pt-px px-0 pb-[3px] box-border">
              <div className="self-stretch h-6 relative flex items-center justify-center">
                Features
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-5 text-left text-grays-black font-text-lg-semibold mq1100:hidden">
              <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[46px]">
                  Home
                </a>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
              <DropdownHeaderNavigationTri
                placeholder="pending_I1:23100;1288:1085;3468:423435"
                text="Products"
                propMinWidth="70px"
              />
              <DropdownHeaderNavigationTri
                placeholder="pending_I1:23101;1288:1085;3468:423435"
                text="Resources"
              />
              <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[55px]">
                  Pricing
                </a>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-0 pl-10 pr-0">
            <div className="w-[67px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-px px-0 pb-[3px]">
                <div className="self-stretch relative">Services</div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-0 pl-10 pr-0">
            <div className="w-[72px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-px px-0 pb-[3px]">
                <div className="self-stretch relative whitespace-nowrap">
                  About Us
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-0 pl-10 pr-0">
            <div className="w-[89px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-px px-0 pb-[3px]">
                <div className="self-stretch relative whitespace-nowrap">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-0 pl-10 pr-0 text-base-white">
            <div className="w-[83px] flex flex-col items-center justify-start p-2 box-border">
              <div className="self-stretch rounded bg-kampkodetech-cornflower-blue flex flex-row items-start justify-center py-[7px] px-2.5 whitespace-nowrap">
                <div className="flex-1 relative font-medium">Log in</div>
              </div>
            </div>
          </div>
          <NavigationActions />
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
