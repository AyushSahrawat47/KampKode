import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Desktop = () => {
  return (
    <div className="w-full relative bg-base-white overflow-hidden flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-[276px] leading-[normal] tracking-[normal] mq450:gap-[69px] mq750:gap-[138px]">
      <FrameComponent />
      <FrameComponent1 />
      <section className="self-stretch h-[807px] flex flex-col items-end justify-start py-0 px-0 box-border">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-24@2x.png"
        />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1830px]"
          alt=""
          src="/bg.svg"
        />
      </section>
    </div>
  );
};

export default Desktop;
