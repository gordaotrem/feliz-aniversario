// Configura a data de início do relacionamento (substitua pela sua data)
const startDate = new Date('2025-03-12'); // Formato: AAAA-MM-DD

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Diferença em milissegundos
    
    // Calcula os diferentes valores de tempo
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Média de dias por mês
    const years = Math.floor(months / 12);
    
    // Atualiza os valores na página
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months % 12;
    document.getElementById('days').textContent = days % 30;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

// Atualiza o contador imediatamente e a cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// Função para adicionar mais fotos (opcional)
function addPhoto(imageUrl) {
    const gallery = document.querySelector('.photos');
    const newPhoto = document.createElement('div');
    newPhoto.className = 'photo';
    newPhoto.innerHTML = `<img src="${imageUrl}" alt="Nossa foto">`;
    gallery.appendChild(newPhoto);
}

// Exemplo de como adicionar uma foto (você pode chamar essa função quando quiser)
// addPhoto('URL_DA_IMAGEM_AQUI');

const gif = document.getElementById("gifRodape");

let posX = 0;
let speed = 0.5;

function bouncingGIF() {
  posX += speed;

  // Verifica se encostou nas bordas da tela
  if (posX + gif.offsetWidth >= window.innerWidth || posX <= 0) {
    speed = -speed; // inverte direção
    gif.style.transform = speed > 0 ? "scaleX(-1)" : "scaleX(1)";
  }

  gif.style.left = posX + "px";

  requestAnimationFrame(bouncingGIF);
}

bouncingGIF();