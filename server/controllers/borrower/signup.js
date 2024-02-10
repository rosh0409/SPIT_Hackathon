import BorrowerPD from "../../models/borrowerPD.js";
// console.log(uniquefile);
export const BorrowerSignup = async (req, res) => {
  try {
    console.log("1");
    console.log(req.body);
    //destructuring the body
    const {
      name,
      email,
      password,
      confPass,
      /*gender,*/ mobile /*, city, state */,
    } = req.body;
    const profile = req.file.filename;
    console.log(profile);
    //!checking every variable contains value
    if (
      name &&
      email &&
      password &&
      confPass &&
      // gender &&
      profile &&
      mobile /* &&
      city &&
      state*/
    ) {
      //!both password and confirm password should be same
      if (password === confPass) {
        console.log("here1");

        if (!(await BorrowerPD.findOne({ email }))) {
          console.log("here2");

          //! Creating user schema
          const user = new BorrowerPD({
            name,
            email,
            password,
            // gender,
            profile,
            mobile,
            // city,
            // state,
          });

          //!saving user to database
          const userStatus = await user.save();
          console.log(userStatus);
          return res.status(200).json({
            status: "success",
            message: "Registration successfull :-) ",
            user: user,
          });
        } else {
          return res.status(400).json({
            status: "failed",
            message: "Email already exists :-(",
          });
        }
      } else {
        return res.status(400).json({
          status: "failed",
          message: "Password and Confirm Password does not match :-(",
        });
      }
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Please fill all the fields :-(",
      });
    }
  } catch (error) {
    return new Error(error.message);
  }
};
