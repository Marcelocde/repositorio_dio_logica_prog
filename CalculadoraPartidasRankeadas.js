// #Calculadora de Partidas Rankeadas#

        // descriminação da função
        
        function subtração( qVitorias , qDerotas ) {

            rank = qVitorias - qDerotas

            return rank

        }
        // Chamando a função

        let saldoRankeadas = subtração( 55, 2)
    
        // estrutura de decisão

        if (saldoRankeadas <= 10) {
            var xp ="Ferro"
        }
        else if (saldoRankeadas >= 11 && saldoRankeadas <=20 ) {
            var xp ="Bronze"
        }
        else if (saldoRankeadas >= 21 && saldoRankeadas <=50 ) {
            var xp ="Prata"
        }

        else if (saldoRankeadas >= 51 && saldoRankeadas <=80 ) {
            var xp ="Ouro"
        }
        else if (saldoRankeadas >= 81 && saldoRankeadas <= 90 ) {
            var xp ="Diamante"
        }
        else if (saldoRankeadas >= 91 && saldoRankeadas <=100 ) {
            var xp ="Ascendente"
        }
        else{
            var xp ="Imortal"
        }
        // saida

        console.log( "O Heroi tem de saldo de " + saldoRankeadas + ", esta no nivel de " + xp + ".")