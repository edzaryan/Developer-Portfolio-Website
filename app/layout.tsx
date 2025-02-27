import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import ActiveSectionContextProvider from "@/context/active-section-context"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Edgar | Personal Portfolio",
  description: "A full-stack (Next.js) developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <>
          <html lang="en" className="!scroll-smooth">
            <body className={`${geistSans.variable} bg-gray-50 text-gray-950 pt-44 select-none`}>
              <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] w-[31.25rem] h-[31.25rem]
                rounded-full blur-[10rem] sm:w-[68.75rem]"/>
              <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] w-[50rem] h-[31.25rem]
                rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"/>

              <ActiveSectionContextProvider>
                <Header />
                {children}
              </ActiveSectionContextProvider>
            </body>
          </html>
      </>
  )
}
