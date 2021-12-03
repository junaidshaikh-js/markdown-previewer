import { marked } from "marked";
import Prism from "prismjs";

marked.setOptions({
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },

  gfm: true,
  headerIds: false,
  breaks: true,
});

const Preview = ({ markdown, className }) => {
  const rawMarkup = marked(markdown);
  return (
    <>
      <div
        id="preview"
        className={className}
        dangerouslySetInnerHTML={{
          __html: rawMarkup,
        }}
      ></div>
    </>
  );
};

export default Preview;
