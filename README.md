
# INSTRUCCIONES IMPORTANTES 👀

Backend para la prueba tecnica de Toolbox OTT

## Iniciar Backend

Instrucciones para iniciar el proyecto de manera correcta.

Consideraciones a tener en cuenta, si quieres iniciar el backend con Docker Compose, recuerda tenerlo instalado y funcionando. Tambien, asegurate de tener los puertos disponibles:
```bash
  PUERTO 5000 <--- Backend Prod y Dev
  PUERTO 4173 <--- Frontend Produccion
  PUERTO 5173 <--- Frontend Desarrollo
```

#### Iniciar backend con Docker ( RECOMENDADO )

```bash
  docker-compose up -d --build
```

#### Iniciar backend sin Docker
Modo desarrollador
```bash
  npm install
  npm run dev
```

Modo produccion
```bash
  npm install
  npm start
```
## Documentacion del API

### Obtener archivos formateados

```http
  GET /files/data
```
Ejemplo con el query
```http
  GET /files/data?fileName=test1.csv
```

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `fileName` | `query string` | **No requerido** |

---
### Obtener lista de archivos

```http
  GET /files/list
```
Con este se obtienen todos los archivos disponibles para descargar.



## Authors

- [@jhossuan](https://www.linkedin.com/in/jhossuan/)

