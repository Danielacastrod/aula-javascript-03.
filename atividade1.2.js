function verificaEnsino(resp){
    var resp = resp;
        
        if (resp == 'sim' || resp == 'SIM'){
        console.log('Poxa, que legal')
    
        } else if (resp == 'nao'){
            console.log('Falta pouco! Logo você termina.')
    
        }
        else {
            console.log('resposta não reconhecida')
        }
        
    }
        verificaEnsino("SIM");

