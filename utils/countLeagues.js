import fs from 'fs';
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
        const brazil = selecoes.find(el => el.selecao === 'Brasil' )
        console.log(brazil)
        return selecoes.length
    }
    catch(e){
            console.error('Ocorreu um erro:', e);
    }
}

console.log(await lerJson())