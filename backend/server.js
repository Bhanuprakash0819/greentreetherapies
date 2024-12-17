const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = "mongodb+srv://greentreetherapies:greentree123@greentree.2eonq.mongodb.net/greentree";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Booking Schema and Model
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    childName: { type: String, required: true },
    childAge: { type: String, required: true },
    contact: { type: String, required: true },
    therapy: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
}, { timestamps: true });

const Booking = mongoose.model('booking', bookingSchema);

// API Routes

// Get all bookings
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).send("Error fetching bookings");
    }
});
app.delete('/api/bookings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Booking.findByIdAndDelete(id);
        res.status(200).send('Booking deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting booking');
    }
});


// Add a new booking
app.post('/api/bookings', async (req, res) => {
    const { name, contact, childName, childAge, therapy, date, time } = req.body;

    try {
        // Check if the slot is already booked
        const existingBooking = await Booking.findOne({ date, time });
        if (existingBooking) {
            return res.status(400).send("Slot already booked");
        }

        // Create and save a new booking
        const newBooking = new Booking({ name, contact, childName, childAge, therapy, date, time });
        await newBooking.save();
        res.status(201).send("Booking confirmed");
    } catch (err) {
        console.error("Error saving booking:", err);
        res.status(500).send("Error saving booking");
    }
});
const adminCredentials = { username: 'admin', password: 'admin' };

app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
