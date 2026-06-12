const Card = (props) => {
  const classes =
    "rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.25)] " + (props.className || "");

  return <div className={classes}>{props.children}</div>;
};

export default Card;
