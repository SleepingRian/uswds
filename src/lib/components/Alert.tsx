import '@uswds/uswds/css/uswds.css'
import '@sleepingrian/uswds/styles/index.scss'

export function Alert(props) {
  return (
    <div className={`usa-alert usa-alert--${props.status || "info"}`}>
      <div className="usa-alert__body">
        <h4 className="usa-alert__heading">
          {props.heading || "Untitled Alert"}
        </h4>
        <p className="usa-alert__text">
          {props.children || "Lorem ipsum dolor sit amet."}
        </p>
      </div>
    </div>
  );
}
