const inputBtn = document.querySelector("#input-ingredient");
const submitBtn = document.querySelector(".input-div button");
const mealContainer = document.querySelector(".meal-content-container");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let val = document.querySelector("#input-ingredient").value.trim();

    //********************* method 1 --- using fetch() *************************


    // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         let str = "";
    //         if (data.meals) {
    //             data.meals.forEach(meal => {
    //                 str += `<div class="meal-content" data-id="${meal.idMeal}">
    //             <div class="image">
    //             <img src="${meal.strMealThumb}" alt="">
    //             </div>
    //             <div class="meal-name">
    //             <p>${meal.strMeal}</p>
    //             </div>
    //             <div class="meal-details">
    //             <p>click on the link to know more!</p>
    //             <button>Click Me</button>
    //             </div>
    //             </div>`
    //             });
    //         }
    //         mealContainer.innerHTML = str;
    //     })







    //******************** method 2 --- using XMLHttpRequest() *************************

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let mealsObj = JSON.parse(this.responseText);

            console.log(mealsObj);
            let str = "";
            for (let key in Object.keys(mealsObj.meals)) {
                str += `<div class="meal-content" data-id="${mealsObj.meals[key].idMeal}">
                      <div class="image">
                         <img src="${mealsObj.meals[key].strMealThumb}" alt="">
                      </div>
                      <div class="meal-name">
                         <p>${mealsObj.meals[key].strMeal}</p>
                          </div>
                          <div class="meal-details">
                         <p>click on the link to know more!</p>
                         <button>Click Me</button>
                         </div>
                          </div>`
            }
            mealContainer.innerHTML = str;
        }
    }

    xhr.send();
})  