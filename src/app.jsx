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
                    {/* <img alt="plate" width="250" className="icon" src="..\Images\PlateIcon.png"/> */}
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
                    <Route path='/arbys' element={<Arbys userName={userName} />} />
                    <Route path='/caferio' element={<CafeRio userName={userName} />} />
                    <Route path='/cancuncafe' element={<CancunCafe userName={userName} />} />
                    <Route path='/chickfila' element={<ChickFilA userName={userName} />} />
                    <Route path='/costavida' element={<CostaVida userName={userName} />} />
                    <Route path='/crownburger' element={<CrownBurger userName={userName} />} />
                    <Route path='/dominos' element={<Dominos userName={userName} />} />
                    <Route path='/jambajuice' element={<JambaJuice userName={userName} />} />
                    <Route path='/jdawgs' element={<JDawgs userName={userName} />} />
                    <Route path='/jerseymikes' element={<JerseyMikes userName={userName} />} />
                    <Route path='/littlecaesars' element={<LittleCaesars userName={userName} />} />
                    <Route path='/marias' element={<Marias userName={userName} />} />
                    <Route path='/mcdonalds' element={<McDonalds userName={userName} />} />
                    <Route path='/raisincaines' element={<RaisinCaines userName={userName} />} />
                    <Route path='/randrbbq' element={<RandRBBQ userName={userName} />} />
                    <Route path='/red8bistro' element={<Red8Bistro userName={userName} />} />
                    <Route path='/subway' element={<Subway userName={userName} />} />
                    <Route path='/tropicalsmoothiecafe' element={<TropicalSmoothieCafe userName={userName} />} />
                    <Route path='/wendys' element={<Wendys userName={userName} />} />
                    <Route path='/zupas' element={<Zupas userName={userName} />} />
                </Routes>

                <footer>
                    <div className='container-fluid'>
                        <span className="text-reset">Cecily Black</span>
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