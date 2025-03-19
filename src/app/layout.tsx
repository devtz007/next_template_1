/* src/app/layout.tsx */
import StoreProvider from '@/redux/provider';

/* Import global stylesheet */
import '@/styles/globals.scss';

/* Import Roboto font from Google Fonts with specific configurations */
import { Roboto } from 'next/font/google';

// Configuring the Roboto font with desired weights, styles, subsets, and display options
const roboto = Roboto({
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
});

/* RootLayout component defines the layout structure of the app */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <html lang="en" className={roboto.className}>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
