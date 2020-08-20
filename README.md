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
While developing, disable `purge` in `tailwind.config.js` so you
have access to all of Tailwind's utility classes while developing.

Eg.

```javascript
purge: {
  enabled: false;
}
```

After any change to `src/styles.css` or `tailwind.config.js` run
`npm run build-css` and Tailwind will compile a new stylesheet into `public/styles.css`.

When you're ready to merge your branch to master, make sure to enable purge again
and recompile the stylesheet. If you don't purge the unused styles, `styles.css`
can end up being greater than 4mb.

## Deploying to Github Pages

Github doesn't have a clear method of deploying subdirectories (eg. `public/`).

The current solution is to have the `gh-pages` branch hold only
the contents in `public/` and deploy the `gh-pages` branch.

❗This is temporary, there are some issues with this method regarding the CNAME
commit that's created when you add a custom domain on GitHub

To keep the deployed website up to date with master:

1. Make sure your local `master` branch is up to date
2. Navigate to the root directory
3. run: `git subtree push --prefix public origin gh-pages`

This will push the contents of the `public/` directory on `master` to the `gh-pages`
branch. Github will automatically update the contents of the deployed website
based on the new commits pushed.

[More information](https://gist.github.com/cobyism/4730490)
