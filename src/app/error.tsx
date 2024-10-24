// src/app/error.tsx
"use client"
import React from 'react';
import FramerWrapper from '@/components/animation/FramerWrapper';
import { Button } from '@/components/ui/button';
import { CatIcon, CloudSunIcon, Phone } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const CustomError: React.FC<ErrorProps> = ({ error, reset }) => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden mt-[-110px]">

            <div className="flex flex-col gap-3 w-full">

                <div className="h-auto w-full flex justify-center items-center">
                    <FramerWrapper y={0} scale={0.8}>
                        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                            <div className="mb-8">
                                <CloudSunIcon className="text-[#F9A826] text-6xl" />
                            </div>
                            <h1 className="mb-2 text-6xl font-bold text-gray-800">500 - Server Error</h1>
                            <p className="mb-4 text-2xl font-light text-gray-600">Something went wrong. Please try again later.</p>
                            <Link href="/" className="mb-4 inline-block text-sm" prefetch={false}>
                                <Button variant="default">Go back home</Button>
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

export default CustomError;
