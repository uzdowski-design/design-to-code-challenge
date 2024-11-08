import ContentWrapper from './ContentWrapper';
import IconsSection from './NavigationSection/IconsSection';
import Logo from './NavigationSection/Logo';
import Navigation from './NavigationSection/Navigation';

const NavigationSection = () => {
  return (
    <ContentWrapper className=" h-[101px] flex justify-between items-center relative">
      <div className="flex-1">
        <Navigation />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>
      <div className="flex-1 flex justify-end">
        <IconsSection />
      </div>
    </ContentWrapper>
  );
};
export default NavigationSection;
