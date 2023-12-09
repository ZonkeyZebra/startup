import React, {useEffect} from "react";

export function About() {
    return (
        <main className="container-fluid bg-light text-dark text-center">
            <div class="about-para">
                <p id="p1">Pick Your Plate is a site where you can come and review restaurants you've been to or would like to go to. You can see the specific location each review was made as well.</p>
                <p id="p2">To get started,  make an account and login. Then search for a restaurant you would like to see reviews for.</p>
                <p id="p3">To leave a review go to the review page and fill out and submit the form. Look at the reviews already there and leave your own once you've gone!</p>
                <p id="p4">You can see all the reviews you have done and can easily share them with friends!</p>
            </div>
            <img alt="picture of food" height="200" src="../Images/food placeholder.png"/>
        </main>
    )
}
/* <script src="https://foodish-js.netlify.app/js/images.js"></script>
<script src="https://foodish-js.netlify.app/js/foodish.js"></script>
<main>
    <div class="about-para">
        <p id="p1">Pick Your Plate is a site where you can come and review restaurants you've been to or would like to go to. You can see the specific location each review was made as well.</p>
        <p id="p2">To get started,  make an account and login. Then search for a restaurant you would like to see reviews for.</p>
        <p id="p3">To leave a review go to the review page and fill out and submit the form. Look at the reviews already there and leave your own once you've gone!</p>
        <p id="p4">You can see all the reviews you have done and can easily share them with friends!</p>
    </div>
        <img id="foodish" alt="foodish" height="200"/>
        <script>getFoodish("random");</script>
</main> */