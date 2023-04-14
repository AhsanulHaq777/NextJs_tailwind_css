import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Home from '@/components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <Home />
  )
}
