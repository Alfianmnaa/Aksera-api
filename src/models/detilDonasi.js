const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetilDonasiSchema = new Schema(
  {
    donasiId: {
      type: mongoose.Schema.Types.ObjectId, // <-- DIUBAH MENJADI ObjectId
      ref: "Donasi", // <-- Tambahkan referensi ke model Donasi
      required: true,
    },
    permohonan: [
      {
        pemohonId: {
          type: mongoose.Schema.Types.ObjectId, // <-- DIUBAH MENJADI ObjectId
          ref: "User", // <-- Tambahkan referensi ke model User
          required: true,
        },
        tujuanPermohonan: {
          type: String,
          required: true,
        },
      },
    ],
    namaStatus: {
      type: String,
      default: "tersedia",
    },
    deskripsiStatus: {
      type: String,
      default: "",
    },
    komunitasPengambilId: {
      type: mongoose.Schema.Types.ObjectId, // <-- DIUBAH MENJADI ObjectId
      ref: "User", // <-- Tambahkan referensi ke model User (asumsi komunitas adalah user dengan role komunitas)
      default: null, // Mengubah dari "" ke null, karena ObjectId kosong tidak valid
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DetilDonasi", DetilDonasiSchema);
