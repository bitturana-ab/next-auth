import mongoose from "mongoose";
export async function dbConnect() {
    try {
        // in typescript, we can use the non-null assertion operator (!) to assert that process.env.MONGO_URL is not undefined >> it's meand that i take care of the environment variable
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log("Database connected successfully");
        });
        connection.on('error', (err) => {
            console.log("Database connection error:",err)
            process.exit(1); // Exit the process if there's an error
        });
        connection.on('disconnected', () => {
            console.log("Database disconnected");
        });

    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to the database");
        
    }
}