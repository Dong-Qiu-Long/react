import React from 'react';
import ReactDOM from 'react-dom';
import MoRenZhi from './MoRenZhi.js';
import {A,B} from './Comp.js';
const ALog = MoRenZhi(A);
const BLog = MoRenZhi(B);
ReactDOM.render(<div>
	<ALog a={1}/>
	<BLog a={2}/>
</div>,document.getElementById('root'));