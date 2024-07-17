import mongoose from "mongoose";

// export const ConnectDB = async () => {
//   await mongoose.connect(`${process.env.DATABASE_URI}next-blog-in`);
//   console.log("DB Connected");
// };

const MONGODB_URI = `${process.env.DATABASE_URI}next-blog-in`;

let cached = mongoose || { conn: null, promise: null };

export const ConnectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);

  cached.conn = await cached.promise;

  return cached.conn;
};
