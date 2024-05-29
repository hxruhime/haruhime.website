import { NextUIProvider } from "@nextui-org/react";

import type { Metadata }  from 'next'
import      { Inter    }  from 'next/font/google'

import Header             from "@container/header/Header";
import Footer             from "@container/footer/Footer";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title       : 'haruhime.website',
  description : 'personal developer portfolio',
}


// RootLayout component
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <NextUIProvider>
            <div>
                <Header/>
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </NextUIProvider>
        </body>
        </html>
    )
}

// path: src/app/layout.tsx
