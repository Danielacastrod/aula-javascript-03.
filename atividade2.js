function verificaSO(resp){

    var resp = resp;
        
    if (resp == 'linux') {
     console.log('O Linux é um sistema operacional de código aberto.')
    } else if (resp == 'windows') {
        console.log('O Windows é um sistema operacional da empresa Microsoft.')
    } else if (resp == 'macOS') {
        console.log('O macOS é um sistema operacional da empresa Apple.')
    } else if (resp == 'chrome OS') {
        console.log('O chrome OS é um sistema operacional da empresa Google.')
    } else {
        console.log('Há a possibilidade de você estar utilizando um sistema mobile.')
    }

    }
    verificaSO("linux");

