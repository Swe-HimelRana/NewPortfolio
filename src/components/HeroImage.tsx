import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={500}
        width={500}
      />
    </>
  )
}
export default HeroImage