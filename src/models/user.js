import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    contactNumber : {
        type : String,
        required : true,
        unique : true
    },
    department : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profileImage : {
        type : String,
    }

},{
    timestamps : true
});

const UserModel = new mongoose.model("User", UsersSchema);

export default UserModel;
