<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comicfix Ollo Challenge Registration</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    body { font-family: 'Poppins', sans-serif; background: linear-gradient(to right, #6b5b95, #ff6f61); color: #fff; text-align: center; }
    form { max-width: 400px; margin: 2rem auto; padding: 2rem; background: #fff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); color: #333; }
    input, select { width: 100%; padding: 10px; margin: 10px 0; border: none; border-radius: 5px; background: #f9f9f9; }
    button { background: #ff6f61; color: #fff; border: none; padding: 12px 20px; border-radius: 5px; cursor: pointer; transition: 0.3s ease; }
    button:hover { background: #6b5b95; }
  </style>
</head>
<body>
  <h1>Comicfix Ollo Challenge Registration</h1>
  <form id="registrationForm">
    <input type="text" id="name" placeholder="Full Name" required>
    <input type="tel" id="phone" placeholder="Phone Number" required>
    <input type="url" id="linkedin" placeholder="LinkedIn Profile" required>
    <input type="text" id="address" placeholder="Address" required>
    <input type="number" id="fee" value="99" readonly>
    <button type="submit">Register & Pay ₹99</button>
  </form>

  <script>
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const linkedin = document.getElementById('linkedin').value;
      const address = document.getElementById('address').value;
      const gpayLink = 'https://pay.google.com/gp/p/ui/pay?pa=adnanmuhammad4393@okicici&pn=Adnan+Muhammad&am=99&tn=Comicfix+Ollo+Challenge';
      const whatsappMessage = `Name: ${name}, Phone: ${phone}, LinkedIn: ${linkedin}, Address: ${address}`;
      window.open(gpayLink, '_blank');
      window.open(`https://wa.me/9656778508?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    });
  </script>
</body>
</html>
  
