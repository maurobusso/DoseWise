const express = require('express');
const router = express.Router()
const itemController = require('../controllers/itemController')

router.get('/', itemController.getIndex)
router.get('/item', itemController.getItems)
// router.post('/item', itemController.createItem)
router.post('/item/update/:id', itemController.updateItem)
router.delete('/item/delete/:id', itemController.deleteItem)

router.get('/injectionHistory', itemController.getInjectionHistory)
router.get('/contact', itemController.getContact)
router.post('/patient', itemController.createPatient)

router.post('/add', itemController.createLa)
router.get('/medications', itemController.getMedications)
router.delete('/medications/delete/:id', itemController.deleteMedication)

router.get('/guidelines', itemController.getGuidelines)

module.exports = router

