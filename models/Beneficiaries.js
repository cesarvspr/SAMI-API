const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const BeneficiariesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    enum: ["basic", "standard", "premium"],
    default: "basic",
  },
  cpf: {
    type: Number,
    required: true,
  },
  rg: {
    type: Number,
    required: true,
  },
  dependents: {
    type: Number,
    default: "0",
  },
});

BeneficiariesSchema.plugin(timestamp);

const Beneficiary = mongoose.model("Beneficiaries", BeneficiariesSchema);
module.exports = Beneficiary;
