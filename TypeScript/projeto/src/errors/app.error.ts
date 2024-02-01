import { StatusCodes } from "http-status-codes" // Semantica*anotar (Ele é basicamente um enum)

export class AppError extends Error { // Herança*anotar
    public statusCode: StatusCodes

    constructor(message: string, statusCode: StatusCodes) {
        super(message)

        this.statusCode = statusCode
    }
}