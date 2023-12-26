# About

This is a repository showing a minimal reproduction repo for an issue with URL-based imports.

When Importing via a module from `dist` from another package via `?url`, Vite does not copy any dependencies.

This project is a monorepo containing two projects:

- **animations** is the library that should be imported into the Frontend. It contains 2 Animations that in total result in 3 JS files being generated in `dist`
- **vite-frontend** is the actual frontend that imports the animations.

## Packages

### animations

Animations made with Motion Canvas. The details are not relevant for the Repro. What is important is that it generates 3 files, `animation1.js`, `animation2.js` and `makeScene2D-$hash.js`.

`animationX.js` both import `makeScene2D-$hash.js`.

### vite-frontend

This is just the Vanilla+TS Template. Inside the `main.ts` I import an animation file from the `animations` Package with the `?url` suffix and pass it Motion Canvas's Web Player.

The relevant part is that expects an URL to the animation, which does get provided with `?url`. Only issue here is that the animation's dependency, `makeScene2D-$hash.js` does **not** get bundled into the frontend.

## Steps to Reproduce

Inside the root, run `npm i`

Run `npm run build`. This will build both `animations` and `vite-frontend`.

Run `npm run host`. This will create a local server on Port 1234 serving `packages/vite-frontend/dist`.

You should see an Element with the Message _An error occurred while loading the animation._.  
Opening the Console, you will see that `GET http://localhost:1234/assets/makeScene2D-d2e6cdaa.js` has failed.

Stop the Server and run `npm run copy-makeScene2D`. This will simply copy the file from `packages/animations/dist/makeScene2D-...` to `packages/vite-frontend/dist/assets`.

Restart the Server with `npm run host`.
A primitive animation should be playable.
