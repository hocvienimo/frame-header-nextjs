import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdContactSupport } from "react-icons/md";

const BtnContact = ({
  text,
  containerStyles,
} : {
  text: string;
  containerStyles: string;
}) => {
  return (
    <Button className={`${containerStyles} relative group overflow-hidden`}>
      <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-accent transiton-all duration-300 group-hover:h-64 group-hover:-translate-y-10'></span>
      <Link href="/contact"
      rel="nofollow"
      passHref
      >
        <span className='flex items-center text-white no-underline ease relative text-white transition duration-300 group-hover:text-white'>
          <MdContactSupport className="text-2xl mr-1 text-accent" />
          {text}
        </span>
      </Link>
    </Button>
  );
};

export default BtnContact;