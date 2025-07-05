# twiglist

Una herramienta CLI simple para generar un árbol visual de la estructura de directorios, escrita en TypeScript.

## 📋 Características

- Genera un árbol visual de directorios con caracteres ASCII
- Opción para excluir `node_modules`
- Capacidad de excluir directorios específicos

## 🔧 Instalación

### Instalación Global (recomendada)

```bash
npm install -g twiglist
```

### Instalación Local

```bash
npm install twiglist
```

## 🚀 Uso

### Uso Básico

```bash
# Mostrar estructura del directorio actual
twiglist

# Mostrar estructura de un directorio específico
twiglist src

# Mostrar ayuda
twiglist --help
```

### Opciones Avanzadas

```bash
# Excluir node_modules
twiglist --exclude-node-modules

# Excluir directorios específicos
twiglist --exclude=dist,build,coverage

# Combinar opciones
twiglist src --exclude-node-modules --exclude=test,docs
```

### Ejemplo de Salida

```text
mi-proyecto/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── utils/
│   │   └── helpers.ts
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
└── README.md
```

## 📖 Opciones Disponibles

| Opción | Descripción | Ejemplo |
|--------|-------------|---------|
| `--exclude-node-modules` | Excluye el directorio node_modules | `twiglist --exclude-node-modules` |
| `--exclude=dir1,dir2` | Excluye directorios específicos (separados por comas) | `twiglist --exclude=dist,build` |
| `--help`, `-h` | Muestra la ayuda | `twiglist --help` |

## 🛠️ Desarrollo

### Prerrequisitos

- Node.js 16+
- npm

### Configuración del Proyecto

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/filetree-list.git
cd filetree-list

# Instalar dependencias
npm install

# Compilar el proyecto
npm run build

# Probar localmente
node dist/bin/cli.js
```

### Scripts Disponibles

```bash
# Compilar TypeScript
npm run build

# Ejecutar el CLI compilado
npm start

# Limpiar archivos compilados
rm -rf dist
```

