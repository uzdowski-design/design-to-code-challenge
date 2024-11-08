interface ButtonProps {
  title: string;
  isActive?: boolean;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

const Button = ({
  title,
  isActive = false,
  className = '',
  variant = 'default'
}: ButtonProps) => {
  const buttonVariants = {
    default: `font-medium border border-gray-400 rounded-md py-2 px-[26px] text-sm ${
      isActive ? 'bg-gray-200' : 'bg-gray-300 hover:bg-gray-200'
    }`,
    outline: `bg-gray-300/[.19] text-xs font-medium px-5 rounded-xl border border-gray-700`,
    ghost: `text-sm font-semibold underline underline-offset-[3px] font-inter text-gray-800 tracking-[0.07em]`
  };
  return (
    <button
      className={`uppercase tracking-[0.07em] ${buttonVariants[variant]} ${className}`}
    >
      {title}
    </button>
  );
};
export default Button;
