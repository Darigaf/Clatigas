// Util: pega ?id=... da URL
function getQueryId() {
  const p = new URLSearchParams(window.location.search);
  return p.get("id"); // string ou null
}

// Mock para funcionar já — depois você troca pelo backend
const MOCK_SONGS = {
  pipoca: {
    id: "pipoca",
    titulo: "Pipoca",
    tags: [
      { label: "Cifra", style: "badge-dark" },
      { label: "Clássicas", style: "" },
      { label: "Geral", style: "badge-blue" },
      { label: "Jogos/Dança", style: "" },
    ],
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    versos: [
      {
        versao: "Versão 1",
        texto:
`Uma pipoca estourando na panela
Outra pipoca vem correndo responder
Aí começa um tremendo falatório
E ninguém mais consegue entender

É um tal de ploc (1 pulo pra frente)
Plo-ploc ploc ploc (3 pulos pra trás)
Plo-ploc ploc ploc (3 pulos pra direita)
Plo-ploc ploc ploc
Ploc (3 pulos pra esquerda)`
      },
      {
        versao: "Versão 2",
        texto:
`(VERSÃO 2)
Repete o refrão e alterna os pulos
com palmas ao final de cada bloco.`
      },
      {
        versao: "Versão 3",
        texto:
`(VERSÃO 3)
Variação com chamada e resposta em duplas.`
      }
    ]
  }
};

const TAG_CLASS = {
  "geral":        "chip--geral",
  "lobo":         "chip--lobo",
  "escoteiro":    "chip--escoteiro",
  "senior":       "chip--senior",
  "sênior":       "chip--senior",     // redundância por segurança
  "pioneiro":     "chip--pioneiro",
  "cerimonial":   "chip--cerimonial",
  "classicas":    "chip--classicas",
  "clássicas":    "chip--classicas",

  // categorias “cinza” na busca (sem cor própria)
  "repeticao":    "chip--cinza",
  "caminhada":    "chip--cinza",
  "grupo":        "chip--cinza",
  "gestual":      "chip--cinza",
  "jogos-danca":  "chip--cinza",

  // extra que não existe na busca mas você usa nas músicas
  "cifra":        "chip--cifra"
};

// Se você já tiver um endpoint, defina aqui:
async function fetchSongById(id) {
  // Tente back-end (ajuste a URL abaixo quando tiver PHP que devolva JSON)
  // Exemplo esperado de resposta:
  // { titulo, tags:[{label,style}], videoUrl, versos:[{versao,texto},...] }
  try {
    // const res = await fetch(`../clatig/musica.php?id=${encodeURIComponent(id)}`);
    // if (res.ok) return await res.json();
  } catch (e) { /* ignora e usa mock */ }

  // fallback: mock
  return MOCK_SONGS[id] || MOCK_SONGS["pipoca"];
}

function keyForTag(label) {
  return label
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // remove acentos
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-");
}

function renderSong(song) {
  // Título
  document.getElementById("song-title").textContent = song.titulo;

  // Tags
  renderSongTags(song.tags);

  // Versões (botões)
  const switchEl = document.getElementById("version-switch");
  switchEl.innerHTML = "";
  song.versos.forEach((v, idx) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (idx === 1 ? " is-active" : ""); // dexa "Versão 2" ativa como no mock
    btn.textContent = v.versao;
    btn.addEventListener("click", () => {
      // estado ativo
      switchEl.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      // letra
      document.getElementById("song-lyrics").textContent = v.texto;
    });
    switchEl.appendChild(btn);
  });

  // Letra inicial (usa a segunda versão se existir)
  const startIndex = song.versos[1] ? 1 : 0;
  document.getElementById("song-lyrics").textContent = song.versos[startIndex].texto;

  // Player (YouTube embed se existir)
  const slot = document.getElementById("video-slot");
  slot.innerHTML = "";
  if (song.videoUrl) {
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = song.videoUrl;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.style.position = "absolute";
    iframe.style.inset = "0";
    slot.appendChild(iframe);
  } else {
    // mantém o placeholder
    slot.innerHTML = `
      <div class="video-placeholder">
        <span class="play-triangle"></span>
      </div>`;
  }
}

function renderSongTags(tags) {
  const tagsEl = document.getElementById("song-tags");
  tagsEl.innerHTML = "";
  tags.forEach(t => {
    const label = typeof t === "string" ? t : (t.label || "");
    const k = keyForTag(label);
    const cls = TAG_CLASS[k] || "chip--cinza";
    const el = document.createElement("span");
    el.className = `chip ${cls}`;
    el.textContent = label;
    tagsEl.appendChild(el);
  });
}

(async function init() {
  // se você monta o header dinamicamente, este script mantém compatibilidade
  if (window.renderHeader) {
    // renderHeader(containerId, { ...opções });
    try { window.renderHeader("site-header", { active: "musica" }); } catch(e){}
  }

  const id = (getQueryId() || "pipoca").toLowerCase();
  const song = await fetchSongById(id);
  renderSong(song);
})();
