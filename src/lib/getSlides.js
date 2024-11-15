//import fs from 'fs';
//import path from 'path';
//
//export function getSlides(slidePath) {
//  try {
//    const directoryPath = path.join(process.cwd(), 'public', 'slides', slidePath);
//    const files = fs.readdirSync(directoryPath);
//
//    // Filter out any non-image files if necessary
//    const slideFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
//    return slideFiles.map((file) => `/slides/${slidePath}/${file}`);
//  } catch (error) {
//    console.error('Error reading images:', error);
//    return [];
//  }
//}


import { opendir } from 'node:fs/promises';
import path from 'path';

export async function getSlides(slidePath) {
  try {
    const directoryPath = path.join(process.cwd(), 'public', 'slides', slidePath);
    const dir = await opendir(directoryPath);
    const slideFiles = [];

    for await (const dirent of dir) {
      if (dirent.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(dirent.name)) {
        slideFiles.push(`/slides/${slidePath}/${dirent.name}`);
      }
    }

    return slideFiles;
  } catch (error) {
    console.error('Error reading images:', error);
    return [];
  }
}
