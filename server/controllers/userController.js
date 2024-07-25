const User = require("../models/userSchema")

exports.signUp = async(req,res)=>{
    try {
        const{name,email,password} = req.body;
        

        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).json({
                success:false,
                message:"User already Registered"
            })
        }
        
        const updatedUser = await User.create({name,email,password})

        res.status(200).json({
            success:true,
            data:updatedUser,
            message:"user Registered"
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Network issues"
        })
    }
}



exports.login = async(req,res)=>{
    try {
        
        const{email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Fill the input carefully"
            })
        }

        let user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success:false,
                message:"User is not Registered"
            })
        }

        res.status(200).json({
          success:true,
           message:"User Registered"})

    } catch (error) {
        console.log(error)
        return rs.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}