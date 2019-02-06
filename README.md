# Hello Friend

![Hello Friend](https://github.com/panr/hugo-theme-hello-friend/blob/master/images/screenshot.png?raw=true)

This theme was made to help you present your ideas easier. We all know how hard is to start something on the web, especially these days. You need to prepare a bunch of stuff, configure them and when that’s done — create the content.

This theme is pretty basic and covers all of the essentials. All you have to do is start typing!

### DEMO - https://hugo-hello-friend.now.sh/

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

```
$ git clone https://github.com/panr/hugo-theme-hello-friend.git themes/hello-friend
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

```
$ git submodule add https://github.com/panr/hugo-theme-hello-friend.git themes/hello-friend
```

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```
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

## How to run your site

From your Hugo root directory run:

```
$ hugo server -t hello-friend
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to edit the theme

If you have to override some of the styles, you can do this easily by adding `static/styles.css` in your root directory and point things you want to change.

Otherwise, if you really want to edit the theme, you need to install Node dependencies. To do so, go to the theme directory (from your Hugo root directory):

```
$ cd themes/hello-friend
```

and then run:

```
$ npm install
$ npm i yarn
$ yarn
```

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/panr/hugo-theme-hello-friend/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/panr/hugo-theme-hello-friend/pulls).

## Licence

Copyright © 2019 Radosław Kozieł ([@panr](https://twitter.com/panr))

The theme is released under the MIT License. Check the [original theme license](https://github.com/panr/hugo-theme-hello-friend/blob/master/LICENSE.md) for additional licensing information.
