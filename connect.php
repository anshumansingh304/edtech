<?php
// Database connection
$servername = "localhost"; // Replace with your server name
$username = "ans8181981";        // Replace with your database username
$password = "Pmf3d@aa";            // Replace with your database password
$dbname = "gradtech";      // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $course = $_POST['courses'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Validate phone number
    if (!preg_match('/^\d{10}$/', $phone)) {
        echo "Invalid phone number";
        exit;
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO enrollments (full_name, email, phone, courses) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $full_name, $email, $phone, $courses);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
}

$conn->close();
?>
