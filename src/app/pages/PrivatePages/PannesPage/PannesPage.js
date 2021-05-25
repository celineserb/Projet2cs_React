import { Row, Layout } from 'antd';
import React from 'react';
import "./style/style.scss";
import PanneComponent from './PanneComponent'


var data = [
    {
       message: "Panne notification this is a long hurry, don't be scared! Never gonna give y ", 
       vehicle: "Tesla Model S",
       source: "Auto",
       date: "April 20, 2021",
       time: "6:19PM",
       seen: false
    },
    {
        message: "Open for a surprise! Come on, hurry, don't be scared! Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you", 
        vehicle: "Tesla Model 3",
        source: "Haroune Kechaoui (L)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: false
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (A)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (L)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: false
    },
    {
        message: "git gud", 
        vehicle: "gerwaja",
        source: "Auto",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "we see each other, we good, WE. SEE. EACH. OTHA!", 
        vehicle: "maruti",
        source: "Auto",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (A)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (L)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (A)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (L)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (A)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (L)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
];



function PannesPage() {
    return (
        <Layout>
                <Row >
                    <div className="pannes-list-header">
                        <label className="pannes-list-title">Pannes</label>
                        <button className="pannes-list-sort-btn" onClick={() => {
                            const sort = document.getElementsByClassName("pannes-list-sort")[0];
                            if (sort.classList.contains("hidden")) {
                                sort.classList.remove("hidden");
                            } else {
                                sort.classList.add("hidden");
                            }
                        }}><img className="sort-svg" alt="" /> Ordonner</button>
                        <div className="pannes-list-sort hidden">
                            <ul>
                                <li><input type="checkbox" id="sort-latest" /><label for="sort-latest">Plus récents</label></li>
                                <li><input type="checkbox" id="sort-unseen" /><label for="sort-unseen">Non vues</label></li>
                            </ul>
                        </div>
                        <div className="hl"></div>
                    </div>
                </Row>

                <div className="pannes-list-body">
                    {
                        data.map((e, i) =>
                            <PanneComponent item={e} index={i}></PanneComponent>
                        )
                    }
                </div>
        </Layout>
    )
}

export default PannesPage
