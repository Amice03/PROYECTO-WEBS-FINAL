# Informe Práctica 06: Sistema de Gestión de Salud y Triaje

## 1. Nombre de la Aplicación
*SaludRural - Sistema de Gestión de Historiales y Triaje Médico*

## 2. Descripción Breve del Objetivo de la Práctica
El objetivo principal de esta práctica ha sido desarrollar y estructurar una aplicación web modular para la administración de salud comunitaria. Se buscó implementar una lógica de negocio basada en *Roles (RBAC)* (Administrador, Doctor, Encuestador) para gestionar el flujo de información entre la recolección de datos en campo (encuestas), la generación de historiales médicos y la toma de decisiones clínicas (triaje y seguimiento).

Asimismo, la práctica se enfocó en la *migración y organización del código* fuente (HTML, CSS y JavaScript) para separar responsabilidades, asegurar que cada usuario vea únicamente los módulos correspondientes a su perfil y garantizar la persistencia básica de datos durante la sesión.

## 3. Documentación de la Migración y Principales Cambios

Para cumplir con los requerimientos de la arquitectura modular descrita, se realizaron los siguientes cambios sobre la base original:

### A. Reestructuración de Directorios y Archivos
* *Antes:* Estructura monolítica o archivos dispersos.
* *Ahora:* Se organizó el proyecto separando claramente la estructura (.html), el estilo (.css) y la lógica (.js).
* *Cambio clave:* Se crearon contenedores específicos en el HTML para renderizar dinámicamente los 7 módulos (Dashboard, Encuestas, Historial, Triaje, Seguimiento, Personal, Sector).

### B. Implementación de Lógica de Roles (RBAC)
Se migró de una navegación estática a una navegación dinámica controlada por JavaScript:
1.  *Administrador:* Se habilitó el acceso a "Registrar Personal" y la vista global del Dashboard.
2.  *Doctor:* Se restringió el acceso a "Registrar Personal" y "Nueva Encuesta", pero se habilitó "Asignar Sector" y la visualización de "Triaje/Seguimiento".
3.  *Encuestador:* Se limitó estrictamente a "Nueva Encuesta" y se bloquearon los historiales médicos pasados y la asignación de sectores.

### C. Lógica de Negocio y Flujo de Datos
* *Triaje Automático:* Se implementó la lógica para que, al guardar una encuesta, el sistema calcule automáticamente el "Triaje" basado en el último historial.
* *Seguimiento:* Se programó la función que recopila todos los historiales de un paciente para mostrar su evolución en el módulo de seguimiento.
* *Asignación de Sectores:* Se creó el vínculo lógico para que un Encuestador solo pueda iniciar encuestas si un Doctor le ha asignado un sector previamente.

## 4. Conclusiones y Recomendaciones

### Conclusiones
1.  *Seguridad por Roles:* La implementación de la validación de usuarios al inicio de sesión es crítica para mantener la integridad de la información médica sensible, asegurando que los encuestadores no vean diagnósticos y los doctores no pierdan tiempo en tareas administrativas.
2.  *Modularidad:* Dividir la aplicación en 7 módulos funcionales permite un mantenimiento más sencillo. Si falla el módulo de "Nueva Encuesta", no afecta necesariamente al módulo de "Registrar Personal".
3.  *Experiencia de Usuario:* La redirección automática y el filtrado de menús según el usuario mejoran la usabilidad, evitando que los usuarios intenten acceder a funciones para las que no tienen permiso.

### Recomendaciones
1.  *Persistencia de Datos:* Actualmente el sistema funciona en el lado del cliente (Frontend). Se recomienda migrar a una base de datos real (SQL/NoSQL) y un Backend para que la información no se pierda al recargar o cerrar el navegador definitivamente.
2.  *Seguridad:* Implementar encriptación para las contraseñas de los usuarios y validación de tokens (JWT) en lugar de validaciones puramente en JavaScript, ya que estas últimas pueden ser vulneradas.
3.  *Validación de Formularios:* Agregar validaciones más estrictas en el módulo de "Nueva Encuesta" para evitar datos erróneos en el cálculo del Triaje.
