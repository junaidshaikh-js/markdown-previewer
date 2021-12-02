const Editor = ({ markdown, onChange }) => {
  return (
    <div id="editor">
      <textarea
        id="editor-text"
        value={markdown}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
