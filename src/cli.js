#!/usr/bin/env node
'use strict';
const path = require('path');
const importJsx = require('import-jsx');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const {h, render} = require('ink');

const ui = importJsx('./ui');

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, 'fox.png'));
	console.log(image);
};

termImg(path.join(__dirname, 'fox.png'), {fallback});

render(h(ui));
