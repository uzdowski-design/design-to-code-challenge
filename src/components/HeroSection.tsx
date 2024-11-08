import { useRef } from 'react';
import Button from './Button';
import ContentWrapper from './ContentWrapper';
import VideoPlayer from './VideoPlayer';
import birdsVideo from '../assets/birds.mp4';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="h-[909px] relative">
      <video
        ref={videoRef}
        src={birdsVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={birdsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full absolute inset-0 bg-[#000]/40" />

      <ContentWrapper className="relative z-10 flex flex-col items-start justify-center gap-9 h-full pt-36">
        <Button
          title={'LOREM IPSUM'}
          variant="outline"
          className="text-[#FFF] font-medium text-xs py-[14px]"
        />
        <h1 className="text-gray-100 text-[45px]/[57px] font-semibold -tracking-[0.05em] max-w-[55%] mb-5">
          <span className="text_gradient">Lorem Ipsum Dolor Sit amet</span>
          <br />
          Donec cursus ligula diam, nec congue augue ultrices nec.
        </h1>

        {/* Video Player Controls */}
        <VideoPlayer videoRef={videoRef} />
      </ContentWrapper>
    </div>
  );
};
export default HeroSection;
