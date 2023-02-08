import React from "react";
import './HomePage.css'
import Bar from '../Images/bar.png'
import Pie from '../Images/pie.png'
import { Link } from "react-router-dom";
import { Rotate } from "react-reveal";

const HomePage = () => {

    return (
        <div>
            <u><h1 className="heading">Substantive Research Test</h1></u>
            <p className="para">This is an application displaying the data from &nbsp;<u>
                <a href="http://substantiveresearch.pythonanywhere.com/">http://substantiveresearch.pythonanywhere.com/</a></u></p>
            <p className="para">Interactions with clients have been displayed using graphs.  The Bar Chart
                below shows the total amount of interactions with each core sector, whilst the Pie Chart displays the total
                percentage of all interactions with each core sector. </p>
            <div className="images">
                <Rotate top left>
                    <Link to="/barchart">
                        <img src={Bar} alt="Barchart showing total amounts of interactions per department." className="barImg"></img>
                    </Link>
                </Rotate>
                <Rotate top right>
                    <Link to="/piechart">
                        <img src={Pie} alt="Piechart showing percentages of interactions with departments." className="pieImg"></img>
                    </Link>
                </Rotate>
            </div>
        </div>
    )
}

export default HomePage;