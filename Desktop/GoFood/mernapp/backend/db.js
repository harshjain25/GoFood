const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const { Z_DATA_ERROR } = require('zlib');
const mongoURI= "mongodb://gofood:9997@ac-m7gs00z-shard-00-00.1ydjl8j.mongodb.net:27017,ac-m7gs00z-shard-00-01.1ydjl8j.mongodb.net:27017,ac-m7gs00z-shard-00-02.1ydjl8j.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-2qadxr-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB= async() => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err)
                    console.log(err);
                else
                    console.log();
            });
        }
    });
}

module.exports=mongoDB;