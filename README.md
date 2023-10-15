# Proyecto Bedu

## Dependencias
- `node`
- `mysql 8`

## Instrucciones Desarrollo (backend)

1. Clonar repositorio
    ```sh
    git clone git@github.com:LuisQuintana23/proyecto-bedu.git
    cd ./proyecto-bedu
    ```
2. Cambiar a la rama develop y entrar a la carpeta backend
    ```sh
    git switch develop
    cd ./backend
    ```
3. Instalar módulos de node
    ```sh
    npm install
    ```
4. Configurar archivo `.env` en base a `.env.example` con
   las variables de la base de datos (En caso de no utilzar XAMPP
   se puede optar por utilizar [Docker](#mysql-docker))
    ```sh
    cp ./.env.example ./.env
    ```

5. Crear base de datos
     ```sh
     npx sequelize-cli db:create
     ```
6. Crear tablas necesarias
      ```sh
      npx sequelize-cli db:migrate
      ```
7. Ejecutar seeders
      ```sh
      npx sequelize-cli db:seed:all
      ```

8. Ejecutar aplicación
      ```sh
      npm run up
      ```

## MySQL Docker
1. Instalar docker y entrar a la carpeta backend
      ```sh
      cd ./backend
      ```

2. Configurar archivo `.env` en base a `.env.example` con
   ```dotenv
   DB_USER=user
   DB_PASSWORD=password
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=database-bedu
   ```

3. Ejecutar docker compose
   ```sh
   docker compose up
   ```