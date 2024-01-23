export function Banner() {
    return (
        <div className="usa-banner__inner">
        <div className="grid-col-auto">
          <img
            aria-hidden="true"
            className="usa-banner__header-flag"
            src="/../node_modules/@uswds/uswds/dist/img/us_flag_small.png"
            alt=""
          />
        </div>
        <div className="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
          <p className="usa-banner__header-text">
            An official website of the United States government
          </p>
          <p className="usa-banner__header-action">Here’s how you know</p>
        </div>
        <button
          type="button"
          className="usa-accordion__button usa-banner__button"
          aria-expanded="false"
          aria-controls="gov-banner-default"
        >
          <span className="usa-banner__button-text">Here’s how you know</span>
        </button>
      </div>
    )
}