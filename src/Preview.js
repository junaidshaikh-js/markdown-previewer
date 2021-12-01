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

const Preview = ({ markdown }) => {
  const rawMarkup = marked(markdown);
  return (
    <section>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: rawMarkup,
        }}
      ></div>
    </section>
  );
};

export default Preview;
