import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className='bg-black text-center text-white mt-5 pt-5'>
                <h1>School<span className='text-warning'> of English </span> </h1>
               
                <div className='footer-anchor pb-5'>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter-square"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;