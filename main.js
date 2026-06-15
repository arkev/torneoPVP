/* ============================================================
   DATOS DE JUGADORES — Edita este objeto para actualizar toda la página.
   Escala de calificación: A (mejor) → F (peor). Se mapea a 6→1 para el gráfico.
   ============================================================ */
const POKEMON_TYPES = {
    "Dugtrio": ["Tierra"],
    "Sudowoodo": ["Roca"],
    "Amoonguss": ["Planta", "Veneno"],
    "Lapras": ["Agua", "Hielo"],
    "Flareon": ["Fuego"],
    "Heatmor": ["Fuego"],
    "Tinkaton": ["Hada", "Acero"],
    "Corsola de Galar": ["Fantasma"],
    "Diggersby": ["Normal", "Tierra"],
    "Feraligatr Obscuro": ["Agua"],
    "Registeel": ["Acero"],
    "Altaria": ["Dragón", "Volador"],
    "Lickilicky": ["Normal"],
    "Fearow": ["Normal", "Volador"],
    "Quagsire": ["Agua", "Tierra"],
    "Aromatisse": ["Hada"],
    "Dusclops": ["Fantasma"],
    "Jellicent": ["Agua", "Fantasma"],
    "Azumarill": ["Agua", "Hada"],
    "Malamar": ["Siniestro", "Psíquico"],
    "Annihilape": ["Lucha", "Fantasma"],
    "Feraligatr": ["Agua"],
    "Empoleon": ["Agua", "Acero"],
    "Ninetales": ["Fuego"],
    "Seismitoad": ["Agua", "Tierra"],
    "Gastrodon": ["Agua", "Tierra"],
    "Seaking": ["Agua"],
    "Charjabug": ["Bicho", "Eléctrico"],
    "Skeledirge": ["Fuego", "Fantasma"],
    "Lanturn": ["Agua", "Eléctrico"],
    "Cresselia": ["Psíquico"],
    "Swampert": ["Agua", "Tierra"],
    "Venusaur": ["Planta", "Veneno"],
    "Umbreon": ["Siniestro"],
    "Skarmory": ["Acero", "Volador"],
    "Stunfisk": ["Tierra", "Eléctrico"],
    "Raichu de Alola": ["Psíquico", "Eléctrico"],
    "Medicham": ["Lucha", "Psíquico"],
    "Stunfisk de Galar": ["Tierra", "Acero"],
    "Shiftry": ["Planta", "Siniestro"],
    "Poke": ["Normal"] // For the legend
};

const MOVE_TYPES = {
    "Disparo de Lodo": "Tierra",
    "Retribucion": "Normal",
    "Bomba Fango": "Tierra",
    "Contraataque": "Lucha",
    "Abrecaminos": "Planta",
    "Rayo Meteórico": "Roca",
    "Ataque Finta": "Siniestro",
    "Bomba Lodo": "Veneno",
    "Juego Sucio": "Siniestro",
    "Vaho Helado": "Hielo",
    "Ventisca": "Hielo",
    "Hidrobomba": "Agua",
    "Giro Fuego": "Fuego",
    "Lanzallamas": "Fuego",
    "Supercalor": "Fuego",
    "Puño Incremento": "Lucha",
    "Viento Feérico": "Hada",
    "Martillo Colosal": "Acero",
    "Terratemblor": "Tierra",
    "Impresionar": "Fantasma",
    "Tinieblas": "Fantasma",
    "Joya de Luz": "Roca",
    "Disparo Lodo": "Tierra",
    "Puño Fuego": "Fuego",
    "Arenas Ardientes": "Tierra",
    "Garra Umbría": "Fantasma",
    "Hidrocañón": "Agua",
    "Rayo Hielo": "Hielo",
    "Fijar Blanco": "Normal",
    "Electrocañón": "Eléctrico",
    "Onda Certera": "Lucha",
    "Dragoaliento": "Dragón",
    "Ataque Aéreo": "Volador",
    "Desenrollar": "Roca",
    "Golpe Cuerpo": "Normal",
    "Bola Sombra": "Fantasma",
    "Picotazo": "Volador",
    "Taladradora": "Tierra",
    "Pico Taladro": "Volador",
    "Acua Cola": "Agua",
    "Roca Afilada": "Roca",
    "Psicocarga": "Psíquico",
    "Fuerza Lunar": "Hada",
    "Puño Hielo": "Hielo",
    "Puño Sombra": "Fantasma",
    "Infortunio": "Fantasma",
    "Surf": "Agua",
    "Burbuja": "Agua",
    "Juego Rudo": "Hada",
    "Psicocorte": "Psíquico",
    "Fuerza Bruta": "Lucha",
    "Puño Furia": "Fantasma",
    "Eco Metálico": "Acero",
    "Ascuas": "Fuego",
    "Meteorobola (fuego)": "Fuego",
    "Energibola": "Planta",
    "Viento Hielo": "Hielo",
    "Tierra Viva": "Tierra",
    "Bofetón lodo": "Tierra",
    "Golpe cuerpo": "Normal",
    "Tierra viva": "Tierra",
    "Voltiocambio": "Eléctrico",
    "Tijera x": "Bicho",
    "Chispazo": "Eléctrico",
    "A Bocajarro": "Lucha",
    "Calcinacion": "Fuego",
    "Anillo igneo": "Fuego",
    "Rayo": "Eléctrico",
    "Canto ardiente": "Fuego",
    "Hierba lazo": "Planta",
    "Cerrojo": "Normal",
    "Aliento Dragón": "Dragón",
    "Meteoro Dragón": "Dragón",
    "Pulso Umbrío": "Siniestro",
    "Pistola Agua": "Agua",
    "Terremoto": "Tierra",
    "Látigo Cepa": "Planta",
    "Planta Feroz": "Planta",
    "Alarido": "Siniestro",
    "Último Recurso": "Normal",
    "Pájaro Osado": "Volador",
    "Ala de Acero": "Acero",
    "Impactrueno": "Eléctrico",
    "Psíquico": "Psíquico",
    "Avalancha": "Roca",
    "Hoja Aguda": "Planta",
    "Puño trueno": "Eléctrico"
};

