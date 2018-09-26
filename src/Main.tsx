import React from 'react';
import ReactDom from 'react-dom';

import {Hello} from './components/HelloComponent'

ReactDom.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);