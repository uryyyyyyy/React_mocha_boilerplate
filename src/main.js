'use strict';
require("babel/register");
import React  from 'react';
import Root  from './reactComponents/Root';

React.render(
	<Root />,
	document.getElementById('example')
);