const TYPE_ICONS = {
    "Normal": "circle",
    "Fuego": "local_fire_department",
    "Agua": "water_drop",
    "Planta": "eco",
    "Eléctrico": "bolt",
    "Hielo": "ac_unit",
    "Lucha": "sports_martial_arts",
    "Veneno": "Experiment",
    "Tierra": "landscape",
    "Volador": "Flight",
    "Psíquico": "Neurology",
    "Bicho": "bug_report",
    "Roca": "landslide",
    "Fantasma": "Skull",
    "Dragón": "Kanji_Alcohol",
    "Siniestro": "dark_mode",
    "Acero": "settings",
    "Hada": "auto_awesome"
};

const TYPE_COLORS = {
    "Normal": "#A8A77A",
    "Fuego": "#EE8130",
    "Agua": "#6390F0",
    "Planta": "#7AC74C",
    "Eléctrico": "#F7D02C",
    "Hielo": "#96D9D6",
    "Lucha": "#C22E28",
    "Veneno": "#A33EA1",
    "Tierra": "#E2BF65",
    "Volador": "#A98FF3",
    "Psíquico": "#F95587",
    "Bicho": "#A6B91A",
    "Roca": "#B6A136",
    "Fantasma": "#735797",
    "Dragón": "#6F35FC",
    "Siniestro": "#705848",
    "Acero": "#B7B7CE",
    "Hada": "#D685AD"
};

