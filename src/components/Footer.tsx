import ContentWrapper from './ContentWrapper';
import LogoWithName from './Footer/LogoWithName';
import GradientBar from './GradientBar';

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <GradientBar />
      <ContentWrapper className="h-[113px] flex justify-between items-center relative gap-[76px] ">
        <LogoWithName />
        <p className="tracking-[0.07em] text-[11px] text-gray-500">
          © 2024 <strong className="font-bold">Brand Name</strong> All rights
          reserved. Unauthorized use or copying of this brand is strictly
          prohibited. No part of this website may be reproduced, distributed, or
          transmitted in any form or by any means, including photocopying,
          recording, or other electronic or mechanical methods, without the
          prior written permission of{' '}
          <strong className="font-bold">Brand Name</strong>, except in the case
          of brief quotations embodied in critical reviews and certain other
          non-commercial uses permitted by copyright law.
        </p>
      </ContentWrapper>
    </footer>
  );
};
export default Footer;
