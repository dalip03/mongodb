
const getGoals = (req,res) =>{
    res.status(200).json({
        message:'Get Goals'
     })
   
}

const setGoals = (req,res) =>{
    res.status(200).json({
        message:'set Goals'
     })
   
}

const updateGoals = (req,res) =>{
    res.status(200).json({
        message:`update Goals ${req.params.id} `
     })
   
}

const deleteGoals = (req,res) =>{
    res.status(200).json({
        message:`delete Goals ${req.params.id} `
     })
   
}

module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}