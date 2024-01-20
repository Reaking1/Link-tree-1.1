
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import Navbar from './componets/page';
import Main from './links/page';

interface RootLayoutProps {
  children: React.ReactNode;
}

const pressStart2P = Press_Start_2P({
  weight: '400' as const, // You might need to adjust the weight based on your requirements
  style: 'normal' as const, // You can adjust the style if needed
  display: 'swap',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Linktree',
  description: 'A tree to my links',
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className={pressStart2P.className}>
      <head>
        {/* Include the font styles in the head */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Press+Start+2P:wght@400&display=swap`}
        />
      </head>
      <body>
        {children}
        <Navbar />
        <Main />
      </body>
    </html>
  );
}
