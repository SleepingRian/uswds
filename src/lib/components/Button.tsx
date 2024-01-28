import clsx from "clsx";

export function Button(props: any) {
  return (
    <div>
      <button
        className={clsx(
          "usa-button",

          /* Default Style Props */
          props.hover && "usa-button--hover",
          props.active && "usa-button--active",
          props.focus && "usa-focus",
          props.unstyled && "usa-button--unstyled",

          /* Secondary Style Props */
          props.default_secondary && "usa-button--secondary",
          props.hover_secondary && "usa-button--secondary usa-button--hover",
          props.active_secondary && "usa-button--secondary usa-button--active",
          props.focus_secondary && "usa-button--secondary usa-focus"
        )}
        /* Extra Style Props */
        disabled={props.disabled ?? false}
        aria-disabled={props.aria_disabled ?? false}
      >
        {props.text || "No Text Found"}
      </button>
    </div>
  );
}
