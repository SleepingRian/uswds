export function Banner(props) {
  return (
    <header className="usa-banner__header">
      <div className="usa-banner_inner">
        <div className="grid-col-auto">
          <img
            aria-hidden="true"
            src=""    // Fix the flag issue first before adding a final path
            alt=""    // Make this a prop so users can pass their own alt tags
          />
          <div className="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
            <p className="usa-banner__header-text">
              {props.text}
            </p>
            <p className="usa-banner__header-action">
              {props.actiontext}
            </p>
          </div>
          <button
            type="button"
            className="usa-accordion__button usa-banner__button"
            aria-expanded="false"
            aria-controls="gov-banner-default"
          >
          <span className="usa-banner__button-text">{props.actiontext}</span>
          </button>
        </div>
      </div>
    </header>
  )
}



// export function Banner() {
//     return (
//       <header className="usa-banner__header">
//       <div className="usa-banner__inner">
//         <div className="grid-col-auto">
//           <img
//             aria-hidden="true"
//             className="usa-banner__header-flag"
//             src="../assets/us_flag_small.png"
//             alt=""
//           />
//         </div>
//         <div className="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
//           <p className="usa-banner__header-text">
//             An official website of the United States government
//           </p>
//           <p className="usa-banner__header-action">Here’s how you know</p>
//         </div>
//         <button
//           type="button"
//           className="usa-accordion__button usa-banner__button"
//           aria-expanded="false"
//           aria-controls="gov-banner-default"
//         >
//           <span className="usa-banner__button-text">Here’s how you know</span>
//         </button>
//       </div>
//     </header>
//     )
// }
