'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '@/lib/hooks/useDebounce';

export default function SearchBar() {
   const [input, setInput] = useState('');
   const debouncedInput = useDebounce(input, 300);
   const router = useRouter();
   const hasInteracted = useRef(false);

   useEffect(() => {
      if (!hasInteracted.current) return;

      if (debouncedInput.trim()) {
         router.push(`/search/${encodeURIComponent(debouncedInput)}`);
      } else {
         router.push('/search');
      }
   }, [debouncedInput, router]);

   return (
      <div className="w-100 h-full relative max-sm:w-full">
         <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-xl max-sm:text-base text-gray-400"
         />

         <input
            type="text"
            placeholder="What do you want to play?"
            value={input}
            onChange={(e) => {
               hasInteracted.current = true;
               setInput(e.target.value);
            }}
            className="w-full block h-full px-12 max-sm:px-10 rounded-3xl dark:bg-[#2A2A2A] border dark:border-transparent border-gray-400 outline-none dark:focus:border-white"
         />

         {input.length > 0 && (
            <button
               onClick={() => {
                  setInput('');
                  router.push('/search');
               }}
               className="absolute top-1/2 -translate-y-1/2 right-4"
            >
               <FontAwesomeIcon
                  icon={faXmark}
                  className="text-xl max-sm:text-base text-gray-400 hover:text-gray-300"
               />
            </button>
         )}
      </div>
   );
}
