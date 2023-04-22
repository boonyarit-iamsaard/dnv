import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// TODO: Research how to use tailwind-merge, clsx and improve where this is used
export const cn = (...input: ClassValue[]) => twMerge(clsx(input));
