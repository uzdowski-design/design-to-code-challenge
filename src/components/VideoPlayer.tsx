// src/components/VideoPlayer.tsx
import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, PauseIcon } from './NavigationSection/Icons';

interface VideoPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const sliderRef = useRef<HTMLInputElement>(null);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek video
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = Number(event.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Format time in mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial playing state
    setIsPlaying(!video.paused);

    // Event listeners
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdateEvent = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadataEvent = () => setDuration(video.duration);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdateEvent);
    video.addEventListener('loadedmetadata', handleLoadedMetadataEvent);

    // Cleanup
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdateEvent);
      video.removeEventListener('loadedmetadata', handleLoadedMetadataEvent);
    };
  }, [videoRef]);

  // Dynamic slider value update
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const percentage = duration ? (currentTime / duration) * 100 : 0;
    slider.style.background = `linear-gradient(to right, #CAEA71 0%, #CAEA71 ${percentage}%, #252525 ${percentage}%, #252525 100%)`;
  }, [currentTime, duration]);

  return (
    <div className="flex items-center space-x-6 w-full bg-[#030202]/30 rounded-[10px] border border-[#FFF]/[.20] py-[22px] px-8 ">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="p-[13px] bg-[#101215] rounded-full focus:outline-none"
        aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
      >
        {isPlaying ? (
          <PauseIcon className="w-[22px] h-[22px]" />
        ) : (
          <PlayIcon className="w-[22px] h-[22px]" />
        )}
      </button>

      {/* Timeline Slider */}
      <input
        ref={sliderRef}
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="w-full slider-lime custom-slider"
      />

      {/* Current Time Display */}
      <span className="text-[#C9c4C1] font-bold text-base">
        {formatTime(currentTime)}
      </span>
    </div>
  );
};

export default VideoPlayer;
