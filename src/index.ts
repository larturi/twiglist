import fs from 'fs'
import path from 'path'

export interface TreeOptions {
  excludeNodeModules?: boolean
  excludeDirs?: string[]
}

export function getDirTree(
  dirPath: string,
  prefix = '',
  options: TreeOptions = {}
): string {
  const { excludeNodeModules = false, excludeDirs = [] } = options

  const baseName = path.basename(dirPath)

  // Crear lista completa de directorios a excluir
  const dirsToExclude = new Set(excludeDirs)
  if (excludeNodeModules) {
    dirsToExclude.add('node_modules')
  }

  const entries = fs
    .readdirSync(dirPath)
    .filter((entry) => {
      // Filtrar directorios excluidos
      if (dirsToExclude.has(entry)) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      const aPath = path.join(dirPath, a)
      const bPath = path.join(dirPath, b)
      const aIsDir = fs.statSync(aPath).isDirectory()
      const bIsDir = fs.statSync(bPath).isDirectory()
      return aIsDir === bIsDir ? a.localeCompare(b) : aIsDir ? -1 : 1
    })

  const lines = [`${prefix}${baseName}/`]

  entries.forEach((entry, index) => {
    const fullPath = path.join(dirPath, entry)
    const isDir = fs.statSync(fullPath).isDirectory()
    const isLast = index === entries.length - 1
    const connector = isLast ? '└──' : '├──'
    const newPrefix = prefix + (isLast ? '    ' : '│   ')
    if (isDir) {
      lines.push(`${prefix}${connector} ${entry}/`)
      lines.push(
        ...getDirTree(fullPath, newPrefix, options).split('\n').slice(1)
      ) // Evita repetir la carpeta
    } else {
      lines.push(`${prefix}${connector} ${entry}`)
    }
  })

  return lines.join('\n')
}
