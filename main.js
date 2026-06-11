/* ============================================================
   DATOS DE JUGADORES — Edita este objeto para actualizar toda la página.
   Escala de calificación: A (mejor) → F (peor). Se mapea a 6→1 para el gráfico.
   ============================================================ */
const PLAYERS = [
    {
        name: "alonsopf89",
        code: "5546 3274 8523",
        avatar: "images/alonsopf89.png",
        grades: { cobertura: "C", seguridad: "D", consistencia: "A", aguante: "D" },
        team: [
            { img: "images/Diglett.png", name: "Diglett", fast: "Disparo de Lodo (3T)", charged1: "Retribucion (7)", charged2: "Bomba Fango (5-)" },
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
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7)", charged2: "Terratemblor (7)" },
            { img: "images/CorsolaG.png", name: "Corsola de Galar", fast: "Impresionar (3T)", charged1: "Tinieblas (5-)", charged2: "Joya de Luz (5)" },
            { img: "images/Diggersby.png", name: "Diggersby", fast: "Disparo Lodo (2T)", charged1: "Puño Fuego (5-)", charged2: "Arenas Ardientes (6-)" },
            { img: "images/Feraligatr.png", name: "Feraligatr Obscuro", fast: "Garra Umbría (2T)", charged1: "Hidrocañón (5)", charged2: "Rayo Hielo (7)" },
            { img: "images/registeel.png", name: "Registeel", fast: "Fijar Blanco (1T)", charged1: "Electrocañón (16)", charged2: "Onda Certera (15)" },
            { img: "images/altaria.png", name: "Altaria", fast: "Dragoaliento (1T)", charged1: "Lanzallamas (14)", charged2: "Ataque Aéreo (12-)" }
        ]
    },
    {
        name: "DizzyJuanito19",
        code: "8115 6799 5758",
        avatar: "images/DizzyJuanito19.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "A", aguante: "B" },
        team: [
            { img: "images/Lickilicky.png", name: "Lickilicky", fast: "Desenrollar (3T)", charged1: "Golpe Cuerpo (3)", charged2: "Bola Sombra (5)" },
            { img: "images/Fearow.png", name: "Fearow", fast: "Picotazo (2T)", charged1: "Taladradora (5)", charged2: "Pico Taladro (5)" },
            { img: "images/Quagsire.png", name: "Quagsire", fast: "Disparo Lodo (2T)", charged1: "Acua Cola (4)", charged2: "Roca Afilada (6)" },
            { img: "images/Aromatisse.png", name: "Aromatisse", fast: "Viento Feérico (2T)", charged1: "Psicocarga (5)", charged2: "Fuerza Lunar (8)" },
            { img: "images/Diggersby.png", name: "Diggersby", fast: "Disparo Lodo (2T)", charged1: "Puño Fuego (5-)", charged2: "Arenas Ardientes (6)" },
            { img: "images/Dusclops.png", name: "Dusclops", fast: "Infortunio (3T)", charged1: "Puño Hielo (4-)", charged2: "Puño Sombra (3)" }
        ]
    },
    {
        name: "Hecvas11",
        code: "1264 0548 4249",
        avatar: "images/Hecvas11.png",
        grades: { cobertura: "A", seguridad: "B", consistencia: "B", aguante: "B" },
        team: [
            { img: "images/Jellicent.png", name: "Jellicent", fast: "Infortunio (3T)", charged1: "Surf (4-)", charged2: "Bola Sombra (5)" },
            { img: "images/Azumarill.png", name: "Azumarill", fast: "Burbuja (3T)", charged1: "Juego Rudo (6-)", charged2: "Rayo Hielo (5)" },
            { img: "images/Malamar.png", name: "Malamar", fast: "Psicocorte (2T)", charged1: "Fuerza Bruta (5-)", charged2: "Juego Sucio (5)" },
            { img: "images/Annihilape.png", name: "Annihilape", fast: "Contrataque (2T)", charged1: "Puño Furia (5)", charged2: "Puño Hielo (6)" },
            { img: "images/Feraligatr.png", name: "Feraligatr Obscuro", fast: "Garra Umbría (2T)", charged1: "Hidrocañón (5)", charged2: "Rayo Hielo (7)" },
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7)", charged2: "Terratemblor (7)" }
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
            { img: "images/Tinkaton.png", name: "Tinkaton", fast: "Viento Feérico (2T)", charged1: "Martillo Colosal (7)", charged2: "Terratemblor (7)" },
            { img: "images/Lickilicky.png", name: "Lickilicky", fast: "Desenrollar (3T)", charged1: "Golpe Cuerpo (3)", charged2: "Bola Sombra (5)" },
            { img: "images/Seismitoad.png", name: "Seismitoad", fast: "Disparo Lodo (2T)", charged1: "Viento Hielo (5-)", charged2: "Tierra Viva (6)" }
        ]
    },
    {
        name: "Jugador 6",
        code: "6789 0123 4567",
        avatar: "images/placeholderAvatar.png",
        grades: { cobertura: "C", seguridad: "A", consistencia: "C", aguante: "A" },
        team: [
            { img: "images/placeholderPokemon.png", name: "Tropius", fast: "Ala de Acero (2T)", charged1: "Hoja Mágica (6)", charged2: "Aéreo As (8-)" },
            { img: "images/placeholderPokemon.png", name: "Munchlax", fast: "Lengüetazo (1T)", charged1: "Golpe Cuerpo (12)", charged2: "Terratem. (20)" },
            { img: "images/placeholderPokemon.png", name: "Carbink", fast: "Roca Afilada (2T)", charged1: "Fuerza Lunar (14)", charged2: "Pu. Dinámico (10)" },
            { img: "images/placeholderPokemon.png", name: "Charjabug", fast: "Chispa (2T)", charged1: "Rayo X (5-)", charged2: "Descarga (6)" },
            { img: "images/placeholderPokemon.png", name: "Sableye", fast: "Garra Umbría (2T)", charged1: "Puño Certero (5)", charged2: "Bola Sombra (8-)" },
            { img: "images/placeholderPokemon.png", name: "Azumarill", fast: "Burbuja (3T)", charged1: "Rayo Hielo (5)", charged2: "Carantoña (6-)" }
        ]
    },
    {
        name: "Jugador 7",
        code: "7890 1234 5678",
        avatar: "images/placeholderAvatar.png",
        grades: { cobertura: "D", seguridad: "C", consistencia: "B", aguante: "B" },
        team: [
            { img: "images/placeholderPokemon.png", name: "Machamp", fast: "Contraataque (2T)", charged1: "Puño Dinám. (8-)", charged2: "A Bocajarro (7-)" },
            { img: "images/placeholderPokemon.png", name: "Pidgeot", fast: "Ala de Acero (2T)", charged1: "Pájaro Osado (10-)", charged2: "Vendaval (11)" },
            { img: "images/placeholderPokemon.png", name: "Poliwrath", fast: "Disparo Lodo (2T)", charged1: "Puño Dinám. (6)", charged2: "Rayo Hielo (7-)" },
            { img: "images/placeholderPokemon.png", name: "Ariados", fast: "Puya Nociva (2T)", charged1: "A Bocajarro (7-)", charged2: "Hilo Venenoso (6)" },
            { img: "images/placeholderPokemon.png", name: "Steelix", fast: "Cola Dragón (3T)", charged1: "Pu. Certero (4-)", charged2: "Terremoto (6-)" },
            { img: "images/placeholderPokemon.png", name: "Lanturn", fast: "Chispa (2T)", charged1: "Hidrobomba (10-)", charged2: "Rayo (8-)" }
        ]
    },
    {
        name: "Jugador 8",
        code: "8901 2345 6789",
        avatar: "images/placeholderAvatar.png",
        grades: { cobertura: "B", seguridad: "B", consistencia: "C", aguante: "A" },
        team: [
            { img: "images/placeholderPokemon.png", name: "Registeel", fast: "Cerrojo (1T)", charged1: "Onda Certera (15)", charged2: "Lanzallamas (11)" },
            { img: "images/placeholderPokemon.png", name: "Altaria", fast: "Aliento Dragón (1T)", charged1: "Meteoro Dragón (17-)", charged2: "Pulso Umbrío (13-)" },
            { img: "images/placeholderPokemon.png", name: "Swampert", fast: "Pistola Agua (1T)", charged1: "Hidrocañón (14-)", charged2: "Terremoto (22)" },
            { img: "images/placeholderPokemon.png", name: "Venusaur", fast: "Látigo Cepa (2T)", charged1: "Planta Feroz (7-)", charged2: "Bomba Lodo (8-)" },
            { img: "images/placeholderPokemon.png", name: "Umbreon", fast: "Alarido (3T)", charged1: "Último Recurso (5-)", charged2: "Pulso Umbrío (4)" },
            { img: "images/placeholderPokemon.png", name: "Skarmory", fast: "Ala de Acero (2T)", charged1: "Pájaro Osado (10-)", charged2: "Ala de Acero (9-)" }
        ]
    }
];

