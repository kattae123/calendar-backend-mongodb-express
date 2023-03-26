const mongoose = require('mongoose');


const dbConection = async () => {

    mongoose.set('strictQuery', true);


    try {

        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online')
    } catch (error) {
        console.log(error)
        throw new Error('error a la hora de inicializar la base de datos')
    }

}

module.exports = dbConection