function getMoveIconHtml(moveStr) {
    if (!moveStr) return "";
    let type = "Normal";
    for (let key in MOVE_TYPES) {
        if (moveStr.toLowerCase().startsWith(key.toLowerCase())) {
            type = MOVE_TYPES[key];
            break;
        }
    }
    const iconName = TYPE_ICONS[type] || "circle";
    return `<span class="material-symbols-outlined move-icon">${iconName}</span>`;
}
const PLAYERS = [
    {
        name: "alonsopf89",
        code: "5546 3274 8523",
        avatar: "images/alonsopf89.png",
        grades: { cobertura: "B", seguridad: "F", consistencia: "B", aguante: "D" },
        team: [
            { img: "images/Dugtrio.png", name: "Dugtrio", fast: "Disparo de Lodo (3T)", charged1: "Retribucion (7)", charged2: "Bomba Fango (5-)" },
            { img: "images/Sudowoodo.png", name: "Sudowoodo", fast: "Contraataque (2T)", charged1: "Abrecaminos (8-)", charged2: "Rayo Meteórico (10)" },
            { img: "images/Amoonguss.png", name: "Amoonguss", fast: "Ataque Finta (2T)", charged1: "Bomba Lodo (9-)", charged2: "Juego Sucio (7-)" },
            { img: "images/Lapras.png", name: "Lapras", fast: "Vaho Helado (2T)", charged1: "Ventisca (15)", charged2: "Hidrobomba (15)" },
            { img: "images/Flareon.png", name: "Flareon", fast: "Giro Fuego (3T)", charged1: "Lanzallamas (6-)", charged2: "Supercalor (6-)" },
            { img: "images/Heatmor.png", name: "Heatmor", fast: "Giro Fuego (3T)", charged1: "Puño Incremento (4-)", charged2: "" }
        ]
    },
    {
        name: "Arkev77",
        code: "6678 7851 7448",
        avatar: "images/Arkev77.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "B", aguante: "A" },
        team: [
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7-)", charged2: "Terratemblor (5)" },
            { img: "images/CorsolaG.png", name: "Corsola de Galar", fast: "Impresionar (3T)", charged1: "Tinieblas (5-)", charged2: "Joya de Luz (5)" },
            { img: "images/Diggersby.png", name: "Diggersby", fast: "Disparo Lodo (2T)", charged1: "Puño Fuego (5-)", charged2: "Arenas Ardientes (6-)" },
            { img: "images/Feraligatr.png", name: "Feraligatr Obscuro", fast: "Garra Umbría (2T)", charged1: "Hidrocañón (5)", charged2: "Rayo Hielo (7)" },
            { img: "images/Stunfisk.png", name: "Stunfisk", fast: "Impactrueno (2T)", charged1: "Chispazo (5-)", charged2: "Bomba Fango (5)" },
            { img: "images/altaria.png", name: "Altaria", fast: "Dragoaliento (1T)", charged1: "Lanzallamas (14)", charged2: "Ataque Aéreo (12-)" }
        ]
    },
    {
        name: "DizzyJuanito19",
        code: "8115 6799 5758",
        avatar: "images/DizzyJuanito19.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "A", aguante: "B" },
        team: [
            { img: "images/Lickilicky.png", name: "Lickilicky", fast: "Desenrollar (3T)", charged1: "Golpe Cuerpo (3-)", charged2: "Bola Sombra (4)" },
            { img: "images/Fearow.png", name: "Fearow", fast: "Picotazo (2T)", charged1: "Taladradora (5)", charged2: "Pico Taladro (5)" },
            { img: "images/Quagsire.png", name: "Quagsire", fast: "Disparo Lodo (2T)", charged1: "Acua Cola (4)", charged2: "Roca Afilada (7-)" },
            { img: "images/Aromatisse.png", name: "Aromatisse", fast: "Viento Feérico (2T)", charged1: "Psicocarga (5-)", charged2: "Fuerza Lunar (8)" },
            { img: "images/Diggersby.png", name: "Diggersby", fast: "Disparo Lodo (2T)", charged1: "Puño Fuego (5-)", charged2: "Arenas Ardientes (7-)" },
            { img: "images/Dusclops.png", name: "Dusclops", fast: "Infortunio (3T)", charged1: "Puño Hielo (4-)", charged2: "Puño Sombra (3-)" }
        ]
    },
    {
        name: "Hecvas11",
        code: "1264 0548 4249",
        avatar: "images/Hecvas11.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "B", aguante: "B" },
        team: [
            { img: "images/Jellicent.png", name: "Jellicent", fast: "Infortunio (3T)", charged1: "Surf (4-)", charged2: "Bola Sombra (4)" },
            { img: "images/Azumarill.png", name: "Azumarill", fast: "Burbuja (3T)", charged1: "Juego Rudo (6-)", charged2: "Rayo Hielo (5)" },
            { img: "images/Malamar.png", name: "Malamar", fast: "Psicocorte (2T)", charged1: "Fuerza Bruta (5-)", charged2: "Juego Sucio (5-)" },
            { img: "images/Annihilape.png", name: "Annihilape", fast: "Contrataque (2T)", charged1: "Puño Furia (6)", charged2: "Puño Hielo (7-)" },
            { img: "images/Feraligatr.png", name: "Feraligatr", fast: "Garra Umbría (2T)", charged1: "Hidrocañón (5)", charged2: "Rayo Hielo (7)" },
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7-)", charged2: "Terratemblor (5)" }
        ]
    },
    {
        name: "LaloCasas",
        code: "7006 0440 7495",
        avatar: "images/LaloCasas.png",
        grades: { cobertura: "A", seguridad: "A", consistencia: "B", aguante: "B" },
        team: [
            { img: "images/altaria.png", name: "Altaria", fast: "Dragoaliento (1T)", charged1: "Lanzallamas (14)", charged2: "Ataque Aéreo (12-)" },
            { img: "images/Empoleon.png", name: "Empoleon", fast: "Eco Metálico (2T)", charged1: "Hidrocañón (5)", charged2: "Pico Taladro (5)" },
            { img: "images/Ninetales.png", name: "Ninetales", fast: "Ascuas (2T)", charged1: "Meteorobola (fuego) (4)", charged2: "Energibola (7-)" },
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7-)", charged2: "Terratemblor (5)" },
            { img: "images/Lickilicky.png", name: "Lickilicky", fast: "Desenrollar (3T)", charged1: "Golpe Cuerpo (3-)", charged2: "Bola Sombra (4)" },
            { img: "images/Seismitoad.png", name: "Seismitoad", fast: "Disparo Lodo (2T)", charged1: "Viento Hielo (5)", charged2: "Tierra Viva (6-)" }
        ]
    },
    {
        name: "PitterCruise",
        code: "0370 2690 2075",
        avatar: "images/PitterCruise.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "A", aguante: "C" },
        team: [
            { img: "images/Gastrodon.png", name: "Gastrodon", fast: "Bofetón lodo (3T)", charged1: "Golpe cuerpo (4-)", charged2: "Tierra viva (5)" },
            { img: "images/Seaking.png", name: "Seaking", fast: "Picotazo (2T)", charged1: "Taladradora (5)", charged2: "Rayo hielo (6-)" },
            { img: "images/Charjabug.png", name: "Charjabug", fast: "Voltiocambio (4T)", charged1: "Tijera x (3-)", charged2: "Chispazo (3-)" },
            { img: "images/Annihilape.png", name: "Annihilape", fast: "Contrataque (2T)", charged1: "Puño Furia (6)", charged2: "A Bocajarro (8-)" },
            { img: "images/Skeledirge.png", name: "Skeledirge", fast: "Calcinacion (5T)", charged1: "Anillo igneo (3-)", charged2: "Bola Sombra (3-)" },
            { img: "images/Lanturn.png", name: "Lanturn", fast: "Chispa (2T)", charged1: "Surf (7-)", charged2: "Rayo (8)" }
        ]
    },
    {
        name: "Arlekcking",
        code: "4429 3064 6438",
        avatar: "images/Arlekcking.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "A", aguante: "B" },
        team: [
            { img: "images/Charjabug.png", name: "Charjabug", fast: "Voltiocambio (4T)", charged1: "Tijera x (3-)", charged2: "Chispazo (3-)" },
            { img: "images/altaria.png", name: "Altaria", fast: "Dragoaliento (1T)", charged1: "Fuerza Lunar (15)", charged2: "Ataque Aéreo (12-)" },
            { img: "images/Jellicent.png", name: "Jellicent", fast: "Infortunio (3T)", charged1: "Surf (4-)", charged2: "Bola Sombra (4)" },
            { img: "images/Skeledirge.png", name: "Skeledirge", fast: "Calcinacion (5T)", charged1: "Canto ardiente (3-)", charged2: "Bola Sombra (3-)" },
            { img: "images/Feraligatr.png", name: "Feraligatr Obscuro", fast: "Garra Umbría (2T)", charged1: "Hidrocañón (5)", charged2: "Rayo Hielo (7)" },
            { img: "images/Cresselia.png", name: "Cresselia", fast: "Psicocorte (2T)", charged1: "Hierba lazo (6-)", charged2: "Fuerza Lunar (7-)" }
        ]
    },
    {
        name: "Maxiatico",
        code: "5297 8304 0223",
        avatar: "images/Maxiatico.png",
        grades: { cobertura: "A", seguridad: "C", consistencia: "A", aguante: "C" },
        team: [
            { img: "images/altaria.png", name: "Altaria", fast: "Dragoaliento (1T)", charged1: "Lanzallamas (14)", charged2: "Ataque Aéreo (12-)" },
            { img: "images/Empoleon.png", name: "Empoleon", fast: "Eco Metálico (2T)", charged1: "Hidrocañón (5)", charged2: "Ventisca (5)" },
            { img: "images/Raichu.png", name: "Raichu de Alola", fast: "Impactrueno (2T)", charged1: "Puño trueno (5-)", charged2: "Abrecaminos (5)" },
            { img: "images/Medicham.png", name: "Medicham", fast: "Contrataque (2T)", charged1: "Puño hielo (7-)", charged2: "Psíquico (10-)" },
            { img: "images/StunfiskG.png", name: "Stunfisk de Galar", fast: "Disparo Lodo (2T)", charged1: "Terremoto (8-)", charged2: "Avalancha (5)" },
            { img: "images/Shiftry.png", name: "Shiftry", fast: "Alarido (3T)", charged1: "Hoja Aguda (3-)", charged2: "Juego Sucio (4-)" }
        ]
    }
];

