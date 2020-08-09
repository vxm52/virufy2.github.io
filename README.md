# Website

## Installation

**Prerequisites:**

- [Node](https://www.nodejs.org) must be installed on your machine.

Once you've cloned the repo to your local machine, in the project directory, you
can run:

### `npm install`

Installs all the dependencies for local development.

## Updating Styles

The [Tailwind CSS Docs](https://www.tailwindcss.com/docs) lists all the
available utility classes, which should cover most styling requirements.

If you want to add custom CSS, make sure to work on `src/styles.css` **NOT**
`public/styles.css`. Once you've made your changes, run `npm run build-css`
and Tailwind will compile a new stylesheet into
`public/styles.css`.
