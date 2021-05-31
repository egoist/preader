# preader

Extract the main content from a web page.

[Try some article.](https://preader.egoist.sh/?url=https://foreignpolicy.com/2021/05/28/fragile-india-strong-india/)

Note that scrapper code is ported from [miniflux.app](https://miniflux.app/).

## Bookmarklet

```js
javascript:void function(){window.location=`https://preader.egoist.sh/%3Furl=${window.location.href}`}();
```

Create a bookmark in your browser with the above code as the URL for the bookmark. Now when you activate that new bookmark, it will take the current page your on and open it in the prereader site.

## License

MIT.
