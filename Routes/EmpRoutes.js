const EmpController=require('../Controller/EmpController.js')
const express=require('express')
const {application}=require('express')
const router=express.Router()
router.post('/saveEmp',EmpController.saveEmp)
router.get('/get',EmpController.getEmp)
router.put('/update/:id',EmpController.updateEmp)
router.delete('/delete/:id',EmpController.deleteEmp)
module.exports=router;