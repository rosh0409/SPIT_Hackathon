import borrowerPD from "../../models/borrowerPD.js";

export const GetAllBorrower = async (req, res) => {
  try {
    console.log("wed");
    const borrrowers = await borrowerPD.find({});
    if (borrrowers.length !== 0) {
      return res.json({
        status: "success",
        message: "Borrowers found",
        borrrowers,
      });
    }
    return res.json({
      status: "failed",
      message: "Borrowers not found",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
