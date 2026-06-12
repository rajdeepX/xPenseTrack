const Card = (props) => {
  const classes =
    "rounded-2xl border border-ledger-border/60 bg-ledger-surface/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.35)] " +
    (props.className || "");

  return <div className={classes}>{props.children}</div>;
};

export default Card;
