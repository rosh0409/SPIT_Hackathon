import lenderPD from "../../models/lenderPD.js";

export const GetAllLender = async (req, res) => {
  try {
    console.log("wed");
    const lenders = await lenderPD.find({});
    if (lenders.length !== 0) {
      return res.json({
        status: "success",
        message: "Borrowers found",
        lenders,
      });
    }
    return res.json({
      status: "failed",
      message: "Lenders not found",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
