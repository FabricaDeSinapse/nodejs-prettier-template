function funcao() {
    console.log('Função de teste');
}

const numero = 2;
const outroNumero = 55;
const nome = 'Paulo';
const sobrenome = 'Salvatore';

const idCanal = nome + sobrenome;

const urlCanal = `https://www.youtube.com/c/${nome}`;
const funcaoArrow = () => {
    console.info('Função arrow');
};

const nomeCompleto = nome + ' ' + sobrenome;

if (typeof idCanal === 'string') {
    console.log('youtube');
} else {
    console.log('');
}
