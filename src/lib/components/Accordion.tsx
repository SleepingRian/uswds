"use client";

import { useState } from "react";

function AccordianContent(props: any) {
  return (
    <>
      <h4 className="usa-accordion__heading">
        <button
          type="button"
          className="usa-accordion__button"
          aria-expanded={props.openId === props.id}
          aria-controls="a1"
          onClick={() => {
            if (props.openId === props.id) {
              props.setOpenId();
            } else {
              props.setOpenId(props.id);
            }
          }}
        >
          {props.header || "Untitled"}
        </button>
      </h4>
      {props.openId === props.id && (
        <div id="a1" className="usa-accordion__content usa-prose">
          <p>{props.text || "No Text Found"}</p>
        </div>
      )}
    </>
  );
}

export function Accordion(props: any) {
  const [openId, setOpenId] = useState();

  return (
    <div className="usa-accordion">
      {props.content.map((content: any, index: number) => {
        return (
          <AccordianContent
            key={index}
            id={index}
            header={content.header}
            text={content.text}
            openId={openId}
            setOpenId={setOpenId}
          />
        );
      })}
    </div>
  );
}
