import { useState } from "react";

import "./App.scss";

import Editor from "./Editor";
import Preview from "./Preview";
import ToolBar from "./Toolbar";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

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
  const [markdown, setMarkdown] = useState(placeholder);
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const [isPreviewerMaximized, setIsPreviewerMaximized] = useState(false);

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  function handleEditorClick() {
    setIsEditorMaximized(true);
  }

  function handlePreviewClick() {
    setIsPreviewerMaximized(true);
  }

  return (
    <div className="main-wrapper">
      <main>
        <section class="editor-section">
          <ToolBar
            text="Editor"
            onClick={handleEditorClick}
            icon="fa fa-arrows-alt"
          />
          <Editor onChange={handleChange} markdown={markdown} />
        </section>

        <section className="preview-section">
          <ToolBar
            text="Previewer"
            onClick={handlePreviewClick}
            icon="fa fa-arrows-alt"
          />
          <Preview markdown={markdown} />
        </section>
      </main>
    </div>
  );
}

export default App;
