document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json.meals[0]);
            let results = "";
            for (var i = 0; i < json.meals.length; ++i)
            {
                results += '<h2>Recipe #' + (i + 1) + '</h2>';
                results += '<h2>Ingredients</h2>';
                results += '<ul>';
                results += '<li>' + json.meals[i].strIngredient1 + '</li>';
                results += '<li>' + json.meals[i].strIngredient2 + '</li>';
                results += '<li>' + json.meals[i].strIngredient3 + '</li>';
                results += '<li>' + json.meals[i].strIngredient4 + '</li>';
                results += '<li>' + json.meals[i].strIngredient5 + '</li>';
                results += '<li>' + json.meals[i].strIngredient6 + '</li>';
                results += '<li>' + json.meals[i].strIngredient7 + '</li>';
                results += '<li>' + json.meals[i].strIngredient8 + '</li>';
                results += '<li>' + json.meals[i].strIngredient9 + '</li>';
                results += '<li>' + json.meals[i].strIngredient10 + '</li>';
                results += '<li>' + json.meals[i].strIngredient11 + '</li>';
                results += '<li>' + json.meals[i].strIngredient12 + '</li>';
                results += '<li>' + json.meals[i].strIngredient13 + '</li>';
                results += '<li>' + json.meals[i].strIngredient14 + '</li>';
                results += '<li>' + json.meals[i].strIngredient15 + '</li>';
                results += '<li>' + json.meals[i].strIngredient16 + '</li>';
                results += '<li>' + json.meals[i].strIngredient17 + '</li>';
                results += '<li>' + json.meals[i].strIngredient18 + '</li>';
                results += '<li>' + json.meals[i].strIngredient19 + '</li>';
                results += '<li>' + json.meals[i].strIngredient20 + '</li>';
                results += '</ul>';
                results += '<h2>Ingredients</h2>';
                results += json.meals[i].strInstructions + "</p>";
            }
            document.getElementById("mealResults").innerHTML = results;
        });
});