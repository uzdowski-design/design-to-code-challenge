import GradientBar from './GradientBar';

const AdvertBar = () => {
  return (
    <div className="w-full">
      <div className="h-[62px] w-full flex justify-center items-center text_advert_bar tracking-[0.07em]">
        NEW CUSTOMERS GET 15% OFF! USE CODE
        <span className="text-[#404F84] ml-1"> WELCOME15</span>
      </div>
      <GradientBar />
    </div>
  );
};
export default AdvertBar;
