'use strict';

var React = require('react');
var PercolateContactForm = require('./PercolateContactForm');

var openContact = function(open) {
  console.log(open);
}

React.render(<PercolateContactForm openContact={openContact} />, 
  document.getElementById('root'));

