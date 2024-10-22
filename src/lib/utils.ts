import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const deobfuscateUsername = (username: string) => {
  return username.replace(/-8ag34a$/, '');
};

export const deobfuscatePassword = (password: string) => {
  return password.replace(/-86x49bb93b$/, '');
};