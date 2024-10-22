import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";

import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Problem Solving" },
    { hobby: "Security Research" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* left */}
      <div className="col-span-3">
        <div className=" relative flex flex-col items-start gap-5 overflow-hidden mt-[-60px]">
          <Badge className=" gap-2">
            <User2 className="h-5 w-5" />
            About me
          </Badge>
          <div className="flex flex-col gap-3">

            <Heading>
              Software Engineer And Ethical <br /> Hacker.
            </Heading>

            <FramerWrapper y={0} x={100} className="my-4" >
              <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
                I am a passionate and skilled Software Engineer with 2 years of professional experience and 1 year of teaching expertise.
                I hold a Bachelor’s degree in Software Engineering from Daffodil International University. My technical strengths include Python, SQL, TypeScript, and full-stack development using Next.js. I have a strong command of data structures and algorithms, which allows me to build efficient and scalable solutions. With a solid foundation in software engineering principles and an interest in ethical hacking,
                I am looking to contribute my expertise to innovative projects and work in a collaborative environment that values growth and creativity.
              </p>
            </FramerWrapper>
          </div>

        </div>
        <div className="mt-4">
            <Card>
              <Table>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Popular Open Source Apps</TableHead>
                    <TableHead className="w-[300px]">Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">iCloud Notes For Linux and Windows</TableCell>

                    <TableCell className="font-medium">
                    <Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://snapcraft.io/icloud-notes">
                      https://snapcraft.io/icloud-notes
                    </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">iCloud Mail for Linux</TableCell>

                    <TableCell className="font-medium">
                    <Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://snapcraft.io/icloud-mail">
                    https://snapcraft.io/icloud-mail
                    </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Whatsapp for Linux</TableCell>

                    <TableCell className="font-medium">
                    <Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://snapcraft.io/whatsapp-linux-app">
                    https://snapcraft.io/whatsapp-linux-app
                    </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

          </div>
      </div>
      {/* right */}
      <div className="col-span-2">


        <div className="py-3 flex gap-2">

          <div>
            <Card>
              <Table>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Languages</TableHead>
                    <TableHead className="w-[300px]">Nationality</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bangla - Native, English - <span className="text-sm">IELTS 6.0</span></TableCell>

                    <TableCell className="font-medium">Bangladeshi</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

          </div>

        </div>
        <div className="py-3 flex gap-2">

          <div>
            <Card>
              <Table>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Certifications</TableHead>
                    <TableHead className="w-[400px]">Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Advance SQL, Hacker Rank</TableCell>

                    <TableCell className="font-medium">
                      <Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://www.hackerrank.com/certificates/8966e82020d6">
                       SQL-Advance-8966e82020d6
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

          </div>

        </div>
        <div className="py-3 flex gap-2">

          <div>
            <Card>
              <Table>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Profiles</TableHead>
                    <TableHead className="w-[400px]">Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Email</TableCell>
                    <TableCell className="font-medium"><Link href="mailto:contact&#64;himelrana&#46;com">contact&#64;himelrana&#46;com</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Blog</TableCell>
                    <TableCell className="font-medium"><Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://blog.himelrana.com">https://blog.himelrana.com</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Github</TableCell>
                    <TableCell className="font-medium"><Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://github.com/Swe-HimelRana">https://github.com/Swe-HimelRana</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Linux Mirror</TableCell>
                    <TableCell className="font-medium"><Link className="text-blue-600 dark:text-green-600" target="_blank" href="https://mirror.himelrana.com">https://mirror.himelrana.com</Link></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

          </div>

        </div>

      </div>
    </div>
  );
};

export default page;
