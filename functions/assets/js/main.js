const buttonSquare = document.getElementById("calcolaAreaQuadrato");

buttonSquare.addEventListener('click', function() {
    console.log('click')
    let lato = prompt('Inserire il lato');
    let area = calcolaAreaDelQuadrato(lato)
    alert(area);
});

function calcolaAreaDelQuadrato(latoDelQuadrato) {
    return latoDelQuadrato * latoDelQuadrato;
}
