const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');
const stripeRouter = require('./router/stripeRouter')
const orderRouter = require('./router/orderRouter');


dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);
app.use('/api/auth', userRouter);
app.use('/api/payment', stripeRouter)
app.use('/api/order', orderRouter)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(port, () => {
    console.log(`server connected to ${port}`);
})
