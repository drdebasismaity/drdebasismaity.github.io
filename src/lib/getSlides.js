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

    return slideFiles.sort();
  } catch (error) {
    console.error('Error reading images:', error);
    return [];
  }
}
