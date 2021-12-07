import { marked } from "marked";

marked.setOptions({
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
