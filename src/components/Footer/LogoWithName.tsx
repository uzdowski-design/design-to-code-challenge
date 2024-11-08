import Logo from '../NavigationSection/Logo';

const LogoWithName = () => {
  return (
    <div className="flex items-center gap-4">
      <Logo />
      <h2 className="font-semibold whitespace-nowrap w-fit text-2xl tracking-[0.07em] text-gray-700">
        Brand Name
      </h2>
    </div>
  );
};
export default LogoWithName;
