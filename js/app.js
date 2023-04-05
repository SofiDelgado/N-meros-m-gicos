let NumeroRandom = 0;
let formulario = document.getElementById('ingresoNum')
formulario.addEventListener('submit',comparoNum);

function getRandomNum() {
    NumeroRandom = Math.floor(Math.random() * (100) + 1);
    console.log(NumeroRandom)
    return NumeroRandom 
  }

  function  comparoNum(e){
    e.preventDefault();
    let input = document.querySelector('input')
    dato = parseInt(input.value)
   //console.log(dato)
    //console.log(typeof dato)
    const seccionJuego = document.getElementById('seccionJuego')
    console.log(ingresoNum)

    if(dato<NumeroRandom && dato<=100 && dato>=1)
    {
        let ingresoNum = document.createElement('h3')
       ingresoNum.innerHTML = `El numero ${dato} es menor que el numero magico`;
       seccionJuego.appendChild(ingresoNum)
       formulario.reset();
    }
    else if(dato>NumeroRandom && dato<=100 && dato>=1)
    {
        let ingresoNum = document.createElement('h3')
        ingresoNum.innerHTML = `El numero ${dato} es mayor que el numero magico`;
        seccionJuego.appendChild(ingresoNum)
        formulario.reset();
    }
    else if(dato==NumeroRandom && dato<=100 && dato>=1)
    {
        let ingresoNum = document.createElement('h2')
        ingresoNum.innerHTML = `EL NUMERO ${dato} ES CORRECTO`;
        seccionJuego.appendChild(ingresoNum)
        formulario.reset();
    }
    else
    {
        let ingresoNum = document.createElement('h3')
        ingresoNum.innerHTML = `El numero ${dato} no esta entre 1 y 100`;
        ingresoNum.className= 'danger'
        seccionJuego.appendChild(ingresoNum)
        formulario.reset();
    }

  }