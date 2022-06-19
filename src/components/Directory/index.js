import React from "react";
import './styles.scss';
import All from './../../assets/category/all.png';
import Accessories from './../../assets/category/1.png';
import Clothes from './../../assets/category/2.png';
import Foods from './../../assets/category/3.png';
import Hygiene from './../../assets/category/4.png'; 
import Toys from './../../assets/category/5.png';

const Directory = props => {
    return (
        <div>
         
            <section className="section-category">
                <div className="categories" id="category">
                <h2>Categories</h2>
                </div>
                <ul id="cat" className="catbox">
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={All}/>
                            </a> 
                            
                        </div>
                        <span>All</span>
                </li>
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={Accessories}/>
                            </a> 
                            
                        </div>
                        <span>Accessories</span>
                </li>
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={Clothes}/>
                            </a> 
                            
                        </div>
                        <span>Clothes</span>
                </li>
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={Foods}/>
                            </a> 
                            
                        </div>
                        <span>Foods</span>
                </li>
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={Hygiene}/>
                            </a> 
                            
                        </div>
                        <span>Hygiene</span>
                </li>
                <li className="item">
                        <div className="category-box">
                            <a href="index.php">
                                <img src={Toys}/>
                            </a> 
                            
                        </div>
                        <span>Toys</span>
                </li>
                                
            
            </ul>
            </section>
        </div>
    );
};

export default Directory;