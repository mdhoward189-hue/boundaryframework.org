# boundaryframework.org

Website for **the Boundary Framework**, from the Murray G. Bacon Center for AI Ethics in Business, Ivy College of Business, Iowa State University.

It's a static site (plain HTML, CSS and a little JavaScript) with no build step.

## Run it locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, videos, the three boundaries, boundary crossing, the governance cycle, downloads |
| `about.html` | About Mike Howard |

## Add a YouTube video

Open `js/videos.js` and add the video's ID to the `VIDEOS` list:

```js
const VIDEOS = [
  { id: "AbC123xyz", title: "What is the Boundary Framework?" },
];
```

The ID is the part after `v=` in a YouTube link. With an empty list, the page shows a "Video coming soon" slot. Videos are embedded from `youtube-nocookie.com`.

## Brand

Colors, type and logo use follow the Boundary Framework brand guide: cream `#F8F4EE`, maroon `#6A101C`, gold `#EDB84D` (logo dot only), Oswald and Barlow, square corners. Logo files are in `assets/logo/`. Always place the files; never retype or redraw the logo.

## Before launch

- [ ] Save Mike's Ivy College headshot as `assets/img/mike-howard.jpg` ([source](https://www.ivybusiness.iastate.edu/files/2026/03/MikeHoward-688x688-brighter.jpg)). The About page shows a placeholder until it's there.
- [ ] Mike approves his bio and photo.
- [ ] Replace `[contact address to be added]` in both footers.
- [ ] Add the first YouTube video ID.

## License

The Boundary Framework documents and site text are © 2026 Michael D. Howard and the Murray G. Bacon Center for AI Ethics in Business, Iowa State University, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See `LICENSE`.

> Howard, M. D., & Murray G. Bacon Center for AI Ethics in Business. (2026). *The Boundary Framework: Specification, version 1.0* (Draft for comment). Iowa State University.
