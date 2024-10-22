import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import cplus from '../../../public/c++.jpeg'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import php from '../../../public/php.png'
import python from '../../../public/python.png'
import flutter from '../../../public/flutter.png'
import laravel from '../../../public/laravel.png'
import codeigniter from '../../../public/codeigniter.png'
import electronjs from '../../../public/electronjs.png'
import django from '../../../public/django.png'
import dart from '../../../public/dart.png'
import docker from '../../../public/docker.png'
import nginx from '../../../public/nginx.png'
import apache from '../../../public/apache.png'
import directadmin from '../../../public/directadmin.png'
import cpanel from '../../../public/cpanel.png'
import linux from '../../../public/linux.jpg'
import vuejs from '../../../public/vuejs.png'
import cicd from '../../../public/cicd.png'
import testing from '../../../public/testing.jpg'

const skillPage = () => {

  const language = [
    { alt: "Html", img: html },
    { alt: "Css", img: css },
    { alt: "Json", img: css },
    { alt: "Javascript", img: js },
    { alt: "Typescript", img: ts },
    { alt: "Python", img: python },
    { alt: "C++", img: cplus },
    { alt: "Dart", img: dart },
    { alt: "Php", img: php },
  ]
  const framework = [
    { alt: "React", img: react },
    { alt: "NextJS", img: nextjs },
    { alt: "VueJS", img: vuejs },
    { alt: "Scss", img: scss },
    { alt: "Tailwind", img: tailwind },
    { alt: "Github", img: github },
    { alt: "Flutter", img: flutter },
    { alt: "ElectronJS", img: electronjs },
    { alt: "Django", img: django },
    { alt: "Laravel", img: laravel },
    { alt: "Codeigniter", img: codeigniter },
  ]

  const deployment = [
    { alt: "Linux Server", img: linux },
    { alt: "Cpanel", img: cpanel },
    { alt: "Direct Admin", img: directadmin },
    { alt: "Docker", img: docker },
    { alt: "Nginx", img: nginx },
    { alt: "Apache", img: apache },
    { alt: "Software Testing", img: testing },
    { alt: "CI/CD", img: cicd },
    { alt: "Github", img: github },
    { alt: "Github Workflows", img: github },

  ]


  return (
    // SKILLS PAGE
    <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mt-[-50px] md:mt-16">
      {/* Left */}
      <div>
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden  ">
          <Badge className=" gap-2 ">
            <Lightbulb className="h-5 w-5" />
            My Job Experiences
          </Badge>
          <div className="flex flex-col gap-4">
            <Heading >Brief description fo my job experience</Heading>
            {/* Frist Job Experience */}
            {/* Name */}
            <div className="border shadow-lg border-gray-600 p-2 rounded">
              <p className="text-lg text-gray-500"><span className="text-2xl font-bold text-blue-600 dark:text-green-400">Software engineer </span><span className="text-md font-bold">@ Face Of Art Technologies, Dhaka, Bangladesh</span></p>
              <p className="text-sm text-gray-500 dark:text-gray-100">Jan 2021 – Feb 2022 </p>
            </div>
            {/* Tasks */}
            <div className="ml-8 p-4">
              <ul className="list-disc font-poppins text-base leading-relaxed dark:text-gray-300 text-lg">
                <li>Developed specialized software for customers within various entities, applying necessary regulatory and legal requirements.</li>
                <li>Solved many problems and added features. Bangladesh Standards and Testing Institution (BSTI).</li>
                <li>Developed Ecommerce web application (Flickere) using (NodeJS, PHP).</li>
                <li>Developed CNG Automation system by using python (Django).</li>
                <li>Taken Excellent performance bonus 2 times.</li>
                <li>Increased Salary multiple times by 25%.</li>

              </ul>
            </div>
            {/* Second Job Experience */}
            {/* Name */}
            <div className="border shadow-lg border-gray-600 p-2 rounded">
              <p className="text-lg text-gray-500"><span className="text-2xl font-bold text-blue-600 dark:text-green-400">Cyber Security specialist</span><span className="text-md font-bold"> @ Rapid Action Battalion, Dhaka, Bangladesh</span></p>
              <p className="text-sm text-gray-500 dark:text-gray-100">Jan 2021 – Feb 2022 </p>
            </div>
            {/* Tasks */}
            <div className="ml-8 p-4">
              <ul className="list-disc font-poppins text-base leading-relaxed dark:text-gray-300 text-lg">
                <li>Worked for national security.</li>
                <li>Identifying cyber-criminal by using (OSINT) and Military Equipment.</li>
                <li>Developed software for national security.</li>
                <li>aken performance bonus.</li>
                <li>Taken Excellent performance bonus 2 times.</li>
                <li>Worked with non-technical military person and trained them various Important technical task.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div>
        <div>
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden  ">
            <Badge className=" gap-2 ">
              <Lightbulb className="h-5 w-5" />
              My Skills
            </Badge>
            <div className="flex flex-col gap-3">
              <Heading >My Technical Experience/Skills.</Heading>

              <p className="font-poppins text-sm w-full ">
                A dedicated web developer with over two years of industry experience and an additional year of teaching experience.
                Skilled in building dynamic and responsive web applications, with a strong focus on delivering user-friendly and efficient solutions.
                Committed to applying best practices in development and design to create engaging digital experiences.
                Eager to contribute to innovative projects and collaborate with teams to achieve exceptional results.
              </p>


              <h1 className=" text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                Programming Languages
              </h1>
              <div className="w-[90%] h-fit flex-row flex-wrap flex  gap-3 px-4 items-center">
                <div className="border shadow-lg border-gray-600 p-2 rounded">
                  <SkillsFooter items={language} />
                </div>


              </div>


              <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                Framework and Libraries
              </h1>
              <div className="w-[90%] h-fit flex-row flex-wrap flex  gap-3 px-4 items-center">
                <div className="border shadow-lg border-gray-600 p-2 rounded">
                  <SkillsFooter items={framework} />
                </div>

              </div>
              <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                Deployments
              </h1>
              <div className="w-[90%] h-fit flex-row flex-wrap flex  gap-3 px-4 items-center">
                <div className="border shadow-lg border-gray-600 p-2 rounded">
                  <SkillsFooter items={deployment} />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default skillPage;
