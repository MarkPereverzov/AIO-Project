import type { Metadata } from "next";
import { User, getUserInfo, UserProvider } from "@/entities/user";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localFont from "next/font/local";
import "@/shared/styles/globals.css";

const geistSans = localFont({
  src: "../shared/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../shared/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "All In One",
  description: "AIO-project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = await getUserInfo();
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider initialUser={user}>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
