import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import DataGrid from './datagrid/datagrid.js';
function App() {
  
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DataGrid />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
