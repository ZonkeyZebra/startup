import React from "react";
import { Link } from "react-router-dom";
import './search.css';

export function Search() {
    return (
        <main className="container-fluid bg-light text-dark text-center">
            <div className="row row-cols-2">
                <p>
                    <Link class="search" to="/arbys">Arby's</Link>
                </p>
                <p>
                    <Link class="search" to="/caferio">Cafe Rio</Link>
                </p>
                <p>
                    <Link class="search" to="/cancuncafe">Cancun Cafe</Link>
                </p>
                <p>
                    <Link class="search" to="/chickfila">Chick-Fil-A</Link>
                </p>
                <p>
                    <Link class="search" to="/costavida">Costa Vida</Link>
                </p>
                <p>
                    <Link class="search" to="/crownburger">Crown Burger</Link>
                </p>
                <p>
                    <Link class="search" to="/dominos">Domino's</Link>
                </p>
                <p>
                    <Link class="search" to="/jambajuice">Jamba Juice</Link>
                </p>
                <p>
                    <Link class="search" to="/jdawgs">J-Dawgs</Link>
                </p>
                <p>
                    <Link class="search" to="/jerseymikes">Jersey Mike's</Link>
                </p>
                <p>
                    <Link class="search" to="/littlecaesars">Little Caesars</Link>
                </p>
                <p>
                    <Link class="search" to="/marias">Marias</Link>
                </p>
                <p>
                    <Link class="search" to="/mcdonalds">McDonalds</Link>
                </p>
                <p>
                    <Link class="search" to="/raisincaines">Rainsin' Caines</Link>
                </p>
                <p>
                    <Link class="search" to="/randrbbq">R and R BBQ</Link>
                </p>
                <p>
                    <Link class="search" to="/red8bistro">Red 8 Bistro</Link>
                </p>
                <p>
                    <Link class="search" to="/subway">Subway</Link>
                </p>
                <p>
                    <Link class="search" to="/tropicalsmoothiecafe">Tropical Smoothie Cafe</Link>
                </p>
                <p>
                    <Link class="search" to="/wendys">Wendy's</Link>
                </p>
                <p>
                    <Link class="search" to="/zupas">Zupas</Link>
                </p>
            </div>
        </main>
    )
}