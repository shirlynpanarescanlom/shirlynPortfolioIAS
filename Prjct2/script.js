const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    //code for star rating
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value; 
        updateStarRating(value);
      });
    });

    function updateStarRating(selectedValue) {
      stars.forEach(star => {
        if (star.getAttribute('data-value') <= selectedValue) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
    //star rating ends

    //code for datePicker
    let datePicker = document.querySelector('#purchaseDate');

    datePicker.addEventListener('focus',()=>{
      datePicker.showPicker();
    })

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
    
      const customerName = document.getElementById('customerName').value.trim();
      const customerEmail = document.getElementById('customerEmail').value.trim();
      const productName = document.getElementById('productName').value.trim();
      const productQuantity = parseInt(document.getElementById('productQuantity').value); // Ensure this is an integer
      const purchaseDate = document.getElementById('purchaseDate').value;
      const rating = ratingInput.value;
      const comments = document.getElementById('comments').value.trim();
    
      // Check if all fields are filled
      if (!customerName || !customerEmail || !productName || !productQuantity || !purchaseDate || !rating || !comments) {
        alert("Please fill out all fields.");
        return;
      }
    
      // Check for valid product quantity
      if (productQuantity <= 0 || isNaN(productQuantity)) {
        alert("Product quantity must be a positive number greater than zero.");
        return;
      }
    
      document.getElementById('message').innerText = "Thank you for your feedback!";
      document.getElementById('message').style.display = 'block';
    
      // Reset the form and the star rating
      document.getElementById('feedbackForm').reset();
      updateStarRating(0); 
    });