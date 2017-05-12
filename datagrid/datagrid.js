import React from 'react';
import { Table, Icon } from 'antd';

class DataGrid extends extends React.Component {

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

    render() {
        return (
            <span>
                {this.name}
            </span>
        );
    }
}