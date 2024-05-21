import React from 'react';
import './Main.css';

function Main() {
    return (
        <main>
            <div className="box-container">
                <div className="row">
                    <div className="box box1">Box 1</div>
                    <div className="box box2">Box 2</div>
                </div>
                <div className="row">
                    <div className="box box3">Box 3</div>
                    <div className="box box4">Box 4</div>
                </div>
                <div className="row">
                    <div className="box box5">Box 5</div>
                    <div className="box box6">Box 6</div>
                </div>
            </div>
        </main>
    );
}

export default Main;
