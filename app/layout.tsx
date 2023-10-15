import localFont from 'next/font/local';

import { Typography } from '@/src/components';

import '@/styles/globals.scss';
import Link from 'next/link';

const seo = {
  title: '⭐ Star Wars app ⭐',
  description: 'The return of jedi'
};

const myFont = localFont({
  src: '../assets/fonts/starjedi/star-jedi.ttf'
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <title>{seo.title}</title>
      <meta content={seo.description} name='description' />
      <meta content='width=device-width,initial-scale=1' name='viewport' />
    </head>
    <body className={myFont.className}>
      <div className='stars' />
      <div className='stars2' />
      <div className='stars3' />

      <header className='header'>
        <Link href='/'>
          <h1 className='header__title'>Star wars wiki</h1>
        </Link>
      </header>

      {children}
    </body>
  </html>
);

export default RootLayout;
