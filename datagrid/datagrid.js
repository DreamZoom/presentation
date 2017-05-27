import React from 'react';
import { Table, Icon, Button, Popconfirm } from 'antd';

class DataGrid extends React.Component {

    state = {
        metadata: {
            propertyType: "table",
            propertyName: "users",
            displayName: "用户",
            propertys: [{
                propertyType: "string",
                propertyName: "name",
                displayName: "姓名",
            }, {
                propertyType: "number",
                propertyName: "age",
                displayName: "年龄",
            }, {
                propertyType: "string",
                propertyName: "address",
                displayName: "地址",
            }]
        },
        data: [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }]
    }

    get columns() {

        let _columns = this.state.metadata.propertys.map(function (item, index) {
            return {
                title: item.displayName || item.propertyName,
                dataIndex: item.propertyName,
                key: item.propertyName,
            };
        });
        _columns.push({
            title: "操作",
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record, index) => {

                const editable = record.__editable || false;
                console.log(editable);
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                                    <Button onClick={() => this.handleUpdateOrCancel(record, index)}>保存</Button>
                                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.handleUpdateOrCancel(record, index, true)}>
                                        <Button>取消</Button>
                                    </Popconfirm>
                                </span>
                                :
                                <span>
                                    <Button onClick={() => this.handleEditRecord(record, index)}>编辑</Button>
                                </span>
                        }
                    </div>
                );
            }
        });
        return _columns;
    }

    handleEditRecord(record, index) {
        record.__editable = true;
        this.setState({
            ...this.state
        });
    }

    handleUpdateOrCancel(record, index, cancel) {
        if (cancel) {
            record.__editable = false;
            this.setState({
                ...this.state
            });
        }
        else {
            record.__editable = false;
            this.setState({
                ...this.state
            });

        }

    }

    handleNewRecord() {

        this.state.data.push({
            key: '' + (this.state.data.length + 1),
            name: '',
            age: 0,
            address: ''
        });
        this.setState({
            ...this.state
        });
    }


    render() {



        return (
            <div>
                <div className="toolbox">
                    <Button onClick={() => { this.handleNewRecord() }}>新建</Button>
                </div>
                <Table dataSource={this.state.data} columns={this.columns} />
            </div>
        );
    }
}


export default DataGrid;