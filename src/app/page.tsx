

import SocialLinks from "@/components/SocialLinks";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { AnimatedListBox } from "@/components/AnimatedListBox";
import { InfoBox } from "@/components/InfoBox";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Download,  } from 'lucide-react';
import Link from "next/link";

export const siteConfig = {
  name: "Himel Rana - Software Engineer",
  description: "Software Engineer and Ethical Hacker",
  ogImage: "https://himelrana.com/og-image.png",
  url: "https://himelrana.com",
}
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" mt-[-250px] h-full w-auto md:w-[33%] flex flex-col justify-start gap-4" y={0} x={-100}>
        <div className="ml-8">
          {/* <HeroTexts /> */}
          <InfoBox/>
          <div className="h-fit w-full p-4 flex gap-3">
            <SocialLinks />
          </div>
        </div>
        <Link href="https://files.himelrana.com/profession/resume.pdf"><RainbowButton className="w-[250px] ml-6"><div className="flex"><Download className="mr-2"/> Download Resume</div></RainbowButton></Link>
        {/* <DownLoadResumeBtn /> */}
      </FramerWrapper>
      {/* CENTER */}
      <FramerWrapper className="h-full w-[33%] relative hidden md:block" y={0} >

        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* RIGHT SIDE image  */}
      <FramerWrapper className="h-full w-[33%] relative hidden md:block" y={0} x={100}>
        <AnimatedListBox />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <div className="hidden md:block">
      <GithubBtn />
      </div>
    </>
  );
}
