import Button from './Button';
import ContentWrapper from './ContentWrapper';

const ExampleSection = () => {
  return (
    <ContentWrapper className="flex flex-col justify-center items-center my-[64px] gap-7 mb-">
      <Button
        title={'EXAMPLE SECTION'}
        className="py-[18px]"
        variant="outline"
      />
      <p className="font-medium -tracking-[0.05em] text-[32px] text-center ">
        Lorem{' '}
        <span className="font-semibold text_gradient">
          ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
        </span>{' '}
        massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales
        eros mollis eget. Morbi vitae libero in nunc sodales.
      </p>
      <Button title={'SEE MORE'} className="mt-[18px]" variant="ghost" />
    </ContentWrapper>
  );
};
export default ExampleSection;
