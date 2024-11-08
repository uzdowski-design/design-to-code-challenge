import IconLink from './IconLink';
import { CartIcon, ProfileIcon, SearchIcon } from './Icons';

const icons = [
  { component: CartIcon, href: '#', label: 'Cart' },
  { component: ProfileIcon, href: '#', label: 'Profile' },
  { component: SearchIcon, href: '#', label: 'Search' }
];

const IconsSection = () => {
  return (
    <div className="flex gap-[18px]">
      {icons.map((icon, index) => (
        <IconLink
          key={index}
          Icon={icon.component}
          href={icon.href}
          className="text-gray-500 hover:text-gray-700 rounded-full border border-gray-400 p-3 bg-gray-300 hover:bg-gray-200"
        />
      ))}
    </div>
  );
};
export default IconsSection;
