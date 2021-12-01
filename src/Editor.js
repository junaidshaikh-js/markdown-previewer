const Editor = ({ markdown, onChange }) => {
  return (
    <section>
      <textarea
        id="editor"
        cols="30"
        rows="10"
        value={markdown}
        onChange={onChange}
      ></textarea>
    </section>
  );
};

export default Editor;
