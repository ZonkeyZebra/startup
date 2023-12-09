import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Review } from './review/review';
import { Search } from './search/search';
import { YourReviews } from './yourReviews/yourReviews';
import { About } from './about/about';
import { Arbys } from './arbys/arbys';
import { CafeRio } from './caferio/caferio';
import { CancunCafe } from './cancuncafe/cancuncafe';
import { ChickFilA } from './chickfila/chickfila';
import { CostaVida } from './costavida/costavida';
import { CrownBurger } from './crownburger/crownburger';
import { Dominos } from './dominos/dominos';
import { JambaJuice } from './jambajuice/jambajuice';
import { JDawgs } from './jdawgs/jdawgs';
import { JerseyMikes } from './jerseymikes/jerseymikes';
import { LittleCaesars } from './littlecaesars/littlecaesars';
import { Marias } from './marias/marias';
import { McDonalds } from './mcdonalds/mcdonalds';
import { RaisinCaines } from './raisincaines/raisincaines';
import { RandRBBQ } from './randrbbq/randrbbq';
import { Red8Bistro } from './red8bistro/red8bistro';
import { Subway } from './subway/subway';
import { TropicalSmoothieCafe } from './tropicalsmoothiecafe/tropicalsmoothiecafe';
import { Wendys } from './wendys/wendys';
import { Zupas } from './zupas/zupas';

import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    return (
        <BrowserRouter>
            <div className='body bg-light text-dark'>
                <header>
                    <script src="https://foodish-js.netlify.app/js/images.js"></script>
                    <img alt="plate" width="250" class="icon" src="../Images/Plate Icon.png"/>
                    <nav>
                        <div>Pick Your Plate</div>
                        <menu>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>Login</NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (<li className='nav-item'>
                                <NavLink className='nav-link' to='review'>Review</NavLink>
                            </li>)}
                            {authState === AuthState.Authenticated && (<li className='nav-item'>
                                <NavLink className='nav-link' to='search'>Search</NavLink>
                            </li>)}
                            {authState === AuthState.Authenticated && (<li className='nav-item'>
                                <NavLink className='nav-link' to='yourReviews'>Your Reviews</NavLink>
                            </li>)}
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>About</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />} exact />
                    <Route path='/review' element={<Review userName={userName} />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/yourReviews' element={<YourReviews userName={userName} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/arbys' element={<Arbys />} />
                    <Route path='/caferio' element={<CafeRio />} />
                    <Route path='/cancuncafe' element={<CancunCafe />} />
                    <Route path='/chickfila' element={<ChickFilA />} />
                    <Route path='/costavida' element={<CostaVida />} />
                    <Route path='/crownburger' element={<CrownBurger />} />
                    <Route path='/dominos' element={<Dominos />} />
                    <Route path='/jambajuice' element={<JambaJuice />} />
                    <Route path='/jdawgs' element={<JDawgs />} />
                    <Route path='/jerseymikes' element={<JerseyMikes />} />
                    <Route path='/littlecaesars' element={<LittleCaesars />} />
                    <Route path='/marias' element={<Marias />} />
                    <Route path='/mcdonalds' element={<McDonalds />} />
                    <Route path='/raisincaines' element={<RaisinCaines />} />
                    <Route path='/randrbbq' element={<RandRBBQ />} />
                    <Route path='/red8bistro' element={<Red8Bistro />} />
                    <Route path='/subway' element={<Subway />} />
                    <Route path='/tropicalsmoothiecafe' element={<TropicalSmoothieCafe />} />
                    <Route path='/wendys' element={<Wendys />} />
                    <Route path='/zupas' element={<Zupas />} />
                </Routes>

                <footer>
                    <div className='container-fluid'>
                        <span class="text-reset">Cecily Black</span>
                        <a href="https://github.com/ZonkeyZebra/startup">GitHub</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}