const ContentWrapper = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1337px] px-2 mx-auto ${className}`}>{children}</div>
  );
};
export default ContentWrapper;
