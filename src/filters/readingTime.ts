// src/filters/readingTime.ts
export const readingTimeFilter = (text: string): string => {
  const wordsPerMinute = 200; // Adjust this value based on your estimation
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};
