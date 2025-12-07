# 🌊 GuardianWater API

Sistema backend para la gestión de reportes y usuarios, enfocado en el monitoreo del consumo de agua, la detección de fugas y eventos relevantes dentro del proyecto **GuardianWater**.

Esta API permite registrar usuarios, crear reportes con geolocalización, almacenar imágenes y consultar eventos por estado o usuario. Está construida usando arquitectura **MVC + DAO** para garantizar orden, escalabilidad y mantenimiento.

---

## 📌 Características principales

### 👤 Módulo de Usuarios
- Crear usuarios  
- Consultar todos o uno por ID  
- Actualizar información  
- Eliminar usuarios  
- Roles: `User` y `Admin`  
- Dirección física completa  
- Geolocalización usando GeoJSON  
- Validación de email único  

### 📝 Módulo de Reportes
- Crear reportes asignados a usuarios  
- Adjuntar imagen (URL o base64)  
- Registrar ubicación mediante coordenadas  
- Consultar reportes globales  
- Consultar un reporte por ID  
- Consultar reportes por usuario  
- Actualizar datos  
- Cambiar estado (`Enviado`, `Revision`, `Completado`)  
- Eliminar reportes  

---

## 🛠 Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Node.js** | Ejecución del servidor |
| **Express.js** | Framework backend |
| **MongoDB** / **MongoDB Atlas** | Base de datos NoSQL |
| **Mongoose** | ODM para modelado de datos |
| **Nodemon** | Servidor en caliente |
| **Dotenv** | Variables de entorno ||

---