/* Matriz de resultados Round-robin. "W"=Victoria Limpia(3), "CW"=Victoria Cerrada(2), "CL"=Derrota Cerrada(1), "L"=Derrota Limpia(0), null = mismo jugador */
const RR_RESULTS = [
    //  alonsopf89     Arkev77     DizzyJuanito19     Hecvas11     LaloCasas     PitterCruise     Arlekcking     Maxiatico
    [null, "", "", "", "", "", "", ""],  // alonsopf89
    ["", null, "", "W", "", "", "", ""],  // Arkev77
    ["", "", null, "", "L", "", "", ""],  // DizzyJuanito19
    ["", "L", "", null, "", "", "L", ""],  // Hecvas11
    ["", "", "W", "", null, "", "W", "W"],  // LaloCasas
    ["", "", "", "", "", null, "", ""],  // PitterCruise
    ["", "", "", "W", "L", "", null, ""],  // Arlekcking
    ["", "", "", "", "L", "", "", null]   // Maxiatico
];

/* ============================================================
   CALIFICACIÓN → VALOR NUMÉRICO  (para gráfico de radar)
   ============================================================ */
const GRADE_MAP = { A: 6, B: 5, C: 4, D: 3, E: 2, F: 1 };

/* ============================================================
   RENDERIZAR TARJETAS DE JUGADORES
   ============================================================ */
