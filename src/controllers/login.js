import userModel from "../models/user.js";

export const loginUser = async (req, res) =>{
    try {
        const {userName, password} = req.body;
        const user = await userModel.findOne({userName: userName});

        if(!user){
            res.status(404).send("User does not exist!");
            return;
        }

        if(user.password == password){
            //token 
            res.status(200).json({token: 'SAMPLE-TOKEN-AKDKFHEIUUNDDCDOEUDDJDNKEURIESS', user: user});
        }
    } catch (error) {
        console.log(error);
        res.status(404).send("User does not exist!")
    }

}