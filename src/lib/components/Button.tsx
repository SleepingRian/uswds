import clsx from "clsx";

export function Button(props: any) {
  return (
    <div>
      <button
        className={clsx(
          "usa-button",
          props.default && "usa-button",
          props.secondary && "usa-button--secondary",
          props.cool && "usa-button--accent-cool",
          props.warm && "usa-button--accent-warm",
          props.base && "usa-button--base",
          props.outline && "usa-button--outline",
          props.inverse && "usa-button--outline usa-button--inverse",
          props.big && "usa-button--big"
        )}
        disabled={props.disabled ?? false}
        aria-disabled={props.aria_disabled ?? false}
      >
        {props.text || "No Text Found"}
      </button>
    </div>
  );
}
