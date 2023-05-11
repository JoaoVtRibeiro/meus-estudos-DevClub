import multer from 'multer' // biblioteca que permite adicionar upload de arquivos
import { v4 } from 'uuid'
import { extname, resolve } from 'path' // extname pega 

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) => {
            return callback(null, v4() + extname(file.originalname))
        }
    })
}