function renderPlayers() {
    const grid = document.getElementById('playersGrid');
    if (!grid) return;
    PLAYERS.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
        <button class="player-header" onclick="togglePlayer(${i})" aria-expanded="false" aria-controls="playerDetail${i}">
            <span class="player-number">${i + 1}</span>
            <span class="player-name">${p.name}</span>
            <span class="player-arrow">▾</span>
        </button>
        <div class="player-detail" id="playerDetail${i}">
            <div class="player-info-row">
                <div class="player-avatar-wrap">
                    <img src="${p.avatar}" alt="Avatar de ${p.name}" class="player-avatar">
                </div>
                <div class="player-meta">
                    <h4>${p.name}</h4>
                    <p class="trainer-code"><span>Código:</span> ${p.code}</p>
                </div>
                <div class="radar-wrap">
                    <h4>Estadísticas de equipo</h4>
                    <canvas id="radar${i}" width="340" height="260"></canvas>
                </div>
            </div>
            <h4 class="team-title">Equipo</h4>
            <div class="team-row">
                ${p.team.map(pk => `
                    <div class="poke-card">
                        <div class="poke-types">
                            ${(POKEMON_TYPES[pk.name] || []).map(t => `<span class="type-badge" style="background-color: ${TYPE_COLORS[t]}">${t}</span>`).join('')}
                        </div>
                        <img src="${pk.img}" alt="${pk.name}" class="poke-img">
                        <span class="poke-name">${pk.name}</span>
                        <div class="poke-moves">
                            <span class="move fast-move">${getMoveIconHtml(pk.fast)} ${pk.fast}</span>
                            ${pk.charged1 ? `<span class="move charged-move">${getMoveIconHtml(pk.charged1)} ${pk.charged1}</span>` : ''}
                            ${pk.charged2 ? `<span class="move charged-move">${getMoveIconHtml(pk.charged2)} ${pk.charged2}</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
        grid.appendChild(card);
    });
}

/* ============================================================
   ALTERNAR DETALLE DEL JUGADOR
   ============================================================ */
