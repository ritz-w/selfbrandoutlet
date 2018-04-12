import React from 'react';
import './nav.css';
import {
} from 'react-router-dom'

export default (props) => (
<nav id="nav" role="navigation">
    <div className="site-title">Self Brand Outlet</div>
    <a href="#nav" title="Show navigation">Show Navigation</a>
    <a href="#" title="Hide navigation">Hide Navigation</a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li>
            <a href="/" aria-haspopup="true">Artists ⬇</a>
            <ul>
                <li><a href="/">Design</a></li>
                <li><a href="/">HTML</a></li>
                <li><a href="/">CSS</a></li>
                <li><a href="/">JavaScript</a></li>
            </ul>
        </li>
        <li>
            <a href="/" aria-haspopup="true">Collections ⬇</a>
            <ul>
                <li><a href="/">Web Design</a></li>
                <li><a href="/">Typography</a></li>
                <li><a href="/">Front-End</a></li>
            </ul>
        </li>
    </ul>
</nav>
);