/* Matriz de resultados Round-robin. "W"=Victoria Limpia(3), "CW"=Victoria Cerrada(2), "CL"=Derrota Cerrada(1), "L"=Derrota Limpia(0), null = mismo jugador */
const RR_RESULTS = [
    //  J1     J2     J3     J4     J5     J6     J7     J8
    [null, "W", "CW", "L", "W", "W", "W", "L"],  // J1
    ["L", null, "L", "CW", "L", "CW", "CL", "W"],  // J2
    ["CL", "CW", null, "CW", "CL", "L", "W", "W"],  // J3
    ["CW", "CL", "CL", null, "CW", "CL", "W", "L"],  // J4
    ["CL", "CW", "CW", "CL", null, "CW", "CW", "W"],  // J5
    ["CL", "CL", "CW", "CW", "CL", null, "CL", "CW"],  // J6
    ["CL", "W", "L", "L", "L", "W", null, "W"],  // J7
    ["W", "CL", "L", "W", "CL", "L", "L", null]   // J8
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
                        <img src="${pk.img}" alt="${pk.name}" class="poke-img">
                        <span class="poke-name">${pk.name}</span>
                        <div class="poke-moves">
                            <span class="move fast-move">${pk.fast}</span>
                            <span class="move charged-move">${pk.charged1}</span>
                            <span class="move charged-move">${pk.charged2}</span>
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
            } else {
                cells += `<td class="rr-loss"><span class="result-icon loss-icon" title="Derrota Limpia">D</span></td>`;
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
   INICIAR
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    if (document.getElementById('playersGrid')) {
        renderPlayers();
        renderRR();
        renderPoints();
    }
});
