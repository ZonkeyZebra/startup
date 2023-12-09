import React, {useEffect} from "react";
import {images} from './images';

export function About() {
    const [foodishSrc, setFoodishSrc] = React.useState("");
    const getFoodish = () => {
        let catchOfTheDay;
        const menuDB = Object.keys(images);
        const randomCategorySelector = Math.floor(Math.random() * menuDB.length);
        const anyRandomFood = menuDB[randomCategorySelector];
        const foodDB = images[anyRandomFood];
        const randomSelector = Math.floor(Math.random() * (Object.keys(foodDB).length - 1) + 1);
        catchOfTheDay = foodDB[randomSelector];
        setFoodishSrc(`https://foodish-js.netlify.app/${catchOfTheDay}`);
    };

    useEffect(() => {
        getFoodish();
    }, []);

    return (
        <main className="container-fluid bg-light text-dark text-center">
            <div className="about-para">
                <p id="p1">Pick Your Plate is a site where you can come and review restaurants you've been to or would like to go to. You can see the specific location each review was made as well.</p>
                <p id="p2">To get started,  make an account and login. Then search for a restaurant you would like to see reviews for.</p>
                <p id="p3">To leave a review go to the review page and fill out and submit the form. Look at the reviews already there and leave your own once you've gone!</p>
                <p id="p4">You can see all the reviews you have done and can easily share them with friends!</p>
            </div>
            {/* <img alt="picture of food" height="200" src="../Images/food placeholder.png"/> */}
            <img id="foodish" alt="foodish" height="200" src={foodishSrc}/>
            {console.log(foodishSrc)}
        </main>
    )
}