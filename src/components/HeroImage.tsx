import Image from "next/image"

const HeroImage = () => {
  return (
    <div className="relative w-full aspect-[3/4] max-w-[400px] overflow-hidden rounded-xl border-2 border-black dark:border-white shadow-2xl">
      <Image
        src="/hero.png"
        alt="hero"
        loading="eager"
        priority
        fill
        className="object-cover"
      />
    </div>
  )
}
export default HeroImage