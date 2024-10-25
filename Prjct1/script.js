
  document.getElementById('combinedForm').addEventListener('submit', (event)=> {
    event.preventDefault();  

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let checkboxes = document.querySelectorAll('input[name="topics"]:checked');

  




    if (!email || !password) {
      document.getElementById('message').innerHTML = '<div class="alert alert-danger">Please enter your email and password.</div>';
      return;
    }

   
      const passPtrn = {
      noSpace: /^\S+$/,
      mnmChar: /^.{8,}$/,
      hasNum: /^(?=.*\d).+$/,
      hasUpprCs: /^(?=.*[A-Z]).+$/
    }

    
    let pass = password;
    
    function validatePassword(pattern,value){
      
      return pattern.test(value);
    }
    
    
    
    
    if(validatePassword(passPtrn.noSpace,pass) && validatePassword(passPtrn.hasUpprCs,pass) && validatePassword(passPtrn.mnmChar,pass) && validatePassword(passPtrn.hasNum,pass)){
    }else{
      let errText = document.getElementById('text');

      errText.textContent = 'Your password must meet the requirements below';
      errText.style.color = '#e74c3c';
      errText.style.opacity = 1;

      return;
    }



    if (checkboxes.length === 0) {
      document.getElementById('message').innerHTML = '<div class="alert alert-danger">Please select at least one topic.</div>';
      return;
    }

    window.location.href = "thankyou.html";
  });

  document.addEventListener('DOMContentLoaded', function() {
    const recommendedTopics = ["Technology", "Business", "Health", "Entertainment", "Science", "Sports", "Travel", "Politics"];
    const randomTopic = recommendedTopics[Math.floor(Math.random() * recommendedTopics.length)];
    document.getElementById('recommendedTopic').innerText = randomTopic;
  });
