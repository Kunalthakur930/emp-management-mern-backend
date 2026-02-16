const EmpModel = require("../Model/EmpModel");
const saveEmp = async (req, res) => {
  const { name, email, salary, role, age } = req.body;

  try {
    const { name, email, salary, role, age } = req.body;
    const newEmp = new EmpModel({
      name,
      email,
      salary,
      role,
      age,
    });
    await newEmp.save();
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// to get all emps on click view map

const getEmp = async (req, res) => {
  try {
    const employees = await EmpModel.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// update employee

const updateEmp = async (req, res) => {
  try {
    const updatedEmployee = await EmpModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res
      .status(200)
      .json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    console.log(error);
    res.satus(500).json({ message: "Something went wrong" });
  }
};

// delete employee logic

const deleteEmp = async (req, res) => {
  try {
    const deletedEmployee = await EmpModel.findByIdAndDelete(
      req.params.id,
      req.body,
    );
    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res
      .status(200)
      .json({ message: "Employee deleted successfully", deletedEmployee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { saveEmp, getEmp, updateEmp, deleteEmp };
