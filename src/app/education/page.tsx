import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import Link from "next/link";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden mt-[-260px] md:mt-[0px]">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            May 2016 - Apr 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl py-2">
              <span>Bachelor of Science in Software Engineering,</span> <br />
              <span className="text-gray-700 text-[18px]">Daffodil International University</span>,
              <span className="text-sm text-gray-400"> Dhaka Bangladesh</span>
            </div>
            <div className="font-poppins text-base w-full text-primary  max-sm:text-xs">
              <p className="text-gray-600">Ex: Physics | Calculous | Numerical Analysis | Statistics</p>
              <p className="text-gray-600">Ex: Data Stucture | Algorithms | System Design | Artificial Intelegence | Operating System | Digital Electronics</p>
              <p className="text-gray-600">Ex: And Many more ..</p>

              <Link className="mt-2 text-blue-600 dark:text-green-600" href="https://www.daffodilvarsity.edu.bd/">www.daffodilvarsity.edu.bd</Link>
            </div>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Sep 2013 - Dec 2015
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl py-2">
              <span>Higher Secondary Certificate (HSC),</span> <br />
              <span className="text-gray-700 text-[18px]">Tongi Government College</span>,
              <span className="text-sm text-gray-400"> Dhaka Bangladesh</span>
            </div>
            <div className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              <p className="text-gray-600">Ex: Mathematics | Biology | Physics | Chemistry | Social Science | Computer</p>
              <Link className="text-blue-600 dark:text-green-600" href="https://tgco.edu.bd/">tgco.edu.bd</Link>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
