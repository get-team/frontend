import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const AhevronDown = () => {
  return (
    <Svg position="absolute" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G id="chevron-down">
        <Path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M8.58547 10.9217C8.52469 10.9852 8.45171 11.0357 8.3709 11.0703C8.2897 11.1051 8.20229 11.123 8.11396 11.123C8.02563 11.123 7.93822 11.1051 7.85703 11.0703C7.77621 11.0357 7.70322 10.9852 7.64244 10.9216L2.32925 5.60846C2.06929 5.34849 2.06929 4.927 2.32925 4.66704C2.58922 4.40707 3.01071 4.40707 3.27067 4.66704L8.11397 9.51033L12.9579 4.66698C13.2179 4.40704 13.6394 4.40706 13.8993 4.66701C14.1593 4.92699 14.1593 5.3485 13.8993 5.60846L8.58547 10.9217Z" fill="#222222"/>
      </G>
    </Svg>
  );
}

export default AhevronDown;