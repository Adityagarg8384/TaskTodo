const File = require("../models/file");


exports.addtask = async (req, res) => {
    try {
        const t= new Date();
        console.log(t);
        
        var { userid,id, task, setreminder, date } = req.body;

        const response = await File.create({userid, id, task, setreminder, date });
        console.log(response);

        res.status(200).json({
            success: true,
            data: response,
            message: "Entered Successfully",
        })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Server error",
            message: "Some error occurred",
        })
    }
};

exports.gettask = async (req, res) => {
    try {
        const { id } = req.body;
        
        File.find({userid: req.params.id})
            .then(response => {
                res.status(200).json({
                    success: true,
                    data: response,
                    message: "Sent Successfully"
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Server error",
            message: "Some error occurred",
        })
    }
}

exports.deletetask=async(req, res)=>{
    const id= 1;

    File.findByIdAndDelete(req.params.id).then(response=>{
        res.status(200).json({
            success:true,
            message:"Successfullly deleted",
        })
    })
    .catch((err)=>{
        res.status(505).json({
            success: false,
            message:"Unsuccessfull",
        })
    })
}