import BoxReveal from "@/components/ui/box-reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { FcLinux } from "react-icons/fc";


export async function InfoBox() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#0bb044"} duration={0.5}>
        <div>
          <div className="md:hidden flex justify-center items-center p-4 gap-3 ml-[-40px]">
            <ThemeToggle/>
            
            <Link href="https://mirror.himelrana.com" className="btn rounded-full border border-gray-400" target="blank"> <FcLinux style={{ fontSize: '35px' }}/> </Link>
          
          </div>
          <p className="text-[3.5rem] font-semibold">
            Hello I am, Himel<span className="text-blue-800 font-bold dark:text-[#0bb044]">.</span>
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#0bb044"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Software Engineer and
          <span className="text-blue-800 dark:text-[#0bb044] font-bold ml-2">Ethical Hacker</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#0bb044"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; I am other designation
            <span className="font-semibold text-blue-800 font-bold dark:text-[#0bb044]"> DevOps Engineer</span>,
            <span className="font-semibold text-blue-800 font-bold dark:text-[#0bb044]"> Cyber Security Expert</span>,
            and
            <span className="font-semibold text-blue-800 font-bold dark:text-[#0bb044] ml-2">Linux Administrator </span>
            . <br />

          </p>
        </div>
      </BoxReveal>

    </div>
  );
}
