require("dotenv").config();
require("colors");
const express = require("express");
const errorHandaler = require("http-errors");
const connection = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute.js");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const { errorResponse } = require("./controllers/responseController");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bookingRoute = require("./routes/bookingRoute.js");

const path = require("path");

const ___dirname = path.resolve()

// init app
const app = express();
app.use(cookieParser());

// init express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "https://ticket-booking-client-vite.onrender.com",
      "https://ticket-booking-client-chi.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);



// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/movie", movieRoute);
app.use("/api/v1/theatre", theatreRoute);
app.use("/api/v1/show", showRoute);
app.use("/api/v1/booking", bookingRoute);


if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.join(___dirname, 'client', 'dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(___dirname, 'client', 'dist', 'index.html'))
  );
}


// error handaling middlewares
app.use((req, res, next) => {
  next(errorHandaler(404, "Routes Not found"));
});

// server error handler -> all kind of error
app.use((err, req, res, next) => {
  errorResponse(res, { statusCode: err.status, message: err.message });
});

// init port
const PORT = process.env.PORT;

// server listen
app.listen(PORT, () => {
  connection;
  console.log(`server is running on ${PORT}`.bgBlue.black);
});