function togglePlayer(index) {
    const detail = document.getElementById(`playerDetail${index}`);
    const btn = detail.previousElementSibling;
    const isOpen = detail.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    if (isOpen) drawRadar(index);
}

/* ============================================================
   DIBUJAR GRÁFICO DE RADAR DE DIAMANTE  (Canvas 2D)
   Rotado 45° para que parezca la forma de diamante de referencia.
   ============================================================ */
function drawRadar(index) {
    const canvas = document.getElementById(`radar${index}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = 340, h = 260;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const cx = w / 2, cy = h / 2;  // 170, 130
    const maxR = 90;
    const g = PLAYERS[index].grades;
    const vals = [
        GRADE_MAP[g.cobertura] || 1,
        GRADE_MAP[g.seguridad] || 1,
        GRADE_MAP[g.consistencia] || 1,
        GRADE_MAP[g.aguante] || 1
    ];
    /* Ejes:  arriba=Cobertura, derecha=Seguridad, abajo=Consistencia, izquierda=Aguante */
    const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const labels = ['Cobertura', 'Seguridad', 'Consistencia', 'Aguante'];

    /* Líneas de cuadrícula de fondo (6 niveles) */
    for (let lv = 1; lv <= 6; lv++) {
        const r = (lv / 6) * maxR;
        ctx.beginPath();
        dirs.forEach((d, j) => {
            const x = cx + d[0] * r;
            const y = cy + d[1] * r;
            j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    /* Polígono del jugador */
    ctx.beginPath();
    dirs.forEach((d, j) => {
        const r = (vals[j] / 6) * maxR;
        const x = cx + d[0] * r;
        const y = cy + d[1] * r;
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
    ctx.fill();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    /* Etiquetas */
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[0], cx, cy - maxR - 15);
    ctx.fillText(labels[1], cx + maxR + 35, cy);
    ctx.fillText(labels[2], cx, cy + maxR + 15);
    ctx.fillText(labels[3], cx - maxR - 35, cy);
}

/* ============================================================
   DIBUJAR GRÁFICO DE RADAR DE LEYENDA (Canvas 2D)
   ============================================================ */
function drawRadarLegend() {
    const canvas = document.getElementById('radarLegend');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = 340, h = 260;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const cx = w / 2, cy = h / 2;
    const maxR = 90;
    // Valores de ejemplo para la leyenda
    const vals = [5, 4, 6, 3]; 
    const dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const labels = ['Cobertura', 'Seguridad', 'Consistencia', 'Aguante'];

    /* Líneas de cuadrícula de fondo */
    for (let lv = 1; lv <= 6; lv++) {
        const r = (lv / 6) * maxR;
        ctx.beginPath();
        dirs.forEach((d, j) => {
            const x = cx + d[0] * r;
            const y = cy + d[1] * r;
            j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    /* Líneas de los ejes */
    dirs.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + d[0] * maxR, cy + d[1] * maxR);
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.stroke();
    });

    /* Diamante blanco exterior */
    ctx.beginPath();
    dirs.forEach((d, j) => {
        const x = cx + d[0] * maxR;
        const y = cy + d[1] * maxR;
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    /* Forma de los datos */
    ctx.beginPath();
    vals.forEach((v, j) => {
        const r = (v / 6) * maxR;
        const x = cx + dirs[j][0] * r;
        const y = cy + dirs[j][1] * r;
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(250, 204, 21, 0.35)';
    ctx.fill();
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    /* Solo etiquetas — sin letras de calificación */
    ctx.fillStyle = '#facc15';
    ctx.font = '600 12px Outfit, sans-serif';
    ctx.textAlign = 'center';

    // Cobertura (top)
    ctx.fillText(labels[0], cx, cy - maxR - 10);
    // Seguridad (right)
    ctx.textAlign = 'left';
    ctx.fillText(labels[1], cx + maxR + 8, cy + 5);
    // Consistencia (bottom)
    ctx.textAlign = 'center';
    ctx.fillText(labels[2], cx, cy + maxR + 18);
    // Aguante (left)
    ctx.textAlign = 'right';
    ctx.fillText(labels[3], cx - maxR - 8, cy + 5);
}

/* ============================================================
   RENDERIZAR TABLA ROUND-ROBIN
   ============================================================ */
function renderRR() {
    const tbody = document.querySelector('#rrTable tbody');
    if (!tbody) return;
    RR_RESULTS.forEach((row, i) => {
        const tr = document.createElement('tr');
        let cells = `<td class="rr-name">${PLAYERS[i].name}</td>`;
        row.forEach((res, j) => {
            if (res === null) {
                cells += `<td class="rr-self"></td>`;
            } else if (res === 'W') {
                cells += `<td class="rr-win"><span class="result-icon win-icon" title="Victoria Limpia">V</span></td>`;
            } else if (res === 'CW') {
                cells += `<td class="rr-win"><span class="result-icon cw-icon" title="Victoria Cerrada">VC</span></td>`;
            } else if (res === 'CL') {
                cells += `<td class="rr-loss"><span class="result-icon cl-icon" title="Derrota Cerrada">DC</span></td>`;
            } else if (res === 'L') {
                cells += `<td class="rr-loss"><span class="result-icon loss-icon" title="Derrota Limpia">D</span></td>`;
            } else {
                cells += `<td class="rr-pending"><span class="result-icon pending-icon" title="Pendiente">-</span></td>`;
            }
        });
        tr.innerHTML = cells;
        tbody.appendChild(tr);
    });

    /* Actualizar encabezados de columna con nombres de jugadores */
    const ths = document.querySelectorAll('#rrTable thead th');
    PLAYERS.forEach((p, i) => { ths[i + 1].textContent = p.name; });
}

/* ============================================================
   RENDERIZAR TABLA DE PUNTOS
   ============================================================ */
function renderPoints() {
    const tbody = document.querySelector('#pointsTable tbody');
    if (!tbody) return;
    const stats = PLAYERS.map((p, i) => {
        let w = 0, cw = 0, cl = 0, l = 0, pts = 0;
        RR_RESULTS[i].forEach(r => {
            if (r === 'W') { w++; pts += 3; }
            else if (r === 'CW') { cw++; pts += 2; }
            else if (r === 'CL') { cl++; pts += 1; }
            else if (r === 'L') { l++; }
        });
        return { name: p.name, w, cw, cl, l, pts };
    });
    stats.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.w !== a.w) return b.w - a.w;
        return b.cw - a.cw;
    });

    stats.forEach((s, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="pts-rank">${i + 1}</td>
        <td>${s.name}</td>
        <td class="pts-win">${s.w}</td>
        <td class="pts-cw">${s.cw}</td>
        <td class="pts-cl">${s.cl}</td>
        <td class="pts-loss">${s.l}</td>
        <td class="pts-total">${s.pts}</td>
    `;
        tbody.appendChild(tr);
    });
}

