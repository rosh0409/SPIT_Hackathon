import LenderPD from "../../models/lenderPD.js";
// console.log(uniquefile);
export const LenderSignup = async (req, res) => {
  try {
    // console.log(req.body);
    //destructuring the body
    const { name, email, password, confPass, gender, mobile } = req.body;
    const profile = req.file.filename;
    console.log(name, email, password, confPass, gender, mobile, profile);
    console.log("q1");
    //!checking every variable contains value
    if (name && email && password && confPass && gender && profile && mobile) {
      console.log("q2");
      //!both password and confirm password should be same
      if (password === confPass) {
        console.log("q3");
        if (!(await LenderPD.findOne({ email }))) {
          console.log("q4");
          //! Creating user schema
          const user = new LenderPD({
            name,
            email,
            password,
            gender,
            profile,
            mobile,
          });

          console.log("q5");
          //!saving user to database
          const userStatus = await user.save();
          console.log(userStatus);
          console.log("1234");
          return res.status(200).json({
            status: "success",
            message: "Registration successfull :-) ",
            user: userStatus,
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
