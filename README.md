# 🏆 2do Torneo Virtual de PVP en Montemorelos

Sitio web oficial del **2do Torneo Virtual de PVP de Pokémon GO** para la comunidad de Montemorelos, organizado por **Arkev**.

## 🌐 Ver sitio en vivo

👉 [https://arkev.github.io/torneoPVP](https://arkev.github.io/torneoPVP)

## 🌟 Características

- **Página principal (`index.html`):** Introducción al torneo, tarjetas desplegables de los 8 participantes con avatar, código de entrenador, gráfico radar del equipo y los 6 Pokémon registrados con sus ataques.
- **Tipos y Movimientos Inteligentes:** Las etiquetas de los tipos de Pokémon y los iconos de los movimientos (usando Google Material Symbols) se asignan y colorean automáticamente basados en el diccionario de datos.
- **Estadísticas Dinámicas:** Sección "Datos sobre los equipos" que muestra de forma automática un ranking y porcentaje de uso de los Pokémon repetidos en el meta del torneo.
- **Tabla Round Robin:** Resultados de la Etapa 1 (todos contra todos) con tabla de puntos auto-calculada (Victoria Limpia, Victoria Cerrada, Derrota Limpia, Derrota Cerrada, y Pendientes).
- **Brackets de doble eliminación:** Llave de Ganadores, Llave de Perdedores y Gran Final con estructura completa de 5 rondas.
- **Reglamento (`reglas.html`):** Reglas oficiales, sistema de puntuación, penalizaciones y conducta.
- **Diseño Premium:** Dark mode con glassmorphism, animaciones al scroll y diseño 100% responsivo.
- **Sin dependencias externas:** HTML, CSS y JavaScript vanilla. Carga ultrarrápida.

## 📁 Estructura del proyecto

```
torneoPVP/
├── index.html          # Página principal (participantes, stats, brackets, resultados)
├── reglas.html         # Reglamento oficial del torneo
├── style.css           # Estilos globales compartidos
├── main.js             # Lógica interactiva, diccionarios de tipos y datos de jugadores
├── placeholders.ai     # Arte/assets de diseño original
├── images/             # Carpeta contenedora de imágenes, iconos y avatares
└── README.md
```

## ✏️ Cómo editar los datos

Toda la información dinámica se controla desde el archivo `main.js`, el cual es el núcleo de datos del sitio:

- **`PLAYERS`** — Array con los 8 jugadores. Cada objeto tiene: nombre, código, avatar, calificaciones del equipo (A–F) y los 6 Pokémon con sus ataques (rápidos y cargados).
- **`RR_RESULTS`** — Matriz 8×8 con los resultados del Round Robin. Usa `""` (vacío) para pendiente, `"W"` = Victoria Limpia (3 pts), `"CW"` = Victoria Cerrada (2 pts), `"CL"` = Derrota Cerrada (1 pt), `"L"` = Derrota Limpia (0 pts).
- **`POKEMON_TYPES`** y **`MOVE_TYPES`** — Diccionarios para asignar los tipos a cada Pokémon registrado y cada movimiento, así la interfaz genera el color y el icono automáticamente.

La tabla de puntos, las etiquetas, la sección de Datos sobre los equipos y la tabla Round Robin se generan automáticamente a partir de estos datos.

## 🚀 Publicación con GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio.
2. En "Build and deployment", selecciona **Deploy from a branch**.
3. Elige tu rama principal (ej. `main`) y la carpeta `/ (root)`.
4. Haz clic en **Save**.

En un par de minutos tu sitio estará disponible en `https://[tu-usuario].github.io/torneoPVP`.
