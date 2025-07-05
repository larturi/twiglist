# 📦 Publicación en NPM

## Guia para publicar en NPM

### 1. Preparar el Paquete

Asegúrate de que tu `package.json` esté configurado correctamente:

```json
{
  "name": "twiglist",
  "version": "1.0.0",
  "description": "CLI para listar archivos de código fuente",
  "bin": {
    "twiglist": "dist/bin/cli.js"
  },
  "type": "module",
  "main": "./dist/index.js",
  "exports": {
    ".": "./dist/index.js"
  },
  "files": [
    "dist/",
    "README.md",
    "package.json"
  ]
}
```

### 2. Crear Cuenta en NPM

Si no tienes cuenta en NPM:

```bash
# Crear cuenta en npmjs.com o usar el CLI
npm adduser
```

### 3. Compilar y Publicar

```bash
# 1. Compilar el proyecto
npm run build

# 2. Verificar que todo esté correcto
npm pack --dry-run

# 3. Iniciar sesión en NPM (si no lo has hecho)
npm login

# 4. Publicar el paquete
npm publish
```

### 4. Actualizar Versión

Para futuras actualizaciones:

```bash
# Incrementar versión patch (1.0.0 -> 1.0.1)
npm version patch

# Incrementar versión minor (1.0.0 -> 1.1.0)
npm version minor

# Incrementar versión major (1.0.0 -> 2.0.0)
npm version major

# Publicar la nueva versión
npm publish
```

### 5. Verificar Publicación

```bash
# Verificar que el paquete se publicó correctamente
npm view twiglist

# Probar instalación global
npm install -g twiglist
twiglist --help
```

## 🔍 Uso como Módulo

También puedes usar twiglist como módulo en tu código:

```typescript
import { getDirTree, TreeOptions } from 'twiglist'

const options: TreeOptions = {
  excludeNodeModules: true,
  excludeDirs: ['dist', 'build']
}

const tree = getDirTree('/path/to/directory', '', options)
console.log(tree)
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

### Leandro Arturi

- GitHub: [@larturi](https://github.com/larturi)

## 🔗 Enlaces Útiles

- [NPM Package](https://www.npmjs.com/package/twiglist)
- [Documentación de NPM](https://docs.npmjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
