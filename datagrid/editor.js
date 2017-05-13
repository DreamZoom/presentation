import React from 'react';

class Editor extends React.Component {

	state = {
		metadata: {
			desc: "",
			name: "",
			type: "",
		},
		model: null,
		mode: "edit"
	}

	constructor() { //构造函数
		super();
		this.name = "wxllzf";
	}

	componentDidMount() {

	}


    /*
     * metadata
     */
	get metadata() {
		return this.state.metadata;
	}
	set metadata(value) {
		this.setState({
			metadata: value
		});
	}

	get model() {
		return this.state.model;
	}
	set model(value) {
		this.setState({
			model: value
		});
	}

	get mode() {
		return this.state.mode;
	}
	set mode(value) {
		this.setState({
			mode: value
		});
	}

	handleClick(e) {
		console.log(e)
	}

	render() {
		return (<div onClick={(e) => { this.handleClick({ ...e }) }}>{this.renderContent()}</div>);
	}

	renderContent() {
		if (this.mode == "edit") {
			return this.renderEditor();
		}
		else {
			return this.renderDisplay();
		}
	}

	renderEditor() {

	}

	renderDisplay() {

	}
}

export default Editor;