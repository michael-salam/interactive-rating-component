let rating;
const ratingComponent = document.querySelector("#component1");
const thankYouComponent = document.querySelector("#component2");
const btns = document.querySelectorAll(".btn");
const chosenRating = document.querySelector("#chosen-rating");
const submitBtn = document.querySelector(".submit-btn");

const handleClickBtn = (e) => {
  rating = e.target.id;

  // remove the selected class from every other one if the user changes his selection
  btns.forEach((element) => {
    element.classList.remove("selected");
  });

  e.target.classList.add("selected");
  chosenRating.textContent = rating;
  console.log(rating);
};

const handleSubmitRating = () => {
  // if a rating exists, then make the rating component disappear and the thank-you component appear
  if (rating) {
    ratingComponent.style.display = "none";
    thankYouComponent.style.display = "block";
  } else {
    alert("Please rate us first.");
  }
};

// add a click event listener to each element with a class of 'btn'
btns.forEach((element) => {
  element.addEventListener("click", handleClickBtn);
});

// add a click event listener to the submit button
submitBtn.addEventListener("click", handleSubmitRating);
