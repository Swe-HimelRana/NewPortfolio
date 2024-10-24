// src/app/not-found.tsx
import FramerWrapper from '@/components/animation/FramerWrapper';
import { Button } from '@/components/ui/button';
import { CatIcon, CloudSunIcon, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden mt-[-110px]">

            <div className="flex flex-col gap-3 w-full">

                <div className="h-auto w-full flex justify-center items-center">
                    <FramerWrapper y={0} scale={0.8}>
                        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                            <div className="mb-8">
                                <CloudSunIcon className="text-[#F9A826] text-6xl" />
                            </div>
                            <h1 className="mb-2 text-6xl font-bold text-gray-800">404</h1>
                            <p className="mb-4 text-2xl font-light text-gray-600">Page not found</p>
                            <p className="mb-8 text-lg text-gray-500">Sorry, we could not find the page you are looking for.</p>
                            <Link href="/" className="mb-4 inline-block text-sm" prefetch={false}>
                                <Button variant="default" className='bg-green-800 text-white dark:bg-zinc-900'>Go back home</Button>
                            </Link>
                            <div className="mt-16">
                                <CatIcon className="text-gray-300 text-9xl" />
                            </div>
                        </div>
                    </FramerWrapper>
                </div>
                <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
            </div>
        </div>
    );
};

export default NotFound;
