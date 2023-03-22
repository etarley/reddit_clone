import { Open_Sans } from 'next/font/google';
import { AppProvider } from './providers';
import Navbar from './Navbar/Navbar';
import './global.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Reddit',
  description: 'The front page of the internet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={openSans.className}>
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
