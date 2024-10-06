import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://moulish:admin@cluster0.0b95u.mongodb.net/foodDelivery"
    )
    .then(() => console.log("DB Connected"));
};
