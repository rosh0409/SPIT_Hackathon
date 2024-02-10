import multer from "multer";
import fs from "fs";

// image uploading storage
export let uniquefile = "";
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("1");
    if (!fs.existsSync("public")) {
      console.log("2");
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/uploads")) {
      console.log("3");
      fs.mkdirSync("public/uploads");
    }
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    console.log("4");
    const uniqueSuffix = Date.now();
    uniquefile = uniqueSuffix + file.originalname;
    cb(null, uniqueSuffix+"_" + file.originalname);
    // console.log(file.path)
  },
});
