import TextEditor from './editors/TextEditor.js';
export default {
	factory:function(metadata,value){
		if(metadata.type=="text"){
			return TextEditor;
		}
	}
}