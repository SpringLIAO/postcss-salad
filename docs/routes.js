const index = require('./pages/index.md');
const reset = require('./pages/reset.md');
const lastedSyntax = require('./pages/lasted-syntax.md');
const shortProperty = require('./pages/short-property.md');
const RemToPixel = require('./pages/Rem-to-Pixel.md');
const inlineSvg = require('./pages/inline-svg.md');
const utils = require('./pages/utils.md');
const basicShape = require('./pages/basic-shape.md');
const grid = require('./pages/grid.md');
const sassSyntax = require('./pages/sass-syntax.md');

const home = require('../README.md');


/**
 * 将实体转回为HTML
 */
const unescapeHtml = (str) => {
  let s = '';
  s = str.replace(/&amp;/g, '&');
  s = s.replace(/&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/<br>/g, '\n');
  return s;
};


export default [
  {
    path: '/',
    component: {
      template: `<div>${unescapeHtml(index)}</div>`,
    },
  },
  {
    path: '/readme',
    component: {
      template: `<div>${unescapeHtml(home)}</div>`,
    },
  },
  {
    path: '/index',
    component: {
      template: `<div>${unescapeHtml(index)}</div>`,
    },
  },
  {
    path: '/reset',
    component: {
      template: `<div>${unescapeHtml(reset)}</div>`,
    },
  },
  {
    path: '/lasted-syntax',
    component: {
      template: `<div>${unescapeHtml(lastedSyntax)}</div>`,
    },
  },
  {
    path: '/short-property',
    component: {
      template: `<div>${unescapeHtml(shortProperty)}</div>`,
    },
  },
  {
    path: '/Rem-to-Pixel',
    component: {
      template: `<div>${unescapeHtml(RemToPixel)}</div>`,
    },
  },
  {
    path: '/inline-svg',
    component: {
      template: `<div>${unescapeHtml(inlineSvg)}</div>`,
    },
  },
  {
    path: '/utils',
    component: {
      template: `<div>${unescapeHtml(utils)}</div>`,
    },
  },
  {
    path: '/basic-shape',
    component: {
      template: `<div>${unescapeHtml(basicShape)}</div>`,
    },
  },
  {
    path: '/grid',
    component: {
      template: `<div>${unescapeHtml(grid)}</div>`,
    },
  },
  {
    path: '/sass-syntax',
    component: {
      template: `<div>${unescapeHtml(sassSyntax)}</div>`,
    },
  },
];
