const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetilUserSchema = new Schema(
  {
    detilUid: {
      type: mongoose.Schema.Types.ObjectId, // <-- DIUBAH MENJADI ObjectId
      ref: "User", // <-- Tambahkan referensi ke model User
      required: true,
    },
    namaLengkap: {
      type: String,
      default: "",
    },
    fotoProfil: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    linkedinUrl: {
      type: String,
      default: "",
    },
    instagramUrl: {
      type: String,
      default: "",
    },
    noWa: {
      type: String,
      default: "",
    },
    pernyataanUrl: {
      type: String,
      default: "",
    },
    permohonanBarang: {
      type: Array, // Pertimbangkan jika ini harus menjadi ObjectId referensi jika isinya ID
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DetilUser", DetilUserSchema);
