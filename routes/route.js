const { Router } = require('express');
const {
  handleRoot,
  getSinglePatient,
  handleQueries,
} = require('../controllers/contr');

const router = Router();

router.get('/', handleRoot);
router.get('/patients/:patient_id', getSinglePatient);
router.get('/search', handleQueries);

module.exports = router;
