// 1. Seleciona todos os inputs dentro da classe .controls
const inputs = document.querySelectorAll('.controls input');

// 2. Função que atualiza as variáveis
function handleUpdate() {
  // Pega o sufixo 'px' (pixels) do atributo data-sizing. 
  // Se não tiver sufixo (como no caso da cor), ele usa uma string vazia ''
  const suffix = this.dataset.sizing || '';
  
  // Atualiza a variável CSS diretamente no documento inteiro (documentElement é o HTML)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// 3. Adiciona "escutadores" de eventos para rodar a função
inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Quando clica e solta
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // Quando arrasta o slider
