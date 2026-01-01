'use client';

import Image from 'next/image';
import styles from './theme-button.module.scss';
import { useEffect } from 'react';
import moonIcon from '@/assets/moon.webp';
import sunIcon from '@/assets/sun.webp';
import clsx from 'clsx';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

type Theme = 'light' | 'dark';

const ThemeButton = () => {
   const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

   useEffect(() => {
      document.body.classList.toggle('dark', theme === 'dark');
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
   };

   const isDark = theme === 'dark';

   return (
      <button
         className={clsx(styles.themeBtn, isDark && styles.darkTheme)}
         onClick={toggleTheme}
      >
         {isDark ? (
            <Image
               src={moonIcon}
               alt="dark"
               width={18}
               height={18}
               className={styles.themeImage}
            />
         ) : (
            <Image
               src={sunIcon}
               alt="light"
               width={18}
               height={18}
               className={styles.themeImage}
            />
         )}
      </button>
   );
};

export default ThemeButton;
