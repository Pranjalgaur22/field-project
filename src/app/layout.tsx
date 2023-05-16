import './globals.css'
import Navbar from './navbar'
// import { PT_Serif} from 'next/font/google'
// const font = PT_Serif({ subsets: ['latin'], weight: ["400", "700"] })
// import {Roboto_Slab} from 'next/font/google'
// const font = Roboto_Slab(
//   {
//     subsets: ['latin'],
//     weight: ["400", "700"]
//   }
// )

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
      <body className={` relative`} >
        <Navbar />

        {children}</body>
    </html>
  )
}
