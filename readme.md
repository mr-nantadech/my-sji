# Developing the SJI Library

This library requires Node.js and the TypeScript compiler.

## Installation

1. **Download and install Node.js:** [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. **Install TypeScript:** `npm install --save-dev typescript`
3. **Install project dependencies:** `npm install`
4. **Clone the repository:** `git clone https://github.com/mr-nantadech/my-sji.git`
5. **Checkout a new branch from `main`:** `git checkout -b <your-branch-name>`
6. **Edit the library code:** The main library file is `my-sji-lib.ts`. Interface definitions are located in `/interface/my-sji-type.ts`.


## Contributing Changes

1. **Commit your changes:** `git commit -m "Your descriptive commit message"`
2. **Push your branch:** `git push --set-upstream origin <your-branch-name>`

## Releasing a New Version (Tagged Release)

1. **View existing tags:** `git tag`
2. **Create a new tag (incrementing from the last version):** `git tag v1.0.x` (replace `1.0.x` with the correct version number)
3. **Push the new tag:** `git push origin v1.0.x`

## Using the Library via CDN

You can include the minified library in your project using the following CDN link (replace `1.0.x` with the desired version tag):

```html
<script src="https://cdn.jsdelivr.net/gh/mr-nantadech/my-sji@1.0.x/my-sji-lib.min.js"></script>