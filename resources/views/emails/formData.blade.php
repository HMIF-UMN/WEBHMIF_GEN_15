<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Science Shelter 2024</title>
</head>
<body>
    <h1>Computer Science Shelter 2024 Form Submission</h1>
    <p>Here are the details submitted:</p>
    <ul>
        <li>Reference Code: {{ $data['referenceCode'] ?? 'N/A' }}</li>
        <li>Team Name: {{ $data['teamName'] ?? 'N/A' }}</li>
        <li>Name: {{ $data['fullName'] }}</li>
        <li>Email: {{ $data['emailAddress'] }}</li>
        <li>ID Line: {{ $data['lineId'] }}</li>
        <li>Phone Number: {{ $data['phoneNumber'] }}</li>
        <li>NIM: {{ $data['studentId'] }}</li>
        <li>Angkatan: {{ $data['classOf'] }}</li>
        <li>Kelas: {{ $data['classChar'] ?? 'N/A' }}</li>
        <li>Lomba: {{ $data['lomba'] }}</li>
        <li>Medical History: {{ $data['medicalHistory'] }}</li>
    </ul>
</body>
</html>
