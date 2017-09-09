const bespoke = require('bespoke'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    backdrop = require('bespoke-backdrop'),
    nebula = require('bespoke-theme-nebula'),
    fullscreen = require('bespoke-fullscreen'),
    substeps = require('bespoke-substeps/dom'),
    progress = require('bespoke-progress'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    $ = require('jquery');

$(function () {
  setTimeout(function() {
    $('body').show();
  }, 1000);
});

// Bespoke.js
var deck = bespoke.from('article', [
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  nebula(),
  scale(),
  hash(),
  fullscreen(),
  substeps(),
  progress()
]);

// Virtual DOM
deck.on('activate', function(event) {
  if ($(event.slide).hasClass('virtual-dom')) {
    var parent = $('.virtual-dom');
    var title  = $('.virtual-dom-steps');

    parent.removeClass('step-1');
    parent.removeClass('step-2');
    parent.removeClass('step-3');
    parent.removeClass('step-4');
    parent.removeClass('step-5');
    title.html('');

    switch (parent.find('.active').length) {
      case 0:
        parent.addClass('step-1');
        break
      case 1:
        parent.addClass('step-2');
        title.html('1. New Virtual DOM Subtree');
        break;
      case 2:
        parent.addClass('step-3');
        title.html('2. Diff with the old one');
        break;
      case 3:
        parent.addClass('step-5');
        title.html('3. Apply changes');
        break;
      }
  }

  return true;
});


require('prismjs');
require('prismjs/components/prism-ruby');
require('../style.scss');
