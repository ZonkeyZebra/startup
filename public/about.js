const getFoodish = (categoryName) => {
  let catchOfTheDay;
  const menuDB = Object.keys(images);

  if (categoryName === "random") {
    const randomCategorySelector = Math.floor(Math.random() * menuDB.length);
    const anyRandomFood = menuDB[randomCategorySelector];
    const foodDB = images[anyRandomFood];
    const randomSelector = Math.floor(
      Math.random() * (Object.keys(foodDB).length - 1) + 1
    );
    catchOfTheDay = foodDB[randomSelector];
  } else if (categoryName === "butter-chicken") {
    const foodDB = images.butterChicken;
    const randomSelector = Math.floor(
      Math.random() * (Object.keys(foodDB).length - 1) + 1
    );
    catchOfTheDay = foodDB[randomSelector];
  } else if (menuDB.includes(categoryName)) {
    const foodDB = images[categoryName];
    const randomSelector = Math.floor(
      Math.random() * (Object.keys(foodDB).length - 1) + 1
    );
    catchOfTheDay = foodDB[randomSelector];
  } else {
    catchOfTheDay = "";
  }

  document.getElementById("foodish").src = `https://foodish-js.netlify.app/${catchOfTheDay}`;
};