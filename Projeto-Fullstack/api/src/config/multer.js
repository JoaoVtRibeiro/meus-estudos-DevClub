import multer from 'multer' // biblioteca que permite adicionar upload de arquivos
import { v4 } from 'uuid'
import { extname, resolve } from 'path' // extname irá extrair a extensão do arquivo, ex: .json, .js

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) => {
            return callback(null, v4() + extname(file.originalname))
        }
    })
}
