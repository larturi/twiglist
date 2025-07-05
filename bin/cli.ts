#!/usr/bin/env node

import path from 'path'
import { getDirTree } from '../src/index.js'

// Función para mostrar ayuda
function showHelp() {
  console.log(`
Uso: twiglist [directorio] [opciones]

Opciones:
  --exclude-node-modules    Excluye el directorio node_modules
  --exclude=dir1,dir2,dir3  Excluye directorios específicos (separados por comas)
  --help, -h               Muestra esta ayuda

Ejemplos:
  twiglist                           # Lista el directorio actual
  twiglist src                       # Lista el directorio src
  twiglist --exclude-node-modules    # Excluye node_modules
  twiglist --exclude=dist,build      # Excluye dist y build
  twiglist src --exclude-node-modules --exclude=test,docs
`)
}

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2)

// Verificar si se solicita ayuda
if (args.includes('--help') || args.includes('-h')) {
  showHelp()
  process.exit(0)
}

const targetDir = args.find((arg) => !arg.startsWith('--')) || '.'
const excludeNodeModules = args.includes('--exclude-node-modules')
const excludeArg = args.find((arg) => arg.startsWith('--exclude='))
const customExcludes = excludeArg ? excludeArg.split('=')[1].split(',') : []

const fullPath = path.resolve(process.cwd(), targetDir)

console.log('Directory structure:')
console.log(
  getDirTree(fullPath, '', {
    excludeNodeModules,
    excludeDirs: customExcludes
  })
)
