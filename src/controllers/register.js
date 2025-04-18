import UserModel from "../models/user.js"

export const registerUser = async(req, res) =>{

    try {

        const {fullName, userName, email, contactNumber, department, role, password, profileImage} = req.body;
        console.log(req)
          const newUser = new UserModel({
            fullName,
            userName,
            email,
            contactNumber,
            department,
            role,
            password,
            profileImage
          });
          await newUser.save();

          res.status(200).send("user created ")
    } catch (error) {
        console.log(error);
        res.status(400).send("bad request ")
        
    }


}