const cadastroForm = document.getElementById('cadastroForm');
  const cepInput = document.getElementById('cep');
  const ruaInput = document.getElementById('rua');
  const bairroInput = document.getElementById('bairro');
  const cidadeInput = document.getElementById('cidade');
  const estadoInput = document.getElementById('estado');

  cepInput.addEventListener('blur', async () => {
    const cepValue = cepInput.value.replace(/\D/g, '');

    if (cepValue.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          ruaInput.value = data.logradouro;
          bairroInput.value = data.bairro;
          cidadeInput.value = data.localidade;
          estadoInput.value = data.uf;
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    }
  });

  cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });