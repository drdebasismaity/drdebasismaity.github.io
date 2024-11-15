//import { readdirSync, statSync } from 'fs';
//import { join } from 'path';
//
//export function getDirectories(source) {
//  return readdirSync(source).filter(name =>
//    statSync(join(source, name)).isDirectory()
//  );
//}


import { opendir } from 'node:fs/promises';

export async function getDirectories(source) {
  const dir = await opendir(source);
  const directories = [];

  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      directories.push(dirent.name);
    }
  }

  return directories;
}
