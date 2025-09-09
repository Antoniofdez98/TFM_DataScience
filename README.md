# TFM DataScience

Este repositorio describe cómo levantar los servicios de `myapp-api` y `myapp-web` en un entorno local.

## Levantar todo en local con Docker Compose

Para iniciar todos los servicios (API, web y base de datos) en contenedores:

```bash
docker-compose up -d
```

Para detener los contenedores:

```bash
docker-compose down
```

## Iniciar `myapp-api` y `myapp-web` por separado

### Backend (`myapp-api`)

```bash
cd myapp-api
npm install
npm run dev
```

### Frontend (`myapp-web`)

```bash
cd myapp-web
npm install
npm run dev
```

## Generar migraciones Prisma

Dentro del directorio de la API:

```bash
cd myapp-api
npx prisma migrate dev --name nombre_de_la_migracion
```

## Generar el SDK en el front con Orval

```bash
cd myapp-web
npx orval
```

## Primer arranque rápido

```bash
# Clonar el repositorio y entrar
 git clone <URL_DEL_REPO>
 cd TFM_DataScience

# Levantar todos los servicios con Docker
 docker-compose up -d

# Iniciar la API y el front por separado (en terminales distintas)
 cd myapp-api && npm run dev
 cd myapp-web && npm run dev

# Generar migraciones y SDK cuando sea necesario
 cd myapp-api && npx prisma migrate dev --name init
 cd myapp-web && npx orval
```
