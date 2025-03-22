import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Mulish } from 'next/font/google';
import classNames from "classnames";
import { ToastContainer } from "react-toastify";

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-roboto'
});

const mulishFont = Mulish({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-mulish'
});

export const metadata: Metadata = {
  title: {
    template: '%s | GSG News!',
    default: ''
  },
  description: 'GSG News, get latest news around the world'
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    // We used the .variable as class name (not .className) to pass the css variable :) 
    <html lang="en" className={classNames(mulishFont.variable, robotoFont.variable)}>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
