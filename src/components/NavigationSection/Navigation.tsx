import Button from '../Button';

const Navigation = () => {
  return (
    <nav className="flex gap-4">
      <Button title={'Home'} isActive={true} />
      <Button title={'About'} />
      <Button title={'Products'} />
    </nav>
  );
};
export default Navigation;
