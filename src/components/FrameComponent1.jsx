import Button1 from "./Button1";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[99px] box-border max-w-full text-center text-sm text-gray-700 font-text-lg-semibold mq450:pb-16 mq450:box-border mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-8 box-border max-w-full z-[1] mq750:gap-4">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-12 max-w-full mq750:gap-6">
          <div className="w-[1024px] flex flex-col items-center justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-4 max-w-full mb-130">
              <div className="w-[365px] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-3xs bg-base-white border-gray-300 border-[1px] border-solid box-border hidden flex-row items-center justify-start py-0.5 pl-1 pr-2.5 gap-3 max-w-full mq450:flex-wrap">
                <div className="h-6 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-md bg-base-white border-gray-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-0.5 px-[7px] gap-1.5 whitespace-nowrap">
                  <img className="h-2 w-2 relative" alt="" />
                  <div className="self-stretch relative leading-[20px] font-medium">{`New `}</div>
                </div>
                <div className="h-5 flex flex-row items-center justify-start gap-1 text-left">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Check out the Job updates
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="m-0 self-stretch relative text-41xl tracking-[-0.02em] leading-[72px] font-semibold font-[inherit] text-gray-900 mq450:text-17xl mq450:leading-[43px] mq1025:text-29xl mq1025:leading-[58px]">
                We’ve really sped up our workflow
              </h1>
            </div>
            <div className="w-[786px] relative leading-[20px] text-gray-600 inline-block max-w-full" >
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <b className="font-text-lg-semibold">
                  We’ve just released a new update!
                </b>
                <span>
                  Check out the all new dashboard view. Pages and now load
                  faster.you can try us for free for 30 days.
                </span>
              </p>
              <p className="m-0">Join 4,000+ companies already growing</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-3 max-w-full mq750:flex-wrap">
            <Button1
              iconTrailing
              iconLeading
              arrowForward="/arrow-forward.svg"
              primaryLabel="Start Learning Today"
              // placeholder="pending_I1:6508;3466:447974"
            />
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
