import type { Metadata } from "next";
import { User, getUserInfo, UserProvider } from "@/entities/user";
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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider initialUser={user}>
          {children}
        </UserProvider>
        <div className="background"></div>
      </body>
    </html>
  );
}
