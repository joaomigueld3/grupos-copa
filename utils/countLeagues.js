import fs from 'fs';
import { validateHeaderName } from 'http';
import { type } from 'os';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Recria o __dirname para o ambiente de Módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
async function lerJson() {
    try {
        const filePath = path.join(__dirname, '../selecoes.json');
        const  jsonString = await fs.readFileSync(filePath, 'utf8')
        const selecoes = JSON.parse(jsonString);
        console.log(selecoes)
        const ligas = selecoes.map(el => el.liga)
        console.log(ligas)
        return selecoes
    }
    catch(e){
            console.error('Ocorreu um erro:', e);
    }
}

const selecoes = await lerJson();

function addArrayReturnBool (array, value) {
    console.log("--------addArrayReturnBool----------")
    let flag = false
    for (let i=0; i < array.length; i++) {
        if(!array.includes(value)) {
            array.push(value)
            flag=true
            break
        }
    }
    return flag
}

const arrayNums = [1,2,3]
console.log(addArrayReturnBool(arrayNums, 4), arrayNums)

function ligasFrequenciasDumb (selecoes) {
    console.log("--------ligasFrequenciasDumb----------")
    const stackLiga = []
    const stackFreq = []
    selecoes.forEach(element => {
        let freq = 0
        if (!stackLiga.includes(element.liga)) {
            stackLiga.push(element.liga)
            stackFreq.push(freq++)
        }
        let index = stackLiga.indexOf(element.liga)
        stackFreq[index]++
    });
    console.log(stackLiga, "\n", stackFreq)


    const pares = stackLiga.map((liga, i) => [liga, stackFreq[i]])
    const result = Object.fromEntries(pares)
    return result
   }
console.log(ligasFrequenciasDumb(selecoes))

const obterFrequencias = (array, atributo) => {
    const contagem = {}
    for (const obj of array) {
        const valor = obj[atributo]
        if(!contagem[valor]) {
            contagem[valor] = 0
        }
        contagem[valor]++    
        
    }

    return Object.keys(contagem).map(key => ({
        atributo: key,
        freq: contagem[key]
    }))

}


const estatisticas = obterFrequencias(selecoes, 'liga');
console.log("--------////----------")
console.log(estatisticas);