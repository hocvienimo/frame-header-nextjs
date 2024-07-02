import { LuCommand } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HotlineButton2 = ({
  text,
  containerStyles,
} : {
  text: string;
  containerStyles: string;
}) => {
  return (
    <Button>
      <Link href="tel:0902226119" 
      target="_blank"
      rel="nofollow"
      passHref 
      className="flex items-center text-white no-underline"
      >
        <LuCommand className="text-xl mr-1" />
        {text}
      </Link>
    </Button>
  );
};

export default HotlineButton2;