import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";

// Import middleware
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// User Routes
router.route("/register").post(
    // Using middleware
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJWT, logoutUser);

// Routes for Employee Views
router.get("/emp/login", (req, res) => {
    res.render("emp.login.ejs");  // Renders src/views/emp.login.ejs
});

router.get("/emp/profile", (req, res) => {
    res.render("emp.profile.ejs");  // Renders src/views/emp.profile.ejs
});

router.get("/emp/dashboard", (req, res) => {
    res.render("emp1.dashboard.ejs");  // Renders src/views/emp1.dashboard.ejs
});

router.get("/emp/leavereq", (req, res) => {
    res.render("emp2.leavereq.ejs");  // Renders src/views/emp2.leavereq.ejs
});

router.get("/emp/viewstatus", (req, res) => {
    res.render("emp3.viewstatus.ejs");  // Renders src/views/emp3.viewstatus.ejs
});

export default router;
