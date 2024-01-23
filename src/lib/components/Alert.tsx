/*

Props:
  header: string
  text: string
  status: string (info, slim, emergency, heading, text, validation)

*/


export function Alert(props) {
  return (
    <div className={`usa-alert usa-alert--${props.status || "info"}`}>
      <div className="usa-alert__body">
        <h4 className="usa-alert__heading">
          {props.header || "Untitled Alert"}
        </h4>
        <p className="usa-alert__text">
          {props.text}
          {props.children}
          {!props.text && !props.children && "No description provided."}
        </p>
      </div>
    </div>
  );
}