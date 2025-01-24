const Employee=require("../model/Employee")

//post or insert
const createEmployee=async(request,response)=>{
    try{
       const{name,email,phone}=request.body;
       const employee=new Employee({
        name,
        email,
        phone
       })
       await employee.save();
       response.status(201).json({message:"Employee Document insrted successfully"})
    }
    catch(error){
        console.log(error);
        response.status(500).json({message:"Server error"})
    }
}

//get or fetch   here we fetch all the documents
const getEmployees=async(request,response)=>{
    try{
        const employees=await Employee.find();
        response.status(201).json(employees);
    }
    catch(err){
        console.log(err)
        response.status(501).json({message:"Server issue error"})
    }
}
//get or fetch only one document
const getEmployee=async(request,response)=>{
    try{
        const employee=await Employee.findById(request.params.id);
        if(!employee){
            return response.status(401).json({message:"Employee document is not exist"})
        }
        response.status(201).json(employee);
    }
    catch(error){
        console.log(error)
        response.status(501).json({message:"Server related issue"})
    }
}
//update or put
const updateEmployee=async(request,response)=>{
    try{
        const{name,email,phone}=request.body;
        const myEmployee=await Employee.findByIdAndUpdate(request.params.id,
        {name,email,phone}
        )
        if(!myEmployee)
        {
            return response.status(404).json({message:"Employee document is not updated"})
        }
        response.status(200).json(myEmployee);

    }
    catch(err){
        console.log(err);
        response.status(501).json({message:"Server related error"})
    }
}

const deleteEmployee=async(request,response)=>{
    try{
const deleteEmployee=await Employee.findByIdAndDelete(request.params.id);
if(!deleteEmployee){
    console.log("employee record is not found")
}
response.status(201).json({message:"Employee document is deleted successfully"})
    }
    catch(Error){
        console.log(Error);

    }
}

module.exports={createEmployee,getEmployees,getEmployee,updateEmployee,deleteEmployee};