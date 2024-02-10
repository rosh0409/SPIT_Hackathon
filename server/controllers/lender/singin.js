import bcryptjs from "bcryptjs";
import generateAuthToken from "../auth/generateToken.js";
import LenderPD from "../../models/lenderPD.js";

export const LenderSignin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email && !password) {
      return res.json({
        status: "failed",
        message: "Please fill all fields",
      });
    }
    if (await LenderPD.findOne({ email })) {
      const user = await LenderPD.findOne({ email });
      if (user) {
        // ! compare the passowrd with the hashed password in the database using bcryptjs
        const dePassword = await bcryptjs.compare(password, user.password);
        console.log(dePassword);
        // ! if the account is validated generate authtoken
        if (user.email && dePassword) {
          // ! generate authtoken for 2 days
          const token = generateAuthToken(user._id, "2d");
          //   console.log(token);
          // ! returning the response
          return (
            res
              .status(200)
              //! creatig a new token for the session for a duration of 24 hour and sending to the client
              .cookie("UserSession", token, {
                path: "/",
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true,
                sameSite: "strict",
              })
              .json({
                status: "success",
                message: "Login Successfull :-)",
                user,
                type:"lender"
                // token,
              })
          );
        }
      }
    }
    //! else case when no user is found
    return res.json({
      status: "failed",
      message: "Bad Credentials :-(",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
