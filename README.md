# Jramma's Portfolio 🚀

**Check the web!**:
www.jramma.com

This is my first Astro website, and I'm still fixing bugs. Any help is welcome.

The Swiper dependency is used in GaleriaSlider.astro, which I'm refining, but it still has errors.

## Structure 🌳

The 'public' folder contains all the images. Ideally, all the data would come from a database, which will be implemented in the next update using AstroDB.

PS: The images are not free to use. This is the only aspect of the project that you can't copy.

```
/src
	/assets
		global.css
	/components
		/foto
			All .astro files of photography path
		/home
			Title.astro
		/projects
			All .astro files of projects path
	Card.astro (default Astro card)
	Enllac.astro: personal link
	Theme.astro: dark mode
	TornarInici.astro: menu for returning home
/data
	All .json files with data
/icons
	.svg files
/pages
	Works with Astro logic. I used .md files as in the Astro tutorial (refer to Astro docs)
```

### Web captures

**Image view**
![alt text](<Captura de pantalla 2024-04-23 a las 4.49.02 p. m..png>)

**Gallery**
![alt text](<Captura de pantalla 2024-04-23 a las 4.48.51 p. m..png>)

**Home**
![alt text](<Captura de pantalla 2024-04-23 a las 4.48.25 p. m..png>)

**Hacker Porfolio** 🖥️
![alt text](<Captura de pantalla 2024-04-23 a las 5.20.38 p. m..png>)

## Dependencies 📚

- `@astrojs/check`: A utility for checking the compatibility of Astro components. Version `^0.5.10` is being used.
- `@astrojs/preact`: This is a renderer for Astro that allows you to write components using Preact. Version `^3.1.2` is being used.
- `@astrojs/solid-js`: This is a renderer for Astro that allows you to write components using Solid.js. Version `^4.0.1` is being used.
- `@astrojs/svelte`: This is a renderer for Astro that allows you to write components using Svelte. Version `^5.3.0` is being used.
- `@astrojs/tailwind`: This is a plugin for Astro that allows you to use Tailwind CSS in your Astro components. Version `^5.1.0` is being used.
- `astro`: This is the main package for Astro, a front-end framework for building faster websites with less client-side JavaScript. Version `^4.5.16` is being used.
- `astro-icon`: This package provides a set of SVG icons that can be used in your Astro components. Version `^1.1.0` is being used.
- `photoswipe`: This is a JavaScript gallery, very useful for mobile websites. Version `^5.4.3` is being used.
- `preact`: This is a fast, 3kB alternative to React, with the same modern API. Version `^10.20.1` is being used.
- `swiper`: This is a modern mobile touch slider with hardware accelerated transitions. Version `^11.1.0` is being used.
- `tailwind-scrollbar-hide`: This is a plugin for Tailwind CSS that provides utilities to hide the scrollbar. Version `^1.1.7` is being used.
- `typescript`: This is a typed superset of JavaScript that compiles to plain JavaScript. Version `^5.4.3` is being used.