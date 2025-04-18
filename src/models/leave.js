import mongoose from 'mongoose';

export const LeaveSchema = mongoose.Schema({
    fulName : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : 'pending'
    },
    department : {
        type : String,
         required : true,
    },
    leaveFrom : {
        type : {
            
        }
    }
})

// "userId": "3491",
//       "fullName": "Test AI user",
//       "status": "pending",
//       "department": "AI",
//       "leaveFrom": {
//         "year": 2025,
//         "month": 4,
//         "day": 10
//       },
//       "leaveTo": {
//         "year": 2025,
//         "month": 4,
//         "day": 12
//       },
//       "reason": "test"