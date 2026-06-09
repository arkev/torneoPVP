# 🏆 2do Torneo Virtual de PVP en Montemorelos

Sitio web oficial del **2do Torneo Virtual de PVP de Pokémon GO** para la comunidad de Montemorelos, organizado por **Arkev**.

## 🌐 Ver sitio en vivo

👉 [https://arkev.github.io/torneoPVP](https://arkev.github.io/torneoPVP)

## 🌟 Características

- **Página principal (`index.html`):** Introducción al torneo, tarjetas desplegables de los 8 participantes con avatar, código de entrenador, gráfico radar del equipo y los 6 Pokémon registrados con sus ataques.
- **Tabla Round Robin:** Resultados de la Etapa 1 (todos contra todos) con tabla de puntos auto-calculada.
- **Brackets de doble eliminación:** Llave de Ganadores, Llave de Perdedores y Gran Final con estructura completa de 5 rondas.
- **Reglamento (`reglas.html`):** Reglas oficiales, sistema de puntuación, penalizaciones y conducta.
- **Diseño Premium:** Dark mode con glassmorphism, animaciones al scroll y diseño 100% responsivo.
- **Sin dependencias externas:** HTML, CSS y JavaScript vanilla. Carga ultrarrápida.

## 📁 Estructura del proyecto

```
torneoPVP/
├── index.html          # Página principal (participantes, brackets, resultados)
├── index.css           # Estilos exclusivos de la página principal
├── reglas.html         # Reglamento oficial del torneo
├── style.css           # Estilos globales compartidos
├── pvpLogo.png         # Logo oficial del torneo
├── images/
│   ├── placeholderAvatar.png
│   └── placeholderPokemon.png
└── README.md
```

## ✏️ Cómo editar los datos

Toda la información dinámica se controla desde el archivo `index.html`, en el bloque `<script>` al final:

- **`PLAYERS`** — Array con los 8 jugadores. Cada objeto tiene: nombre, código, avatar, calificaciones del equipo (A–F) y los 6 Pokémon con sus ataques.
- **`RR_RESULTS`** — Matriz 8×8 con los resultados del Round Robin (`"W"` = victoria, `"L"` = derrota, `null` = mismo jugador).

La tabla de puntos, el gráfico radar y la tabla Round Robin se generan automáticamente a partir de estos datos.

## 🚀 Publicación con GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio.
2. En "Build and deployment", selecciona **Deploy from a branch**.
3. Elige tu rama principal (ej. `main`) y la carpeta `/ (root)`.
4. Haz clic en **Save**.

En un par de minutos tu sitio estará disponible en `https://[tu-usuario].github.io/torneoPVP`.
