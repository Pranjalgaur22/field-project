// import Image from 'next/image'
import { PT_Serif} from 'next/font/google'
import Navbar from './navbar'

const font = PT_Serif({ subsets: ['latin'], weight: ["400", "700"] })

export default function Home() {
  return (
    <main className={font.className}>
      <Navbar />
    </main>
  )
}
