<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Successful</title>
</head>
<body>
    <h1>Thank you for your submission</h1>
    <p>Dear {{ $formData['nama-lengkap'] }},</p>
    <p>Your form submission was successful. Here are the details:</p>
    <ul>
        <li>Nama Lengkap: {{ $formData['nama-lengkap'] }}</li>
        <li>NIM: {{ $formData['nim'] }}</li>
        <li>Email: {{ $formData['email'] }}</li>
        <li>Keluhan: {{ $formData['keluhan'] }}</li>
    </ul>
    <p>Thank you for your feedback!</p>
</body>
</html>
