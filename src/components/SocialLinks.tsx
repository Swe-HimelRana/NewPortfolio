import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Github } from "lucide-react";
import { FcLinux } from "react-icons/fc";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/himelrana.SWE", icon: <Facebook /> },
    { name: "Twitter", link: "https://x.com/xhimelswe", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/bn/himelrana", icon: <Linkedin /> },
    { name: "External", link: "https://mirror.himelrana.com", icon: <FcLinux style={{ fontSize: '50px' }} /> },
    { name: "External", link: "https://github.com/Swe-HimelRana", icon: <Github /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
