const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

// REQUEST WITHDRAWAL (TEMP ONLY - NO REAL MPESA YET)
router.post('/withdraw', auth, async (req, res) => {
  try {
    const { phone, amount } = req.body;

    // For now we just simulate request
    res.json({
      message: 'Withdrawal request received',
      phone,
      amount,
      status: 'pending'
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Wallet route working" });
});

module.exports = router;