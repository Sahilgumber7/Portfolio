import hero from '../public/heroimage.jpg'
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={hero}
          alt="hero"
          loading="eager"
          priority
          height={400}
          width={400}
        />
        </>
    )
}
export default HeroImage