// Importa o HEADER do index e substitui o nó inteiro,
// preservando id/classes/estrutura para o CSS/JS funcionarem igual.
(async () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const isHttp = location.protocol === "http:" || location.protocol === "https:";
  if (!isHttp) {
    console.warn("[header-import] Abra via http://localhost para carregar o header (file:// bloqueia fetch).");
    return;
  }

  try {
    const res = await fetch("./index.html", { cache: "no-store" });
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    // pega o MESMO header do index (ajuste a ordem se seu index mudar)
    const src =
      doc.querySelector("#site-header") ||
      doc.querySelector("#app-header") ||
      doc.querySelector("header.site-header") ||
      doc.querySelector('header[role="banner"]') ||
      doc.querySelector("header");

    if (!src) {
      console.warn("[header-import] Não encontrei header no index.html.");
      return;
    }

    // clona o elemento completo (outer), mantendo id/classes
    const clone = src.cloneNode(true);

    // se já existir um elemento na página com o mesmo id (não deve),
    // evita duplicação trocando o id do clone
    if (clone.id && document.getElementById(clone.id) && mount.id !== clone.id) {
      clone.id = clone.id + "-cloned";
    }

    // substitui o container pela cópia exata do header do index
    mount.replaceWith(clone);

    // notifica que o header está pronto (caso alguém queira escutar)
    document.dispatchEvent(new CustomEvent("header:ready", { detail: { id: clone.id } }));
  } catch (err) {
    console.error("[header-import] Falha ao importar header do index:", err);
  }
})();
