import React, {useState} from "react";


const Car = () => {
    const [isPlaying, setPlaying] = useState(false);

    if (!isPlaying) {
        return (
            <div className="row" id="two">
                <div className="col" id="auto">
                    <button type="button" id="car" onClick={() => setPlaying(true)}>
                        <img src="../green.png"/>
                    </button>
                </div>

                <div className="col" id="ex">
                    Welcome to the new and <br/> supersonic model
                    of <br/> Volkswagen: <br/> the <span>VW-ERASMUS</span>! You can <br/> take a look to our
                    latest <br/> model by dragging the car <br/> around.
                </div>
            </div>
        );
    } else {
        return (
            <div className="row" id="id">
                <div className="sketchfab-embed-wrapper">
                    <iframe width="100%" height="100%" title="Auto" frameBorder="0" allowFullScreen
                            mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/1e54eddf120948fe9514c6bab9d1a232/embed?autostart=1&camera=0&preload=1"/>
                </div>
                <div class="buttons">
                    <button className="carbutton" id="testrit">
                        TESTRIT
                    </button>

                    <button className="carbutton" id="bestelnu">
                        BESTEL NU
                    </button>
                </div>
            </div>
        );
    }
}

export default Car;
