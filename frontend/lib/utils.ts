import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Recursively replaces each single character enclosed in braces with a styled span.
 * Example: "Design {&} art {@}" becomes "Design <span ...>&</span> art <span ...>@</span>".
 */
export function replaceBracedCharacters(value: string, className = "font-alex-brush"): string {
  const match = /\{([^{}])\}/.exec(value)

  if (!match || match.index === undefined) {
    return value
  }

  const before = value.slice(0, match.index)
  const character = match[1]
  const after = value.slice(match.index + match[0].length)

  return `${before}<span class="${className}">${character}</span>${replaceBracedCharacters(after, className)}`
}
