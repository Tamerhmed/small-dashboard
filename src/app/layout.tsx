import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Dashboard app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='no-scrollbar'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
         attribute="class"
         defaultTheme="light"
         enableSystem={true}
         storageKey='dashboard-theme'
         disableTransitionOnChange
        > */}
        <Navbar />
        <div className='flex'>
          <div className='hidden md:block w-[300px] overflow-y-hidden '>
            {/* <Sidebar /> */}
          </div>
          <div className='px-6 py-6 w-full md:max-w-[940px] h-[100vh] overflow-y-scroll no-scrollbar'>
            {children}
          </div>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
