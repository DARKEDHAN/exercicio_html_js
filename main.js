document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('meuFormulario');
    
    formulario.onsubmit = function(event) {
        event.preventDefault();

        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);

        if (campoB > campoA) {
            alert('Formulário válido! Aí sim! O Número B é maior que o número A.');
            formulario.submit();
        } else {
            alert('Formulário inválido, Tente novamente e lembre-se que o número B deve ser maior que o número A Ok?');
        }
    };
});
