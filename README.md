# Alerta Búsqueda - Backend API

**Integrante**
- Gonzalo Miranda

## Descripción del proyecto
Alerta Búsqueda es el backend (API REST) de la plataforma orientada a la consulta y difusión de información sobre personas desaparecidas. Este sistema centraliza la lógica de negocio, gestiona la persistencia de datos y provee los endpoints necesarios para que el frontend (Single Page Application) pueda registrar usuarios, consultar fichas de búsqueda y gestionar alertas.

El proyecto está desarrollado con una arquitectura modular basada en **NestJS**, cumpliendo con los requerimientos académicos para la materia Programación IV (Trabajo Práctico N.º 9).

## Tecnologías utilizadas
Para el desarrollo de esta API se implementaron las siguientes tecnologías:

- **NestJS:** Framework principal para Node.js que permite construir aplicaciones del lado del servidor eficientes, escalables y con una arquitectura fuertemente tipada.
- **TypeScript:** Lenguaje de programación utilizado para garantizar un tipado estricto y un código más seguro.
- **PostgreSQL (Neon.tech):** Sistema de gestión de bases de datos relacional alojado en la nube para la persistencia de la información.
- **Git y GitHub:** Control de versiones siguiendo un flujo de trabajo estructurado mediante ramas (`main` para producción, `dev` para integración, y `feature/*`, `fix/*`, `refactor/*`, `docs/*` para tareas específicas).

## Estructura de Módulos
El proyecto utiliza una arquitectura de carpetas centralizada en `src/modules/`, dividiendo la lógica en las siguientes entidades:

- **app:** Módulo base y configuración principal.
- **users:** Gestión de cuentas de administradores y usuarios validables mediante DNI.
- **auth:** Manejo de la seguridad, autenticación y sesiones (en desarrollo).
- **desaparecidos:** Gestión de la información (CRUD) y estado de las fichas de personas buscadas.
- **alerts:** Recepción de pistas, avisos de avistamientos y reportes ciudadanos.
- **locations:** Normalización geográfica (provincias y ciudades) para filtrar y localizar los casos de búsqueda.

## Objetivos del Sistema (Backend)
- Proveer una API REST estructurada con operaciones CRUD para el consumo desde el frontend.
- Garantizar la integridad referencial y coherencia de los datos almacenados en la base de datos relacional.
- Separar la lógica de negocio en módulos independientes para facilitar la escalabilidad del sistema.
- Establecer las bases para la futura implementación de validaciones, autenticación y carga de imágenes.