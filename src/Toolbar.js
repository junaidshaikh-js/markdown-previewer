const Toolbar = ({ text, icon, onClick }) => {
  return (
    <div className="toolbar">
      <div>
        <i
          className="fa fa-free-code-camp"
          title="no-stack-dub-sack"
          style={{ marginRight: "8px" }}
        />
        {text}
      </div>
      <i className={icon} onClick={onClick} />
    </div>
  );
};

export default Toolbar;
