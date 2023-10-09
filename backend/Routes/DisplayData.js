const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // Send the global data variables in the response
        res.json({ food_item: global.food_item, food_category: global.food_category });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
