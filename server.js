const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON bodies

/*
app.post('/bfhl', (req, res) => {
    const {data}  = req.body;
    console.log(req.body)
    // Initialize arrays to hold numbers and alphabets
    let numbers = [];
    let alphabets = [];
    let highestLowercase = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                if (!highestLowercase || item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "21BCE10646",
        email: "bhaskarshashwath@gmail.com",
        roll_number: "21BCE10646",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.status(200).json(response);
}); */

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        console.log(req.body);

        // Initialize arrays to hold numbers and alphabets
        let numbers = [];
        let alphabets = [];
        let highestLowercase = null;

        // Iterate over each item in the data array
        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
                alphabets.push(item);
                if (item === item.toLowerCase()) {
                    if (!highestLowercase || item > highestLowercase) {
                        highestLowercase = item;
                    }
                }
            }
        });

        const response = {
            is_success: true,
            user_id: "21BCE10646",
            email: "bhaskarshashwath@gmail.com",
            roll_number: "21BCE10646",
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        };

        // Send the response
        res.status(200).json(response);
    } catch (error) {
        // Handle any errors that occur during the processing
        console.error("Error processing request:", error);
        res.status(500).json({
            is_success: false,
            message: "An error occurred while processing the request."
        });
    }
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
