import * as $ from 'jquery';
import { Post } from '@/Post';
import json from '@/assets/json'
import xml from '@/assets/data.xml';
import WebpackLogo from '@/assets/webpack-logo';

import './styles/styles.css';

const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').html(post.toString());

console.log('Post to string: ', post.toString())
console.log('json', json);
console.log('xml', xml );
