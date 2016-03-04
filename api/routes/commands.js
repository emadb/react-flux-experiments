const express = require('express')
const router = express.Router()

router.post('/exec', (req,res) => {
  res.json({action: req.body, status: 'ack'})
})

module.exports = router;
