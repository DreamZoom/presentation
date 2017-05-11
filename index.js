import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import editorProvider from './datagrid/editorProvider.js';
function App() {
	
	const Editor = editorProvider.factory({type:"text"});
	
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <Editor />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