/* ============================================================
   REVELAR AL DESPLAZARSE
   ============================================================ */
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   RENDERIZAR ESTADÍSTICAS DE EQUIPO
   ============================================================ */
function renderTeamStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;

    const counts = {};
    const images = {};
    PLAYERS.forEach(p => {
        p.team.forEach(pk => {
            counts[pk.name] = (counts[pk.name] || 0) + 1;
            images[pk.name] = pk.img;
        });
    });

    const repeated = Object.keys(counts)
        .filter(name => counts[name] > 1)
        .map(name => ({
            name: name,
            count: counts[name],
            img: images[name],
            percentage: Math.round((counts[name] / PLAYERS.length) * 100)
        }))
        .sort((a, b) => b.count - a.count);

    if (repeated.length === 0) {
        grid.innerHTML = '<p>No hay Pokémon repetidos en los equipos.</p>';
        return;
    }

    repeated.forEach(pk => {
        const item = document.createElement('div');
        item.className = 'stat-item';
        item.innerHTML = `
            <img src="${pk.img}" alt="${pk.name}" class="stat-img">
            <div class="stat-info">
                <h4>${pk.name}</h4>
                <div class="stat-bar-container">
                    <div class="stat-bar" style="width: ${pk.percentage}%; background-color: ${TYPE_COLORS[(POKEMON_TYPES[pk.name] || ['Normal'])[0]] || 'var(--primary-color)'}"></div>
                </div>
                <span class="stat-value">${pk.percentage}% (${pk.count}/${PLAYERS.length} equipos)</span>
            </div>
        `;
        grid.appendChild(item);
    });
}

/* ============================================================
   INICIAR
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    if (document.getElementById('playersGrid')) {
        renderPlayers();
        renderTeamStats();
        renderRR();
        renderPoints();
    }
    if (document.getElementById('radarLegend')) {
        drawRadarLegend();
    }
});
