import React from 'react';
import Editor from '../editor.js';
class TextEditor extends Editor {
	renderEditor() {
 		return (<span>{this.name}</span>);
	}
}

export default TextEditor;