import logo from '@/assets/logo.png';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import ThemeButton from './ThemeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
   return (
      <header className="z-(--header-index) px-4 max-sm:px-1.5 py-2 h-(--header-height) bg-theme flex justify-between items-center gap-3 max-sm:gap-1 overflow-hidden fixed top-0 left-0 w-full">
         <Image src={logo} alt="logo" className="h-4/5 w-auto" />
         <div className="h-full flex items-center gap-2 max-sm:flex-row-reverse max-sm:w-full max-sm:justify-between max-sm:gap-1">
            <Link
               href="/"
               className="group text-white dark:bg-[#2A2A2A] border-2 border-gray-400 dark:border-none h-full aspect-square flex items-center justify-center rounded-full hover:scale-102"
            >
               <FontAwesomeIcon
                  icon={faHouse}
                  className="dark:group-hover:text-white text-base text-gray-400"
               />
            </Link>
            <SearchBar />
         </div>
         <ThemeButton />
      </header>
   );
}
