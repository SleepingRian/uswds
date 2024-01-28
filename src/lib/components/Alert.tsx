export function Alert(props) {
  return (
    <div
      className={`usa-alert usa-alert--${props.status || "info"} ${
        props.slim && "usa-alert--slim"
      }`}
    >
      <div className="usa-alert__body">
        {!props.slim && (
          <h4 className="usa-alert__heading">
            {props.header || "Untitled Alert"}
          </h4>
        )}
        <p className="usa-alert__text">
          {props.text}
          {props.children}
          {!props.text && !props.children && "No description provided."}
        </p>
      </div>
    </div>
  );
}
