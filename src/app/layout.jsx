import localFont from 'next/font/local';
import "./globals.css";

//https://medium.com/@a.pirus/simplifying-multiple-fonts-styling-in-next-js-13-with-css-variables-cb57e9707693
// Font files can be colocated inside of `app`
const generalSans = localFont({
  src: '../fonts/body/GeneralSans-Variable.woff2',
  display: 'swap',
  variable: '--font-generalSans'
})
const satoshi = localFont({
  src: '../fonts/header/Satoshi-Variable.woff2',
  display: 'swap',
  variable: '--font-satoshi'
})
export const metadata = {
  title: "Rayyan | Web Designer",
  description: "Designing and developing clean websites for people.",
  openGraph: {
    title: "Rayyan | Web Designer",
    description: "Designing and developing clean websites for people.",
    url: 'https://rayyanekaputra.vercel.app',
    siteName: 'Rayyan Eka Putra',
    images: [
      {
        url: '/opengraph-image.png', // Must be an absolute URL
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// favicon itu pake icon.ico sekarang... liat referensi kedua
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
// https://stackoverflow.com/questions/61836949/why-is-my-favicon-not-working-in-my-next-js-app

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${generalSans.variable}`}>{children}</body>
    </html>
  );
}
