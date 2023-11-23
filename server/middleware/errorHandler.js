const { CustomError } = require("../error/customError")

const errorHandler = (error,req,res,next)=>{
    console.log(error instanceof CustomError)
    if(error instanceof CustomError)
        return res.status(error.statusCode).json({msg:error.message})
    return res.status(500).json({msg:"Something went wrong, please try again"})    
}

module.exports = errorHandler