import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button is imported from the correct path

interface LabelButtonTagProps {
  text: string;
  icon: string; // Assuming icons is a string representing the icon component or element
}

const LabelButtonTag: React.FC<LabelButtonTagProps> = ({ text, icon }) => {
  return (
    <Button variant="secondary" size="xs" className="text-md font-light cursor-text capitalize">
      {React.createElement(icon, { className: 'text-accent mr-1' })} {/* Dynamically create the icon component */}
      {text} {/* Display the text content */}
    </Button>
  );
};

export default LabelButtonTag;
