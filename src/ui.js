'use-strict';

const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const BigText = require('ink-big-text');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'GitHub',
    url: 'https://github.com/nbfontana'
  },
  {
    label: 'LinkeIn',
    url: 'https://www.linkedin.com/in/nbfontana'
  },
  {
    label: 'Quit',
    action() {
      process.exit(); // eslint-disable-line unicorn/no-process-exit
    }
  }
];

module.exports = () => (
  <div>
    <div>
      <BigText font="chrome" text="Hey there!"/>
    </div>
    <div>
      <Text>My name is Neri Bez Fontana and I'm a JavaScript developer!</Text>
    </div>
    <br/>
		<SelectInput items={items} onSelect={handleSelect}/>
  </div>
);
