import { Catamaran } from "next/font/google";

const font = Catamaran({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function RootLayout({ children }) {
  return (
    <main>
      <div className={`${font.className} mx-auto max-w-2xl main h-screen`}>
        {children}
      </div>
    </main>
  )
}
