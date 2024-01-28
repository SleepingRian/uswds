# 🦅 United States Web Design System 🦅

[![npm Version](https://img.shields.io/npm/v/@sleepingrian/uswds?style=for-the-badge)](https://www.npmjs.com/package/@sleepingrian/uswds) [![npm Downloads](https://img.shields.io/npm/dt/@sleepingrian/uswds?style=for-the-badge)](https://www.npmjs.com/package/@sleepingrian/uswds) [![GitHub issues](https://img.shields.io/github/issues/@sleepingrian/uswds?style=for-the-badge&logo=github)](https://github.com/@sleepingrian/uswds/issues) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?style=for-the-badge)]

The [United States Web Design System](https://designsystem.digital.gov) includes a library of open source UI components and a visual style guide for U.S. federal government websites.

This repository is a port of the original design system itself, the goal of this project is to make USWDS components viable and easy to use inside of React projects, without the need to compile the system's original SCSS, and providing a simplified development experience.

This project has taken a simplified approach to converting USWDS components to React components, that approach being the use of props! While there are other React ports of the USWDS system, they are either outdated, hard to setup, or not maintained at all. Luckily, because of our simplified approach we can easily update our components following a breaking version release of USWDS and make sure that, the end user, doesn't have to waste your time.

## Important Notes

This project tests it's components using the NextJS framework, and this framework is compatible with any React-based framework, however the current version `1.38.0` has a breaking issue with images, this will eventually be fixed but the cause is how static images are usually served differently based on the specific framework, thus using images isn't as simple as pulling them from the package itself. If you are using NextJS, you can create a `images` folder on the `public` folder and then place all of the packages `assets` folder under it, and update the image paths to /images/image.png. We do apologize for this, but it will be fixed in a future version, ASAP.

The project also provides default text props, for example the `<Banner/>` component hosts a owner prop which you can customize, but by default it will be set to "United States government" unless the prop is otherwise edited!

## Roadmap

- We plan to implement more customization via the actual USWDS css.
- We plan to implement all USWDS components within the next month, but keep in mind we are a 2 man team, but we do have great contributors!

## Example Component

`<Banner owner="United States government" action="Here's how you know" />`

## Closing Notes

This project is a work-in-progress, but you should be able to start using it now, not all components are implemented however.
