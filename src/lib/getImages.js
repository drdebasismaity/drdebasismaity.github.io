//import fs from 'fs';
//import path from 'path';
//
//export function getImages(albumPath) {
//  try {
//    const directoryPath = path.join(process.cwd(), 'public', 'images', albumPath);
//    const files = fs.readdirSync(directoryPath);
//
//    // Filter out any non-image files if necessary
//    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
//    return imageFiles.map((file) => `/images/${albumPath}/${file}`);
//  } catch (error) {
//    console.error('Error reading images:', error);
//    return [];
//  }
//}


import { opendir } from 'node:fs/promises';
import path from 'path';

export async function getImages(albumPath) {
  try {
    const directoryPath = path.join(process.cwd(), 'public', 'images', albumPath);
    const dir = await opendir(directoryPath);
    const imageFiles = [];

    for await (const dirent of dir) {
      if (dirent.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(dirent.name)) {
        imageFiles.push(`/images/${albumPath}/${dirent.name}`);
      }
    }

    return imageFiles;
  } catch (error) {
    console.error('Error reading images:', error);
    return [];
  }
}
