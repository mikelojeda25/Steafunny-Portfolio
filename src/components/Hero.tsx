import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 2.5 + delay,
    duration: 0.8,
    ease: "easeInOut" as const,
  },
})

const Divider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/60" />
    <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
    <div className="h-px w-6 bg-white/50" />
    <div className="w-3 h-3 rounded-full border-2 border-[#C9A84C] bg-transparent" />
    <div className="h-px w-6 bg-white/50" />
    <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/60" />
  </div>
)

export default function Home() {
  return (
    <section>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Steafunny Jean Nepangue Cotejo
          </h1>
          <p className="text-gray-500">Client Services Assistant</p>
          <button className="my-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            CONTACT ME
          </button>

          <p className="text-gray-500">
            IG: cotejosteafunny | Mobile: 09758558715 | Telegram: 09758558715 |
            Viber: 09758558715
          </p>
        </div>
      </div>
    </section>
  )
}
