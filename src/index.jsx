import * as $ from 'jquery';
import { Post } from '@/Post';
import json from '@/assets/json'
import xml from '@/assets/data.xml';
import WebpackLogo from '@/assets/webpack-logo';
import './babel';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack course</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre></pre>
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr />
        <div className="card">
            <h2>Scss</h2>
        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// console.log('Post to string: ', post.toString())
// console.log('json', json);
// console.log('xml', xml );
