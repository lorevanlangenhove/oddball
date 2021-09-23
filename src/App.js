import './App.css';
import './car.css';
import React from "react";

import Car from "./components/Car";

function App() {
    return (
        <div className="app">
            <div className="container">
                <div className="row" id="three">

                    <div className="col" id="logo">
                        <div className="dieteren">
                            <img src="logo1.png"/>
                        </div>
                    </div>

                    <div className="col" id="big">
                        <h1>ERVAAR DE <br/> <span className="vw">VW-ERASMUS</span></h1>
                    </div>
                </div>

                <Car/>

                <footer>
                    <div className="row" id="foot">
                        <div className="col" id="cr">
                            <p>&copy;D'Ieteren</p>
                        </div>

                        <div className="col" id="links">
                            <a href="https://www.facebook.com/DIeterenMovingPeopleForward" target="_blank">
                                <img src="fb.png"/>
                            </a>

                            <a href="https://twitter.com/dieteren_auto" target="_blank">
                                <img src="twitter.png" className="twitter"/>
                            </a>

                            <a href="https://www.linkedin.com/company/d-ieteren/" target="_blank">
                                <img src="linkedin.png" className="linkedin"/>
                            </a>
                        </div>

                        <div className="col" id="adres">
                            <p>Maliestraat, 50 - 1050 Brussel - België</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
