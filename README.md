# Hello Friend

![Hello Friend](https://github.com/panr/hugo-theme-hello-friend/blob/master/images/screenshot.png?raw=true)

This theme was made to help you present your ideas easier. We all know how hard is to start something on the web, especially these days. You need to prepare a bunch of stuff, configure them and when that’s done — create the content.

This theme is pretty basic and covers all of the essentials. All you have to do is start typing!

### DEMO - https://hugo-hello-friend.now.sh/

---

- [Features](#features)
- [Built-in shortcodes](#built-in-shortcodes)
- [Code highlighting](#code-highlighting)
- [How to start](#how-to-start)
- [How to configure](#how-to-configure)
- [How to add a cover image to your posts](#how-to-add-a-cover-image-to-your-posts)
- [How to display the Last Modified Date in your posts](#how-to-display-the-last-modified-date-in-your-posts)
- [How to hide "Read more" button](#how-to-hide-read-more-button)
- [Add-ons](#add-ons)
- [How to run your site](#how-to-run-your-site)
- [How to edit the theme](#how-to-edit-the-theme)
- [How to contribute](#how-to-contribute)
- [Hello Friend theme user?](#hello-friend-theme-user)
- [Sponsoring](#sponsoring)
- [Licence](#licence)

## Features

- **dark/light mode**, depending on your preferences (dark is default, but you can change it)
- great reading experience thanks to [**Inter font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- nice code highlighting thanks to [**PrismJS**](https://prismjs.com)
- fully responsive

#### Built-in shortcodes

- **`image`** (prop required: **`src`**; props optional: **`alt`**, **`position`** (**left** is default | center | right), **`style`**)
  - eg: `{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}`
- **`figure`** (same as `image`, plus few optional props: **`caption`**, **`captionPosition`** (left | **center** is default | right), **`captionStyle`**
  - eg: `{{< figure src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Hello Friend!" captionPosition="right" captionStyle="color: red;" >}}`
- **`imgproc`** Hugo shortcode for image processing. More info at [https://gohugo.io/content-management/image-processing/](https://gohugo.io/content-management/image-processing/)

#### Code highlighting

By default the theme is using PrismJS to color your code syntax. All you need to do is to wrap you code like this:

<pre>
```html
  // your code here
```
</pre>

**Supported languages**: bash/shell, css, clike, javascript, apacheconf, actionscript, applescript, c, csharp, cpp, coffeescript, ruby, csp, css-extras, diff, django, docker, elixir, elm, markup-templating, erlang, fsharp, flow, git, go, graphql, less, handlebars, haskell, http, java, json, kotlin, latex, markdown, makefile, objectivec, ocaml, perl, php, php-extras, r, sql, processing, scss, python, jsx, typescript, toml, reason, textile, rust, sass, stylus, scheme, pug, swift, yaml, haml, twig, tsx, vim, visual-basic, wasm.

## How to start

You can download the theme manually by going to [https://github.com/panr/hugo-theme-hello-friend.git](https://github.com/panr/hugo-theme-hello-friend.git) and pasting it to `themes/hello-friend` in your root directory.

You can also clone it directly to your Hugo folder:

```bash
$ git clone https://github.com/panr/hugo-theme-hello-friend.git themes/hello-friend
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

```bash
$ git submodule add https://github.com/panr/hugo-theme-hello-friend.git themes/hello-friend
```

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```toml
baseurl = "/"
languageCode = "en-us"
theme = "hello-friend"
paginate = 5

[params]
  # dir name of your blog content (default is `content/posts`)
  contentTypeName = "posts"

  # "light" or "dark"
  defaultTheme = "dark"

  # if you set this to 0, only submenu trigger will be visible
  showMenuItems = 2

  # Show reading time in minutes for posts
  showReadingTime = false

[languages]
  [languages.en]
    title = "Hello Friend"
    subtitle = "A simple theme for Hugo"
    keywords = ""
    copyright = ""
    menuMore = "Show more"
    writtenBy = "Written by"
    readMore = "Read more"
    readOtherPosts = "Read other posts"
    newerPosts = "Newer posts"
    olderPosts = "Older posts"
    minuteReadingTime = "min read"
    dateFormatSingle = "2006-01-02"
    dateFormatList = "2006-01-02"
    # leave empty to disable, enter display text to enable
    # lastModDisplay = ""

    [languages.en.params.logo]
      logoText = "hello friend"
      logoHomeLink = "/"
    # or
    #
    # path = "/img/your-example-logo.svg"
    # alt = "Your example logo alt text"

    [languages.en.menu]
      [[languages.en.menu.main]]
        identifier = "about"
        name = "About"
        url = "/about"
      [[languages.en.menu.main]]
        identifier = "showcase"
        name = "Showcase"
        url = "/showcase"
```

to `config.toml` file in your Hugo root directory and change params fields. In case you need, here's [a YAML version](https://gist.github.com/panr/8f9b363e358aaa33f6d353c77feee959).

**NOTE:** Please keep in mind that currently main menu doesn't support nesting.

## How to add a cover image to your posts

Adding a cover image to your post is simple and there are two options when you edit your `index.md` file in `content/posts/blog-entry-xy/index.md`:

* Use `cover = "/path/to/absolute/img.jpg"` to link an absolute image
  * Resulting in `https://www.yourpage.com/path/to/absolute/img.jpg`
* Use `cover = "img.jpg"` and `useRelativeCover = true` to link the image relative to the blog post folder
  * Resulting in `https://www.yourpage.com/posts/blog-entry-xy/img.jpg`

## How to display the Last Modified Date in your posts

Add `lastModDisplay = "[your display text]"` to `config.toml` to enable last modified date on your posts. Note - an empty string value `""` does not display anything.

Example: `lastModDisplay = "Modified:"` --> "Modified: Jan 01, 0001"

:octocat: Hugo's `enableGitInfo` option is a nice complement to this feature.

## How to hide "Read more" button

In a post's front matter you have to add `hideReadMore` param set to `true`. This will result in that the post won't have "Read more" button in the list view.

## Add-ons

- **Archive** — Theme has built-in `archive` page for main content (see `contentTypeName` variable in config). If you need archive on your blog just copy https://github.com/panr/hugo-theme-hello-friend/blob/master/exampleSite/content/archive.md to your `content` dir. If you need multilangual archives, duplicate `content/archive.md` and add `.Lang` variable, eg: `content/archive.pl.md` (remember to change `url` in duplicated file).
- **Comments** — for adding comments to your blog posts please take a look at `layouts/partials/comments.html` https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/comments.html.
- **Prepended `<head>`** — if you need to add something inside `<head>` element, and before any of the theme's `<script>` and `<link>` tags are declared, please take a look at `layouts/partial/prepended_head.html` https://github.com/panr/hugo-theme-hello-friend/blob/master/layouts/partials/prepended_head.html
- **Extended `<head>`** — if you need to add something inside `<head>` element, after all of all of the theme's `<script>` and `<link>` tags are declared, please take a look at `layouts/partial/extended_head.html` https://github.com/panr/hugo-theme-hello-friend/blob/master/layouts/partials/extended_head.html
- **Extended `<footer>`** — if you need to add something before end of `<body>` element, please take a look at `layouts/partial/extended_footer.html` https://github.com/panr/hugo-theme-hello-friend/blob/master/layouts/partials/extended_footer.html

## How to run your site

From your Hugo root directory run:

```bash
$ hugo server -t hello-friend
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to edit the theme

If you have to override some of the styles, you can do this easily by adding `static/style.css` in your root directory and point things you want to change.

Otherwise, if you really want to edit the theme, you need to install Node dependencies. To do so, go to the theme directory (from your Hugo root directory):

```bash
$ cd themes/hello-friend
```

and then run:

```bash
$ npm install
$ npm i yarn
$ yarn
```

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/panr/hugo-theme-hello-friend/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/panr/hugo-theme-hello-friend/pulls).

## `Hello Friend` theme user?

I'd be happy to know more about you and what you are doing. If you want to share it, please make a contribution and [add your site to the list](https://github.com/panr/hugo-theme-hello-friend/blob/master/USERS.md)! 🤗

## Sponsoring

If you like my work and want to support the development of the project, now you can! Just:

<a href="https://www.buymeacoffee.com/panr" target="_blank"><img src="https://res.cloudinary.com/panr/image/upload/v1579374705/buymeacoffee_y6yvov.svg" alt="Buy Me A Coffee" ></a>

## License

Copyright © 2019 Radosław Kozieł ([@panr](https://twitter.com/panr))

The theme is released under the MIT License. Check the [original theme license](https://github.com/panr/hugo-theme-hello-friend/blob/master/LICENSE.md) for additional licensing information.
