interface IconLinkProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
  className?: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  Icon,
  href = '#',
  className = ''
}: IconLinkProps) => {
  return (
    <a href={href} className={`flex items-center justify-center ${className}`}>
      <Icon className="w-[18px] h-[18px]" />
    </a>
  );
};
export default IconLink;
