const mongoose = require('mongoose');
const db = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://brij4268:zw0FzSWZmX6VNpS0@cluster0.q2m1isw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    if (connection) console.log('MongoDb connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
