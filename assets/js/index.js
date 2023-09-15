

/* slick carousel================= */
$(document).ready(function() {

  $('.slider-feature-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        infinite:true
      }
    },
    {
      breakpoint: 200,
      settings: {
        slidesToScroll: 1,
        infinite:true
      }
    }
  ]

});

    $('.slider-feature-wrapper').css({
      width: '90%',      
      margin: 'auto',
      padding: '5px',

    });
    $('.slider-feature-wrapper img').css({
      boxSizing: 'border-box',
      width: '100%',
      height: '600px',
  

    });



    $(document).on('click', '.picture-feature-text input[type="submit"]', function(e) {
      e.preventDefault();
      console.log("Button clicked!");
      window.location.href = "./onefilm.html";
    });
    
    pictureBox.addEventListener("mouseover", function(e){
      e.target.parentElement.classList.add('message-up');
      pictureBox.classList.add('active');
      pictureBox.classList.toggle('blur');
    });
    pictureBox.addEventListener("mouseout", function(e){
      e.target.parentElement.classList.remove('message-up');
      pictureBox.classList.remove('active');
      pictureBox.classList.remove('blur');
    });
});



/* featured index page ======================== */

const pictureBox = document.querySelector(".pictures-feature");















/* the news sorting ============================== */

function reverseArticlesOrder() {
  const articleElements = document.querySelectorAll('.picture-readmore-text');
  const parentElement = articleElements[0].parentElement;
  
  for (let i = articleElements.length - 1; i >= 0; i--) {
    parentElement.appendChild(articleElements[i]);
  }
}

function originalback() {
  const articleElements = document.querySelectorAll('.picture-readmore-text');
  const parentElement = articleElements[0].parentElement;

  for (let i = articleElements.length - 1; i >= 0; i--) {
    parentElement.appendChild(articleElements[i]);
  }
}



document.getElementById('sortSelect').addEventListener('change', function () {
  const selectedOption = this.value;

    if (selectedOption === 'Old') {
      reverseArticlesOrder();
    } 
    else if (selectedOption === 'New') {
      originalback();
    }
}); 



/* my api key  */

const apikey ='724c49f3b809649a99fd3e7c3a08fd01';

// Construct the API request URL for trending movies
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&original_language`;

// Make the API request using the fetch function
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));


/* 
  http://www.omdbapi.com/?i=tt3896198&apikey=b80e69d */