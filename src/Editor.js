const Editor = ({ markdown, onChange, className }) => {
  return (
    <div id="editor" className={className}>
      <textarea
        id="editor-text"
        value={markdown}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
