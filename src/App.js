import './App.css';
import React,{useState} from "react";
import Markdown from 'marked-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderer = {
  code(snippet, lang) {
    return <SyntaxHighlighter language="javascript" style={atomDark}>{snippet}</SyntaxHighlighter>;
  },
};

const placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [text,setText] = useState(placeholder)
  return (
    <div class="background flex-column center">
    <div class="flex-column center wrapper editor">
      <div class="editor-label title-text">Editor</div>
        <textarea id="editor" value={text} onChange={e => setText(e.target.value)} class="text-area"></textarea>
    </div>
    <Preview prevText={text}/>
    </div>
  )}

  function Preview(props){
    
    return(
      <div class="flex-column center wrapper preview">
        <div class="editor-label title-text">Preview</div>
        <div id="preview" class="text-area">
          <Markdown class="max-size" value={props.prevText} renderer={renderer}></Markdown>
        </div>
    </div>
    )
  }
export default App;
