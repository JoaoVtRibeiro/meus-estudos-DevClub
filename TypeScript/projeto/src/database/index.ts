import mongoose from 'mongoose'

export async function setupMong(): Promise<void> {
    try {
        if (mongoose.connection.readyState === 1) {
            return
        }


        console.log('Connecting to DB...')
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected!')
    } catch {
        throw new Error(' DB not connected')
    }

}