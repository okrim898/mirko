const ore = 999;

function assenze() {
    const n = parseInt(document.getElementById("progresso").value);
    const oreAssenza = n * 6;
    const orePresenti = ore - oreAssenza;
    const percentuale = (100 * orePresenti) / ore;
    document.getElementById("barra").style.width = percentuale + "%";
}
