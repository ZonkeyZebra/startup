import React from "react";

export function Review() {
    return (
        <main className="container-fluid bg-light text-dark text-center">
            <form id="reviewForm">
                <select class="form-select" aria-label="Default select example" id="selectRestaurant">
                    <option hidden value="">Restaurant</option>
                    <option value="Arby's">Arby's</option>
                    <option value="Cafe Rio">Cafe Rio</option>
                    <option value="Cancun Cafe">Cancun Cafe</option>
                    <option value="Chick-Fil-A">Chick-Fil-A</option>
                    <option value="Costa Vida">Costa Vida</option>
                    <option value="Crown Burger">Crown Burger</option>
                    <option value="Domino's">Domino's</option>
                    <option value="Jamba Juice">Jamba Juice</option>
                    <option value="Jersey Mike's">Jersey Mike's</option>
                    <option value="J-Dawgs">J-Dawgs</option>
                    <option value="Little Caesars">Little Caesars</option>
                    <option value="Maria's">Maria's</option>
                    <option value="McDonalds">McDonalds</option>
                    <option value="R & R BBQ">R & R BBQ</option>
                    <option value="Raisin' Canes">Raisin' Canes</option>
                    <option value="Red 8 Bistro">Red 8 Bistro</option>
                    <option value="Subway">Subway</option>
                    <option value="Tropical Smoothie Cafe">Tropical Smoothie Cafe</option>
                    <option value="Wendy's">Wendy's</option>
                    <option value="Zupas">Zupas</option>
                </select>
                <p></p>
                <select class="form-select" aria-label="Default select example" id="selectRating">
                    <option hidden value="">Your Rating</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <p></p>
                <textarea name="comments" rows={2} cols={30} placeholder="Comments" />
                <p></p>
                <textarea name="comments" rows={1} cols={30} placeholder="Location" />
                <p></p>
                <button type="button" class="btn btn-success" onclick="saveReview()">Submit</button>
              </form>
              <div class="live-review-updates"></div>
        </main>
    )
}