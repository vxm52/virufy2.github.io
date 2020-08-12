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

If you want to add small custom styles (eg. fonts, colors), you can do so
by extending Tailwind's defaults in `tailwind.config.js`.  

`tailwind-default.config.js`
is a copy of Tailwind's defaults (this isn't the file actually being used by Tailwind). 
You can view the structure in there for reference.

If you want to create reusable component classes, you can add them to
`src/styles.css` (**NOT** `public/styles.css`). Recommendation: Use
Tailwind's `@apply` directive along with the available utility classes.

**Important:**
Once you've made your changes, run `npm run build-css`
and Tailwind will compile a new stylesheet into
`public/styles.css`.
