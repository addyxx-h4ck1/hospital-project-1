const { Router } = require('express');
const {
  handleRoot,
  getSinglePatient,
  handleQueries,
  addNewPatients,
} = require('../controllers/contr');

const router = Router();

router.get('/', handleRoot);
router.get('/create', addNewPatients);
router.get('/patients/:patient_id', getSinglePatient);
router.get('/search', handleQueries);

module.exports = router;
