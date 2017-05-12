import React from 'react';
import { Table, Icon } from 'antd';

class DataGrid extends extends React.Component {

    get columns() {
        let _columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="#">
                        Action 一 {record.name}
                    </a>
                    < span className="ant-divider" />
                    <a href="#">
                        Delete
                    </a>
                    <span className="ant-divider" />
                    <a href="#" className="ant-dropdown-link">
                        More actions < Icon type="down" />
                    </a>
                    
                </span >
            )
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