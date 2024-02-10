import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const LenderPD = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    profile: {
      type: String,
      require: true,
    },
    orgName: {
      type: String,
    },
    interestRate: {
      type: Number,
    },
    maxLoan: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

LenderPD.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    // hash paaword
    console.log("1");
    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(this.password, salt);
    console.log(hashPass);
    this.password = hashPass;
    next();
  } catch (error) {
    console.log(error.message);
  }
});

export default mongoose.model("lenderPD", LenderPD);
