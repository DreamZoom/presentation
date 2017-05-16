import React from 'react';
import { Table, Icon } from 'antd';

class DataGrid extends React.Component {

    state={
        metadata:[],
        apis:{},
        data:[]
    }

    get columns() {
        let _columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }];
        return _columns;
    }

    get toolboxs(){
        
    }

    render() {
        
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        return (
            <div>
                <div className="toolbox">
                    {this.toolboxs}
                </div>
                <Table dataSource={dataSource} columns={this.columns} />
            </div>
        );
    }
}


export default DataGrid;