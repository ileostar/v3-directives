import fs from 'node:fs'
import path from 'node:path'

export function getFirstLevelFiles(directoryPath: string) {
  const files = fs.readdirSync(directoryPath)
  const fileNames: string[] = []

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isFile())
      fileNames.push(file)
  }

  return fileNames
}
