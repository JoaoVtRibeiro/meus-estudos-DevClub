export class AppError extends Error { // Herança*anotar
    public statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)

        this.statusCode = statusCode
    }
}