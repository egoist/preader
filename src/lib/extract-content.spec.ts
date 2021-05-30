import { extractContent } from './extract-content'

test('transform div to p', () => {
  const result = extractContent(
    'foo.com',
    `
  <!DOCTYPE html>
  <html prefix="og: http://ogp.me/ns#" lang="en-US">
      <head>
          <!-- Piano ad blocker -->
          <script>
              document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
              var setNptTechAdblockerCookie = function(adblocker) {
                  var d = new Date();
                  d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
                  document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
              }
              var script = document.createElement("script");
              script.setAttribute("async", true);
              script.setAttribute("src", "//www.npttech.com/advertising.js");
              script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
              document.getElementsByTagName("head")[0].appendChild(script);
          </script>
          <!-- End Piano ad blocker -->
  
          <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>Why the United States Needs Gay Reparations Now</title>
  
          <meta name="wapoGroupsX" content="default">
          <meta name="google-site-verification" content="7Z5A6Xlt7BhqqooipJUtw0cu2IjSQ-_RnNbEA2c6pfc">
          <meta name="apple-itunes-app" content="app-id=1034756405">
          <meta name="pocket-site-verification" content="21de1071947281ccc893fa0bbfb1f6" />
          
                  <!-- CANONICAL -->
          <link rel="canonical" href="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/">
  
                      <!-- FB Tags -->
              <meta property="og:title" content="Gay Reparations Are Past Due">
              <meta property="og:image" itemprop="image" content="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=1000">
              <meta property="og:url" content="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/">
              <meta property="og:description" content="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it.">
              <meta property="og:site_name" content="Foreign Policy">
              <meta property="fb:app_id" content="107151292643652" />
              <meta property="og:type" content="article" />
              <meta property="og:updated_time" content="1622294284" />
  
              <!-- Twitter Tags -->
              <meta name="twitter:card" content="summary_large_image">
              <meta name="twitter:site" content="@ForeignPolicy">
              <meta name="twitter:title" content="Gay Reparations Are Past Due">
              <meta name="twitter:description" content="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it.">
              <meta name="twitter:image" content="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=1000">
              <meta property="twitter:domain" value="foreignpolicy.com"/>
  
              <!-- Author Tags -->
              <meta property="article:author" content="Omar G. Encarnación">
              <meta name="author" content="Omar G. Encarnación">
  
          
                  
          
  
          <!-- Preload fonts -->
          <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/dala-moa--normal--800.woff2" as="font" type="font/woff2" crossorigin>
          <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/tiempos--normal--600.woff2" as="font" type="font/woff2" crossorigin>
          <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/solido--normal--400.woff2" as="font" type="font/woff2" crossorigin>
          <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/tiempos--normal--400.woff2" as="font" type="font/woff2" crossorigin>
                  <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/solido-condensed--normal--600.woff2" as="font" type="font/woff2" crossorigin>
          <link rel="preload" href="/wp-content/themes/foreign-policy-2017/assets/dist/fonts/solido--normal--800.woff2" as="font" type="font/woff2" crossorigin>
          
  
          <meta
      name="application-name"
      content="Foreign Policy">
  <meta
      name="apple-mobile-web-app-title"
      content="Foreign Policy">
  <meta name="theme-color" content="#eb372e">
  <meta name="msapplication-TileColor" content="#eb372e">
  <meta
      name="msapplication-TileImage"
      content="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/favicon-256.png">
  <link
      rel="apple-touch-icon"
      sizes="192x192"
      type="image/png"
      href="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/favicon-192.png">
  <link
      rel="icon"
      sizes="192x192"
      type="image/png"
      href="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/favicon-192.png">
  <link
      rel="icon"
      sizes="16x16 32x32"
      type="image/x-icon"
      href="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/favicon.ico">
          <script>
      window.FP = window.FP || {};
      FP.Config = {"api":{"ip_access":"https:\/\/foreignpolicy.com\/r\/api\/ip-access\/","link_access":"https:\/\/foreignpolicy.com\/r\/api\/link-access\/{0}\/","users_by_id":"https:\/\/foreignpolicy.com\/r\/api\/users\/{0}\/"},"context":{"is_home":false,"is_sponsored":false,"is_events":false,"is_chinadaily":false},"current_site_admin_hostname":"foreignpolicy.com","current_site_hostname":"foreignpolicy.com","fonts":[{"family":"Dala Moa","option":{"style":"normal","weight":800}},{"family":"Solido","option":{"style":"normal","weight":400}},{"family":"Tiempos","option":{"style":"normal","weight":400}},{"family":"Tiempos","option":{"style":"normal","weight":600}},{"family":"Solido","option":{"style":"normal","weight":800}},{"family":"Solido Condensed","option":{"style":"normal","weight":600}}],"is_production":true,"marketing":{"after_content_messaging":"<p>Like this article? Read an unlimited number of articles, plus access to our entire 47-year printed archive, the FP App, and the Digital Magazine when you <strong><a href=\"https:\/\/foreignpolicy.com\/subscribe?utm_source=AMP%20-%20Launched%2018_08_23&amp;utm_medium=AMP&amp;utm_campaign=Premium\">subscribe to FP Premium<\/a><\/strong>!<\/p>","after_content_messaging_fbia":"<p>Like this article? Read an unlimited number of articles, plus access to our entire 47-year printed archive, the FP App, and the Digital Magazine when you <strong><a href=\"https:\/\/foreignpolicy.com\/subscribe?utm_source=FBIA%20-%20Launched%2018_09_04&amp;utm_medium=FBIA&amp;utm_campaign=Premium\">subscribe to FP Premium<\/a><\/strong>!<\/p>"},"misc":{"current_magazine_issue":{"isset":true,"link":"https:\/\/foreignpolicy.com\/the-magazine\/"}},"referrers":["google.com"],"user":{"login_url":"https:\/\/fp-reg.onecount.net\/onecount\/login\/loginlogout.cgi","logout_url":"https:\/\/fp-reg.onecount.net\/onecount\/login\/loginlogout.cgi","edit_profile_url":"https:\/\/fp-reg.onecount.net\/onecount\/flexreg\/displayform.php?g=0&form=387","registration_url":"http:\/\/fp-reg.onecount.net\/onecount\/flexreg\/displayform.php?form=137&brand=fp","customer_service_url":"https:\/\/subscribe.foreignpolicy.com\/FRP\/?f=custcare","view_count_limit":null,"paywall_resource_id":null,"registration_product_ids":[34],"subscription_product_ids":[26,235],"premium_product_ids":[145],"newsletter_ids":[177,185,129,161,227,317]},"widgets":[]};
      window.lazySizesConfig = window.lazySizesConfig || {};
      lazySizesConfig = {"lazyClass":"-lazy","preloadClass":"-preloaded","loadingClass":"-loading","loadedClass":"-loaded"};
  </script>
  <meta name='robots' content='max-image-preview:large' />
  <link rel='dns-prefetch' href='//ajax.googleapis.com' />
  <link rel='dns-prefetch' href='//lngtd.com' />
  <link rel='dns-prefetch' href='//c.jsrdn.com' />
  <link rel='dns-prefetch' href='//s.w.org' />
  <link rel="alternate" type="application/rss+xml" title="Foreign Policy &raquo; Gay Reparations Are Past Due Comments Feed" href="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/feed/" />
          <script type="text/javascript">
              window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/foreignpolicy.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.7.2"}};
              !function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
          </script>
          <style type="text/css">
  img.wp-smiley,
  img.emoji {
      display: inline !important;
      border: none !important;
      box-shadow: none !important;
      height: 1em !important;
      width: 1em !important;
      margin: 0 .07em !important;
      vertical-align: -0.1em !important;
      background: none !important;
      padding: 0 !important;
  }
  </style>
      <link rel='stylesheet' id='all-css-0' href='https://foreignpolicy.com/_static/??-eJytk0FOxDAMRS+Ex7QaUVggjjJyE08bmsRR7DLq7cmMKjbsoEtb/u9L3zbeCoTs4upZ0amiD2o4RnELxDBWqhuqbZFPKeRTG3jCpnCSjbOhzZya7iqVw5ShSAxug/65G5BU2XbcA6A4kjJeEv0b5CQVyU2nqDNV9kdTZybP9WhqkdY+mGm0sHxx1aPBiTJNh6/rKmJ/CVaNLLgdOPPdgbwCRa6mwKPIAoW2G8UIP5FAkjFEBvKXFNRB5Inc9ss2rVDiOoWs+MlWqF3+22l4PMNe3yUf6b176fvu3A2vwzd6hjFk' type='text/css' media='all' />
  <style id='wp-block-library-inline-css'>
  .has-text-align-justify{text-align:justify;}
  </style>
  <script type='text/javascript' src='https://foreignpolicy.com/_static/??-eJytzlEOgjAQBNALWRYwlvhhPEsti5aUbrNTMXB6IfEG+DeZZF6GPtl4SYVTofLiiUGDKIdnMlli8Itp66YjB3ABQT3Ba8hbnjn1osSwJqtMAVy5d5FqxImOosM2HpxneYB1Zq1QXOpdlMTH/F+1+/jL0+jWBWHlXbtPt8bW17brzvYyfgF8qX/F'></script>
  <link rel="https://api.w.org/" href="https://foreignpolicy.com/wp-json/" /><link rel="alternate" type="application/json" href="https://foreignpolicy.com/wp-json/wp/v2/posts/1045575" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://foreignpolicy.com/xmlrpc.php?rsd" />
  <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://foreignpolicy.com/wp-includes/wlwmanifest.xml" /> 
  <meta name="generator" content="WordPress 5.7.2" />
  <link rel="canonical" href="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/" />
  <link rel='shortlink' href='https://bit.ly/3fwI2mW' />
  <link rel="alternate" type="application/json+oembed" href="https://foreignpolicy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fforeignpolicy.com%2F2021%2F05%2F29%2Fgay-reparations-lgbtq-united-states%2F" />
  <link rel="alternate" type="text/xml+oembed" href="https://foreignpolicy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fforeignpolicy.com%2F2021%2F05%2F29%2Fgay-reparations-lgbtq-united-states%2F&#038;format=xml" />
  <style type='text/css'>img#wpstats{display:none}</style>
          <link rel="icon" href="https://foreignpolicy.com/wp-content/uploads/2017/12/cropped-favicon-512_2017.png?w=32" sizes="32x32" />
  <link rel="icon" href="https://foreignpolicy.com/wp-content/uploads/2017/12/cropped-favicon-512_2017.png?w=192" sizes="192x192" />
  <link rel="apple-touch-icon" href="https://foreignpolicy.com/wp-content/uploads/2017/12/cropped-favicon-512_2017.png?w=180" />
  <meta name="msapplication-TileImage" content="https://foreignpolicy.com/wp-content/uploads/2017/12/cropped-favicon-512_2017.png?w=270" />
  
          
  
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-6874192-41"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
  
      // Add additional data for GA / GTM
      dataLayer.push({
          'author': "Omar G. Encarnaci\u00f3n",
          'category': "Argument", 
          'datePublished': "2021-05-29",
          'editor': "Kathryn Salam",
          'region': "Americas",
          'tags': "Human Rights, LGBTQ Rights, Sex and Gender, United States", 
          'vertical': "Americas",
          'pageType': "Article",
          'inMagazine': "",
          // Values below defined after OC JS runs
          'accessId': "",
          'accessGroup': "",
          'subscriberState': ""
      });
  
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      // Remove for now - gtag('config', 'UA-6874192-41');
  
      // GA set config and WP post content group
      // GA track page group -  syntax: gtag('config', 'GA_TRACKING_ID', {'content_group5': '/news/sports'});
      if ('undefined' !== typeof realReferer && '' !== document.referrer && realReferer !== document.referrer) {
          // ONECount tracking override
          dataLayer.push({
              'dimension2': 'LID',
              'dimension3': 'RGRP',
              'dimension4': 'VID',
              'realReferer': realReferer,
              // track category as content group, may be replaced by dataLayer below
              'content_group1': "Argument"        });
      } else {
          // Standard tracking
          dataLayer.push({
              'dimension2': 'LID',
              'dimension3': 'RGRP',
              'dimension4': 'VID',
              // track category as content group, may be replaced by dataLayer below
              'content_group1': "Argument"        });
      }
  </script>
  
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KVBCHJC');</script>
          <!-- End Google Tag Manager -->
  
          <!-- Native ads -->
                  <!-- End Native ads -->
  
              </head>
      <body class="post-template-default single single-post postid-1045575 single-format-standard site-root">
  
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVBCHJC"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
  
          <div id="site-wrapper">            <header class="site-header">
                  <a href="https://foreignpolicy.com/" class="logo">
      <svg class="site-icon -inline -textonly" width="75" height="47.5" viewBox="0 0 75 47.5"><path fill="#EE3524" d="M39.4,8.7H40V0.5H0v0.8c4.5,0.2,7.4,0.8,7.4,4.9v36c0,4.2-2.9,4.8-7.4,4.9V48h26.2v-0.8c-5.2-0.3-9-0.8-9-4.9
          V25.2h8.7c3,0,4.2,2.2,4.9,6.2h0.5V18h-0.5c-0.7,4-1.9,6.2-4.9,6.2h-8.7V1.3h13.3C35.9,1.3,37.7,2.8,39.4,8.7 M52.9,25.2h6.2
          c11.1,0,15.9-5.8,15.9-13.1c0-6.4-4.5-11.7-17.3-11.7H40.9l0,41.8c0,4.2-2.9,4.8-7.4,4.9V48h27.3v-0.8c-5.2-0.3-9-0.8-9-4.9V1.5
          h3.4c6.1,0,9.5,5.5,9.5,12c0,7.5-3.5,10.8-9.6,10.8h-2.4V25.2z"/></svg><!--hide-mobile-->
  <!--svg class="site-icon -inline -textonly hide-desktop" width="75" height="47.5" viewBox="0 0 75 47.5"><path fill="#FFFFFF" d="M39.4,8.7H40V0.5H0v0.8c4.5,0.2,7.4,0.8,7.4,4.9v36c0,4.2-2.9,4.8-7.4,4.9V48h26.2v-0.8c-5.2-0.3-9-0.8-9-4.9
          V25.2h8.7c3,0,4.2,2.2,4.9,6.2h0.5V18h-0.5c-0.7,4-1.9,6.2-4.9,6.2h-8.7V1.3h13.3C35.9,1.3,37.7,2.8,39.4,8.7 M52.9,25.2h6.2
          c11.1,0,15.9-5.8,15.9-13.1c0-6.4-4.5-11.7-17.3-11.7H40.9l0,41.8c0,4.2-2.9,4.8-7.4,4.9V48h27.3v-0.8c-5.2-0.3-9-0.8-9-4.9V1.5
          h3.4c6.1,0,9.5,5.5,9.5,12c0,7.5-3.5,10.8-9.6,10.8h-2.4V25.2z"/></svg-->    <span class="hide">Foreign Policy Magazine</span>
  </a>
  
                  <div class="header-nav-wrapper">
                      <nav class="header-nav">
                          <div class="header-mobile-subnav">
                              <ul class="manage-account account">
                                  <li class="header-menu-item">
                                      <a href="#" class="navlink -top -user -signin FP-paywall--login">Sign In</a>
                                  </li>
                                  <li class="header-menu-item subscribe-link">
                                      <a href="/subscribe" class="navlink -top -user -emph subscribe-prompt">
                                          <span class="subscribe--long">Subscribe</span>
                                          <span class="subscribe--short">Subscribe</span>
                                      </a>
                                      <a href="/subscribe" class="navlink -top -user -emph upgrade-to-insider-prompt">
                                          <span class="subscribe--long">Upgrade to Insider</span>
                                          <span class="subscribe--short">Upgrade to Insider</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="header-nav-main">
                              <ul class="header-menu -top">
                                  <li class="header-menu-item hide-desktop">
                                      <a href="/category/latest/" class="navlink red">Latest</a>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/channel/news/" class="navlink">News</a>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/channel/analysis/" class="navlink">Analysis</a>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/podcasts/" class="navlink">Podcasts</a>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/the-magazine/" class="navlink">The Magazine</a>
                                  </li>
                                  <li class="header-menu-item -parent">
                                      <a class="navlink">Channels</a>
                                      <ul class="header-menu -top">
                                          <li class="header-menu-item"><a href="/channel/economics/" class="navlink">Economics</a></li>
                                          <li class="header-menu-item"><a href="/channel/security-2/" class="navlink">Security</a></li>
                                          <li class="header-menu-item"><a href="/projects/shadow-government/" class="navlink">Shadow Government</a></li>
                                          <li class="header-menu-item"><a href="/channel/her-power/" class="navlink">Her Power</a></li>
                                      </ul>
                                      <span class="close-nav">
                                          <img draggable="false" class="emoji" alt="❌" src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/close.svg" />&nbsp;&nbsp;Close
                                      </span>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/newsletters/" class="navlink">Newsletters</a>
                                  </li>
                                  <li class="header-menu-item">
                                      <a href="/events/" class="navlink">Events</a>
                                  </li>
                              </ul>
  
                              <div class="header-insider-menu">
                                  <p><a href="/fpinsider/" class="red"><span class="insider-only-text hide">Your </span>FP Insider Access:</a></p>
                                  <ul>
                                      <li><a href="/power-maps">Power Maps</a></li>
                                      <li><a href="/live">FP Live</a></li>
                                      <li><a href="/special-reports">Special Reports</a></li>
                                  </ul>
                              </div>
                          </div>
  
                          <div class="header-mobile-subnav">
                              <div class="expando-search">
      <div class="icon">
          <svg viewBox="0 0 18 18">
      <circle class="search-icon" cx="7.5" cy="7.3" r="6.5"/>
      <line class="search-icon" x1="12.1" y1="11.9" x2="17.5" y2="17.3"/>
  </svg>    </div>
          <form role="search" method="get" id="searchform-mobile" class="searchform" action="/">
          <label class="hide" for="searchfield-mobile">Search</label>
          <input class="search" type="search" name="s" id="searchfield-mobile" />
          <input type="submit" value="search-submit" style="display:none" />
      </form>
  </div>
                                                          <div class="latest-posts-nav">
                                  <h2 class="title">latest</h2>
                                  <div class="grid--container">
                                      <div class="grid--flex no-border grid__fourth">
                                                                                  <div>
                                              <div class="excerpt-content -noimage">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/">
      <h3 class="hed">Gay Reparations Are Past Due</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/analysis/argument/"
          class="department-name -excerpt">
          Argument    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/omar-g-encarnacion/"
          rel="author"
          class="author">
      Omar G. Encarnación</a></address>
  
  </div>
  </div>
                                          </div>
                                                                                  <div>
                                              <div class="excerpt-content -noimage">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2021/05/29/the-dark-side-of-rwandas-rebirth/">
      <h3 class="hed">The Dark Side of Rwanda’s Rebirth</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">A new book explores the historical roots and contemporary fallout of Paul Kagame’s aggressive foreign policy.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/review/"
          class="department-name -excerpt">
          Review    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/mvemba-phezo-dizolele/"
          rel="author"
          class="author">
      Mvemba Phezo Dizolele</a></address>
  
  </div>
  </div>
                                          </div>
                                                                                  <div>
                                              <div class="excerpt-content -noimage">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2021/05/28/biden-defense-budget-pentagon-china/">
      <h3 class="hed">Biden Looks to the Future in First Defense Budget</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">But Biden’s planned cuts to current generation U.S. jets and ships and his makeover of the nuclear arsenal are likely to meet criticism in Congress.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/news/report/"
          class="department-name -excerpt">
          Report    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/jack-detsch/"
          rel="author"
          class="author">
      Jack Detsch</a></address>
  
  </div>
  </div>
                                          </div>
                                                                                  <div>
                                              <div class="excerpt-content -noimage">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2021/05/28/russia-hack-usaid-biden-putin-summit-cyberattack/">
      <h3 class="hed">Kremlin-Backed Hackers Target U.S. Aid Agency Before Biden-Putin Summit</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">Email phishing attacks aren’t unusual, but the new breach shows Russia isn’t letting up.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/news/report/"
          class="department-name -excerpt">
          Report    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/amy-mackinnon/"
          rel="author"
          class="author">
      Amy Mackinnon</a><span class="separator">,</span> <a
          href="https://foreignpolicy.com/author/robbie-gramer/"
          rel="author"
          class="author">
      Robbie Gramer</a></address>
  
  </div>
  </div>
                                          </div>
                                                                              </div>
                                  </div>
                                  <div class="read-more">
                                      <a href="/category/latest/">See All Stories</a>
                                  </div>
                              </div>
  
                              <div class="header-footer-nav">
                                  <span>
                                      <ul id="menu-footer-column-1" class="mobile-subnav-menu"><li id="menu-item-988928" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-988928 header-menu-item"><a href="https://foreignpolicy.com/events" class="navlink">FP Events</a></li>
  <li id="menu-item-1018372" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1018372 header-menu-item"><a href="https://foreignpolicy.com/fp-studios/" class="navlink">FP Studios</a></li>
  <li id="menu-item-993024" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-993024 header-menu-item"><a href="https://foreignpolicy.com/fp-analytics/" class="navlink">FP Analytics</a></li>
  <li id="menu-item-1002749" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1002749 header-menu-item"><a href="https://foreignpolicy.com/fp-peacegames/" class="navlink">FP PeaceGames</a></li>
  </ul><ul id="menu-footer-column-2" class="mobile-subnav-menu"><li id="menu-item-993038" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-993038 header-menu-item"><a href="https://foreignpolicy.com/subscription-services/" class="navlink">Subscription Services</a></li>
  <li id="menu-item-988929" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-988929 header-menu-item"><a href="https://foreignpolicy.com/reprint-permissions/" class="navlink">Reprint Permissions</a></li>
  <li id="menu-item-939400" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-939400 header-menu-item"><a href="https://foreignpolicy.submittable.com/submit" class="navlink">Writer&#8217;s Guidelines</a></li>
  <li id="menu-item-1002750" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1002750 header-menu-item"><a href="/employment-opportunities/" class="navlink">Work at FP</a></li>
  </ul>                                </span>
                                  <span>
                                      <ul id="menu-footer-column-3" class="mobile-subnav-menu"><li id="menu-item-927960" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-927960 header-menu-item"><a href="https://fpguide.foreignpolicy.com/2021-career/" class="navlink">FP Guides &#8211; Graduate Education</a></li>
  <li id="menu-item-996597" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-996597 header-menu-item"><a href="https://foreignpolicy.com/fp-for-education/" class="navlink">FP For Education</a></li>
  <li id="menu-item-660886" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-660886 header-menu-item"><a href="/magazine" class="navlink">FP Archive</a></li>
  <li id="menu-item-660961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-660961 header-menu-item"><a href="https://foreignpolicy.com/buy-back-issues/" class="navlink">Buy Back Issues</a></li>
  </ul><ul id="menu-footer-column-4" class="mobile-subnav-menu"><li id="menu-item-1018371" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1018371 header-menu-item"><a href="https://foreignpolicy.com/staff/" class="navlink">Meet the Staff</a></li>
  <li id="menu-item-993026" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-993026 header-menu-item"><a href="https://foreignpolicy.com/advertise-with-foreign-policy/" class="navlink">Advertise with FP</a></li>
  <li id="menu-item-660967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-660967 header-menu-item"><a href="https://foreignpolicy.com/contact-us/" class="navlink">Contact Us</a></li>
  <li id="menu-item-988932" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-988932 header-menu-item"><a href="https://foreignpolicy.com/privacy/" class="navlink">Privacy Policy</a></li>
  </ul>                                </span>
                              </div>
                          </div>
  
                      </nav>
                  </div>
  
                  <div class="header-subnav-wrapper">
                      <nav class="header-subnav">
                          <ul class="header-menu -top">
                              <li class="header-menu-item">
                                  <a href="#" class="navlink -top -user -signin FP-paywall--login">Sign In</a>
                              </li>
                              <li class="header-menu-item subscribe-link">
                                  <a href="/subscribe" class="navlink -top -user -emph subscribe-prompt">
                                      <span class="subscribe--long">Subscribe</span>
                                      <span class="subscribe--short">Subscribe</span>
                                  </a>
                                  <a href="/subscribe" class="navlink -top -user -emph upgrade-to-insider-prompt">
                                      <span class="subscribe--long">Upgrade to Insider</span>
                                      <span class="subscribe--short">Upgrade</span>
                                  </a>
                              </li>
                          </ul>
  
                          <div class="expando-search">
      <div class="icon">
          <svg viewBox="0 0 18 18">
      <circle class="search-icon" cx="7.5" cy="7.3" r="6.5"/>
      <line class="search-icon" x1="12.1" y1="11.9" x2="17.5" y2="17.3"/>
  </svg>    </div>
          <form role="search" method="get" id="searchform-desktop" class="searchform" action="/">
          <label class="hide" for="searchfield-desktop">Search</label>
          <input class="search" type="search" name="s" id="searchfield-desktop" />
          <input type="submit" value="search-submit" style="display:none" />
      </form>
  </div>
                      </nav>
                  </div>
                  
                  <button class="hamburger-button">
      <span class="line"></span>
      <span class="hide">Toggle display of website navigation</span>
  </button>
  
                  
                                  <div class="header-alt-layout__title">
                      <p class="header-alt-title">
                                                  <span class="department-title">
                              Argument:
                          </span>
                                                  <span class="header-alt-title__desktop">
                              Gay Reparations Are Past Due                        </span>
                          <span class="header-alt-title__mobile">
                              Gay Reparations Are Past Due...                        </span>
                      </p>
                      <div class="header-social-shares">
                          <span class="share-title">SHARE:</span>
                          <a data-endpoint="facebook" data-title="Gay Reparations Are Past Due" data-text="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it." data-url="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/" onclick="socialshares.share(this);">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/facebook_blue.svg" alt="Share on Facebook" class="facebook-button" width="10" height="18" />
                          </a>
                          <a data-endpoint="twitter" data-title="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it." data-text="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it." data-url="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/" onclick="socialshares.share(this);">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/twitter_blue.svg" alt="Share on Twitter" class="twitter-button" width="20" height="16" />
                          </a>
                          <a data-endpoint="linkedin" data-title="Gay Reparations Are Past Due" data-text="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it." data-url="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/" onclick="socialshares.share(this);">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/linkedin_blue.svg" alt="Share on LinkedIn" class="linkedin-button" width="16" height="16" />
                          </a>
                          <a data-endpoint="whatsapp" data-title="Gay Reparations Are Past Due" data-text="The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it." data-url="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/" onclick="socialshares.share(this);">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/whatsapp_green.svg" alt="Share on WhatsApp" class="whatsapp-button" width="20" height="20" />
                          </a>
                          <a href="#" title="Print" onclick="window.print();">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/print_black.svg" alt="Print this page" class="print-button" width="17" height="16" />
                          </a>
                          <a target="_BLANK" href="mailto:?subject=Check%20out%20this%20story%20on%20Foreign%20Policy&amp;body=Gay Reparations Are Past Due%20-%20https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/%2F" title="Share via Email">
                              <img src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/icons/email_black.svg" alt="Share via Email" class="email-button" width="16" height="13" />
                          </a>
                                              </div>
                  </div>
                          
  
          </header>
  
  
  <div id="main" data-context="article" class="feature-template default_text_style text_above_photo  hide_top_image">
  
      <div class="post-content" data-post-id="1045575" data-premium="no" data-premium-trigger="yes" data-whitelist="">
  
          <article class="article" data-post-id="1045575" data-post-url="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/">
  
              
                  
  
      
          <div class="feature-header-text">
      
      <a
      href="https://foreignpolicy.com/category/analysis/argument/"
      class="department-name">
      <h3 class="department">Argument</h3></a>
  <span
      class="hed-heading"
      href="https://foreignpolicy.com/2021/05/29/gay-reparations-lgbtq-united-states/">
      <h1 class="hed">Gay Reparations Are Past Due</h1>
  </span>
  <h2 class="dek-heading">The United States lags behind many other countries in making up for its abusive past. Here’s why—and how to fix it.</h2>
  <div class="meta-data ">
      <address class="author-list">
      <span class="pre">By</span>
      <a
          href="https://foreignpolicy.com/author/omar-g-encarnacion/"
          rel="author"
          class="author">
      Omar G. Encarnación</a></address>
      <span class="separator">|</span>
      <time
      pubdate
      datetime="2021-05-29"
      title="May 29th, 2021"
      class="date-time">
  May 29, 2021, 1:18 PM</time>
  </div>
  
          </div>
      
      
  
                  <figure class="figure-image ">
              <span
              style="padding-bottom:66.666666666667%;
          "
                  class="image-attachment -ratioscale  horizontal-orientation">
          <img
                              width="1024"
                  height="683"
                          data-sizes="(max-width: 1024px) 100vw, 1024px"
              data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?quality=90 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=150,100&amp;quality=90 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=550,367&amp;quality=90 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=768,512&amp;quality=90 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=400,267&amp;quality=90 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=325,217&amp;quality=90 325w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=1024&#038;h=683&#038;quality=90"
                          sizes="(max-width: 1024px) 100vw, 1024px"
              src=""
              alt="Gay pride flag at half-staff"
              style="height:auto;"
              class="image -fit -lazy"
          >
          <noscript>
              <img
                                      width="1024"
                      height="683"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=1024&#038;h=683&#038;quality=90"
                  alt="Gay pride flag at half-staff"
                  loading="lazy"
                  class="image -fit-3-2">
          </noscript>
          </span>
                      <div class="caption">
              A gay pride flag hangs at half-staff during a memorial service for the victims of Florida’s Pulse nightclub shooting in San Diego, California, on June 12, 2016.              <span class="attribution">SANDY HUFFAKER/AFP via Getty Images</span>
          </div>
      </figure>
  
  
                  
              
                          
              <div class="post-content-main shares-position">
                  
                  
                  
                  <div class="graphic-mid-width">
  <div id="attachment_1045609" class="wp-caption alignnone none">            <span
                  style="padding-bottom:66.727272727273%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="550"
                  height="367"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=550"
              alt="Gay pride flag at half-staff"
              class="image alignnone size- wp-image-1045609 -fit -lazy">
          <noscript>
              <img
                                      width="550"
                      height="367"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/pulse-memorial-flag-GettyImages-539764966.jpg?w=550"
                  alt="Gay pride flag at half-staff"
                  loading="lazy"
                  class="image alignnone size- wp-image-1045609 -fit">
          </noscript>
          </span>
          <p id="caption-attachment-1045609" class="wp-caption-text">A gay pride flag hangs at half-staff during a memorial service for the victims of Florida’s Pulse nightclub shooting in San Diego, California, on June 12, 2016. <span class="attribution">SANDY HUFFAKER/AFP via Getty Images</span> <!-- caption placeholder --></p></div>
  </div>
  <div class="bolded-first-line">
  <p>It may seem surprising to American readers, but one of the most vibrant human rights movements around the world today is “gay reparations,” or policies intended to make amends for the legacy of systemic discrimination on the basis of sexual orientation and gender identity. In the last decade alone, Canada, Germany, Ireland, New Zealand, Spain, and the United Kingdom have embraced gay reparations.</p>
  </div>
  <div id="attachment_1045458" class="wp-caption alignnone none text_wrap_right"><a href="https://global.oup.com/academic/product/the-case-for-gay-reparations-9780197535660?cc=us&amp;lang=en&amp;">            <span
                  style="padding-bottom:66.545454545455%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="550"
                  height="366"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png 2228w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=550,366 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=768,511 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=1538,1024 1538w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=1536,1022 1536w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=2048,1363 2048w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=400,266 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=800,532 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=1920,1278 1920w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=325,216 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?resize=600,399 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?w=550"
              alt="The Case for Gay Reparations book cover"
              class="image wp-image-1045458 size-text_wrap_right -fit -lazy">
          <noscript>
              <img
                                      width="550"
                      height="366"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/Book-Case-For-Gay-Reparations.png?w=550"
                  alt="The Case for Gay Reparations book cover"
                  loading="lazy"
                  class="image wp-image-1045458 size-text_wrap_right -fit">
          </noscript>
          </span>
          </a><p id="caption-attachment-1045458" class="wp-caption-text">This article is adapted from <em>The Case for Gay Reparations</em>, Omar G. Encarnación, Oxford University Press, 216 pp., $24.95, June 1, 2021.<!-- caption placeholder --></p></div>
  <p>The policies hardly comprise a homogenous experience, and they do not entail giving people money simply for being gay, as some suspect. In most countries, gay reparations are limited to a government apology to the LGBTQ community for past wrongs and a promise to do better in the future. In others, they have entailed memorializing the victims of state-sponsored repression of homosexual citizens. In 2008, the German government opened a monument to gay victims of the Holocaust, an unknown number whom perished in Nazi concentration camps, many of them victims of gruesome medical experiments intended to eradicate their homosexuality. In still other countries, gay reparations have centered on a pardon to anyone convicted under laws that criminalized same-sex attraction, as in the United Kingdom, which in 2017 issued a posthumous pardon to those convicted of “gross indecency,” including Alan Turing, the mathematician credited with shortening the end of World War II; or even financial compensation for wages or pensions lost due to having spent time in prison or in a mental institution because of a homosexual offense, as in Spain since 2009 and in Germany since 2016.</p>
  <div class="wpse-gallery-wrapper section_break_two">
          <style type="text/css">
              #gallery-2 {
                  margin: auto;
              }
              #gallery-2 .gallery-item {
                  float: left;
                  margin-top: 10px;
                  text-align: center;
                  width: 100%;
              }
              #gallery-2 img {
                  border: 2px solid #cfcfcf;
              }
              #gallery-2 .gallery-caption {
                  margin-left: 0;
              }
              /* see gallery_shortcode() in wp-includes/media.php */
          </style>
          <div id='gallery-2' class='gallery galleryid-1045575 gallery-columns-1 gallery-size-full'><dl class='gallery-item'>
              <dt class='gallery-icon landscape'>
                              <span
                  style="padding-bottom:66.69921875%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="1024"
                  height="683"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg"
              alt="German police members"
              class="image attachment-full size-full -fit -lazy">
          <noscript>
              <img
                                      width="1024"
                      height="683"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/Germany-Memorial-Nazi-Gays-GettyImages-450978980-1.jpg"
                  alt="German police members"
                  loading="lazy"
                  class="image attachment-full size-full -fit">
          </noscript>
          </span>
          
              </dt>
                  <dd class='wp-caption-text gallery-caption' id='gallery-2-1045614'>
                  Gay German police members in uniform lay a wreath at the memorial to homosexuals murdered in the Holocaust by the Nazis in Berlin on June 21, 2014. <span class="attribution"> Sean Gallup/Getty Images</span> &nbsp;
                  </dd></dl><br style="clear: both" /><dl class='gallery-item'>
              <dt class='gallery-icon landscape'>
                              <span
                  style="padding-bottom:66.69921875%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="1024"
                  height="683"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg"
              alt="UK petition"
              class="image attachment-full size-full -fit -lazy">
          <noscript>
              <img
                                      width="1024"
                      height="683"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/alan-turing-gay-pardon-GettyImages-527533876.jpg"
                  alt="UK petition"
                  loading="lazy"
                  class="image attachment-full size-full -fit">
          </noscript>
          </span>
          
              </dt>
                  <dd class='wp-caption-text gallery-caption' id='gallery-2-1045604'>
                  Family members of World War II codebreaker Alan Turing deliver Change.org petition to 10 Downing Street in London on Feb. 23, 2015. The petition, signed by almost half a million people, called for a pardon for more than 49,000 British gay men convicted under historic anti-gay laws in the United Kingdom. The pardons were granted two years later. <span class="attribution"> Pictures Ltd./Corbis via Getty Images </span>
                  </dd></dl><br style="clear: both" />
          </div>
  </div>
  <p>But none of this momentum has reached the United States. The closest the country has come to embracing gay reparations was in 2019, when, on the 50th anniversary of the Stonewall riots, the New York Police Department issued a belated <a href="https://www.usatoday.com/story/news/2019/06/06/nypd-commissioner-apologizes-police-action-during-stonewall-riots/1369109001/">apology</a> for the raid that triggered the rebellion. “The actions taken by the NYPD were wrong—plain and simple … and for that I apologize,” said New York Police Commissioner James O’Neill. Surely, the absence of gay reparations—or even a discussion of them—in the United States is not out of a rosy history free of systemic discrimination toward the LGBTQ community, although a valid argument can be made that this history is not particularly well known, save, perhaps, for “don’t ask, don’t tell.” That infamous 1993 policy allowed gays, lesbians, and bisexuals to serve in the military as long as they kept their sexual orientation a secret. By the time the Obama administration lifted the policy in 2011, some 13,000 LGBTQ troops had been dismissed from their jobs.</p>
  <p>Decades before “don’t ask, don’t tell,” from the 1920s through at least the 1960s, there was the policy of “<a href="https://www.theatlantic.com/ideas/archive/2019/06/before-stonewall-biggest-threat-was-entrapment/590536/">entrapment</a>,” which involved undercover police officers sending flirtatious signals to other men they presumed to be homosexual in the hopes of ensnarling them into illicit activity. According to the historian Eric Cervini’s book <em>The Deviant’s War</em>, <em>War</em>, which is about gay rights pioneer Frank Kameny, in the 15 years after World War II, “homosexual arrests—including those for sodomy, dancing, kissing, or holding hands—occurred at the rate of one every ten minutes,” for a grand total of 1 million arrests. Entrapment was followed by the Lavender Scare, the midcentury persecution of federal workers suspected of being homosexual.</p>
  <p class="p1">    <div class="fp_choose_placement_related_posts">
  <div class="fp-related-wrapper related-articles--no-video">
      <div class="related-articles">
          <p class="heading-container"><span class="heading">Read More</span></p>
                      <div class="blog-list-layout" data-post-id="1037020">
                  <div class="excerpt-content--list --first-post content-block" data-post-id="1037020">
      <figure class="figure-image -nocaption">
              <a
              style="padding-bottom:66.666666666667%;
          "
                      href="https://foreignpolicy.com/2021/03/04/the-missing-realism-of-bidens-pro-lgbtq-foreign-policy/"
                  class="image-attachment -ratioscale  horizontal-orientation">
                      <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/03/GettyImages-1229522377.jpg?w=800&#038;h=533&#038;quality=80"
              alt="People wave a rainbow flag as they celebrate the victory of Joe Biden in the 2020 presidential election in West Hollywood, California, on Nov. 7, 2020."
              class="image image -fit -lazy -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/03/GettyImages-1229522377.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="People wave a rainbow flag as they celebrate the victory of Joe Biden in the 2020 presidential election in West Hollywood, California, on Nov. 7, 2020."
                  loading="lazy"
                  class="image image -fit -lazy -fit">
          </noscript>
          </span>
          
          <noscript>
                          <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/03/GettyImages-1229522377.jpg?w=800&#038;h=533&#038;quality=80"
              alt="People wave a rainbow flag as they celebrate the victory of Joe Biden in the 2020 presidential election in West Hollywood, California, on Nov. 7, 2020."
              class="image image -fit-3-2 -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/03/GettyImages-1229522377.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="People wave a rainbow flag as they celebrate the victory of Joe Biden in the 2020 presidential election in West Hollywood, California, on Nov. 7, 2020."
                  loading="lazy"
                  class="image image -fit-3-2 -fit">
          </noscript>
          </span>
          
          </noscript>
          </a>
          </figure>
      <div class="list-text">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2021/03/04/the-missing-realism-of-bidens-pro-lgbtq-foreign-policy/">
      <h3 class="hed">The Missing Realism of Biden’s Pro-LGBTQ Foreign Policy</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">The new administration has committed to far-reaching human rights goals that could easily backfire.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/analysis/argument/"
          class="department-name -excerpt">
          Argument    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/lance-kokonos/"
          rel="author"
          class="author">
      Lance Kokonos</a></address>
  
  </div>
      </div>
  </div>
              </div> 
                      <div class="blog-list-layout" data-post-id="1010403">
                  <div class="excerpt-content--list content-block" data-post-id="1010403">
      <figure class="figure-image -nocaption">
              <a
              style="padding-bottom:66.666666666667%;
          "
                      href="https://foreignpolicy.com/2020/06/19/the-real-reason-the-united-states-lags-on-lgbtq-rights/"
                  class="image-attachment -ratioscale  horizontal-orientation">
                      <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2020/06/GettyImages-lgbtq-rights-supreme-court-1249824174.jpg?w=800&#038;h=533&#038;quality=80"
              alt="Joseph Fons holding a gay pride flag in front of the U.S. Supreme Court building in Washington on June 15."
              class="image image -fit -lazy -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2020/06/GettyImages-lgbtq-rights-supreme-court-1249824174.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="Joseph Fons holding a gay pride flag in front of the U.S. Supreme Court building in Washington on June 15."
                  loading="lazy"
                  class="image image -fit -lazy -fit">
          </noscript>
          </span>
          
          <noscript>
                          <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2020/06/GettyImages-lgbtq-rights-supreme-court-1249824174.jpg?w=800&#038;h=533&#038;quality=80"
              alt="Joseph Fons holding a gay pride flag in front of the U.S. Supreme Court building in Washington on June 15."
              class="image image -fit-3-2 -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2020/06/GettyImages-lgbtq-rights-supreme-court-1249824174.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="Joseph Fons holding a gay pride flag in front of the U.S. Supreme Court building in Washington on June 15."
                  loading="lazy"
                  class="image image -fit-3-2 -fit">
          </noscript>
          </span>
          
          </noscript>
          </a>
          </figure>
      <div class="list-text">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2020/06/19/the-real-reason-the-united-states-lags-on-lgbtq-rights/">
      <h3 class="hed">The Real Reason the United States Lags on LGBTQ Rights</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">This week’s Supreme Court decision ends one legal battle, but reveals why the country’s record is so poor. </p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/analysis/argument/"
          class="department-name -excerpt">
          Argument    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/omar-g-encarnacion/"
          rel="author"
          class="author">
      Omar G. Encarnación</a></address>
  
  </div>
      </div>
  </div>
              </div> 
                      <div class="blog-list-layout" data-post-id="1021486">
                  <div class="excerpt-content--list content-block" data-post-id="1021486">
      <figure class="figure-image -nocaption">
              <a
              style="padding-bottom:66.666666666667%;
          "
                      href="https://foreignpolicy.com/2020/10/10/case-for-climate-reparations-crisis-migration-refugees-inequality/"
                  class="image-attachment -ratioscale  horizontal-orientation">
                      <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2020/10/climate-reparations-nicolas-ortega-foreign-policy.jpg?w=800&#038;h=533&#038;quality=80"
              alt="climate-reparations-nicolas-ortega-foreign-policy"
              class="image image -fit -lazy -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2020/10/climate-reparations-nicolas-ortega-foreign-policy.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="climate-reparations-nicolas-ortega-foreign-policy"
                  loading="lazy"
                  class="image image -fit -lazy -fit">
          </noscript>
          </span>
          
          <noscript>
                          <span
                  style="padding-bottom:66.625%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="800"
                  height="533"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/uploads/2020/10/climate-reparations-nicolas-ortega-foreign-policy.jpg?w=800&#038;h=533&#038;quality=80"
              alt="climate-reparations-nicolas-ortega-foreign-policy"
              class="image image -fit-3-2 -fit -lazy">
          <noscript>
              <img
                                      width="800"
                      height="533"
                                  src="https://foreignpolicy.com/wp-content/uploads/2020/10/climate-reparations-nicolas-ortega-foreign-policy.jpg?w=800&#038;h=533&#038;quality=80"
                  alt="climate-reparations-nicolas-ortega-foreign-policy"
                  loading="lazy"
                  class="image image -fit-3-2 -fit">
          </noscript>
          </span>
          
          </noscript>
          </a>
          </figure>
      <div class="list-text">
      <a
      class="hed-heading -excerpt"
      href="https://foreignpolicy.com/2020/10/10/case-for-climate-reparations-crisis-migration-refugees-inequality/">
      <h3 class="hed">The Case for Climate Reparations</h3>
  </a>
  <div class="dek-heading -excerpt">
      <p class="dek">The world’s poorest will bear the worst consequences of the climate crisis. Redirecting international resources to address entrenched inequalities provides a way out.</p>
  </div>
  <div class="meta-data -excerpt">
          <a
          href="https://foreignpolicy.com/category/analysis/argument/"
          class="department-name -excerpt">
          Argument    </a>
          <span class="separator">|</span>
          <address class="author-list -excerpt">
      <a
          href="https://foreignpolicy.com/author/olufemi-o-taiwo/"
          rel="author"
          class="author">
      Olúfẹ́mi O. Táíwò</a><span class="separator">,</span> <a
          href="https://foreignpolicy.com/author/beba-cibralic/"
          rel="author"
          class="author">
      Beba Cibralic</a></address>
  
  </div>
      </div>
  </div>
              </div> 
              </div>
  </div>
  
      </div>
  </p>
  <p>Perhaps as many as 10,000 people were fired or expelled from their federal jobs during the 1950s and 1960s because they were homosexual or suspected of being homosexual based on evidence as flimsy as how they dressed, talked, or looked. The trigger for this witch hunt was President Dwight D. Eisenhower’s 1953 executive order banning “perverts” from working in the federal government. Some of the victims of the Lavender Scare took their own lives, while others were sent to government-run institutions, especially St. Elizabeths Hospital in Washington, D.C., where they were forced to undergo such dehumanizing treatments as lobotomies, insulin-induced comas, and gay conversion therapy, with the aim of changing their sexual orientation.</p>
  <p>Gay activists have compared the treatments offered at St. Elizabeths to the government’s human experiments with syphilis on Black men in Tuskegee, Alabama, which between 1932 and 1972 left hundreds of diagnosed Black men with syphilis untreated so doctors could follow the progress of the illness. “As with the Tuskegee experiment, those subjected to experimentation at the hands of federal officials were a despised minority that never consented to be treated,” noted Charles Francis, president of the Mattachine Society of Washington, D.C., the main U.S.-based organization championing gay reparations—especially a formal apology from Congress.</p>
  <div id="attachment_1045611" class="wp-caption alignnone none text_width">            <span
                  style="padding-bottom:66.727272727273%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="550"
                  height="367"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?w=550"
              alt="Protest in San Francisco-1986"
              class="image alignnone size-text_width wp-image-1045611 -fit -lazy">
          <noscript>
              <img
                                      width="550"
                      height="367"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/San-Francisco-1986-GettyImages-1206294602.jpg?w=550"
                  alt="Protest in San Francisco-1986"
                  loading="lazy"
                  class="image alignnone size-text_width wp-image-1045611 -fit">
          </noscript>
          </span>
          <p id="caption-attachment-1045611" class="wp-caption-text">Members of San Francisco’s gay community protest the Supreme Court’s decision upholding a sodomy law in Georgia on July 17, 1986. <span class="attribution">Tom Levy/San Francisco Chronicle via Getty Images</span> <!-- caption placeholder --></p></div>
  <p>Adding to such mistreatment have been a host of court decisions that for decades stigmatized homosexual people. Two rulings in particular reveal the animus that American jurisprudence has in the past shown toward gays, lesbians, and bisexuals. In <em>Bowers v. Hardwick</em> (1986), a U.S. Supreme Court ruling that upheld the state of Georgia’s sodomy laws, the court determined that the Constitution did not protect the rights of gays, lesbians, and bisexuals to engage in private, consensual sexual relations, because, the justices concluded, homosexual sex has no connection to family, marriage, abortion, or procreation. In his concurring opinion, Chief Justice Warren E. Burger quoted the 18th-century English jurist William Blackstone’s characterization of homosexual sex as an “infamous crime against nature,” worse than rape, and “a crime not fit to be named.” Homosexuality remained criminalized in the United States until the Supreme Court overturned the Hardwick ruling in 2003. Meanwhile, in <em>Bottoms v. Bottoms</em> (1995), Virginia’s Supreme Court upheld a lower court’s ruling that awarded custody of a child to a grandmother, because the child’s biological mother, Sharon Bottoms, was in a lesbian relationship, which at the time was a crime under Virginia law. This ruling was not an aberration; at the time, it was customary for the courts to deny LGBTQ people the right to raise their own biological children and to adopt.</p>
  <p>Acts of state-sponsored anti-gay discrimination sent an unambiguous message to ordinary Americans that it was acceptable to demean and demonize LGBTQ people, and even to engage in acts of violence against them. The infamous and bloody history of societal attacks on the American LGBTQ community includes singer and spokesperson Anita Bryant’s 1977 Save Our Children crusade, which depicted gay men as pedophiles; Evangelist Jerry Falwell’s “declaration of war” on homosexuality, a rhetorical tactic employed during the 1980s to raise funds for Falwell’s Moral Majority organization; and the 2016 attack on Pulse, a gay nightclub in Orlando, Florida. One of the deadliest mass shootings in U.S. history, the attack on Pulse killed 49 people and wounded 53, many of them young Hispanic men. Prior to Pulse, there was the now largely forgotten 1973 arson fire at Upstairs, a gay bar in New Orleans’ French Quarter, which left 32 people dead. The thick homophobia of the era precluded even an acknowledgement of the tragedy by the mayor of New Orleans or Louisiana’s governor.</p>
  <div class="graphic-mid-width">
  <div id="attachment_1045605" class="wp-caption alignnone none section_break">            <span
                  style="padding-bottom:58.363636363636%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="550"
                  height="321"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=150,88 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=550,321 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=768,449 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=400,234 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=401,234 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=800,467 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=275,161 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=325,190 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?resize=600,350 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?w=550"
              alt="Anita Bryant, Phyllis Schlafly, and the Rev. Jerry Falwell"
              class="image alignnone size-section_break wp-image-1045605 -fit -lazy">
          <noscript>
              <img
                                      width="550"
                      height="321"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/Baker-Falwell-AP_770215036.jpg?w=550"
                  alt="Anita Bryant, Phyllis Schlafly, and the Rev. Jerry Falwell"
                  loading="lazy"
                  class="image alignnone size-section_break wp-image-1045605 -fit">
          </noscript>
          </span>
          <p id="caption-attachment-1045605" class="wp-caption-text">Left: Singer and anti-gay activist Anita Bryant talks about her “Save Our Children” crusade to nullify a gay rights ordinance in Miami Beach, Florida, on Feb. 15, 1977. Right: Phyllis Schlafly and the Rev. Jerry Falwell hold a news conference on the “Moral Majority” in San Francisco on July 12, 1984. <span class="attribution">The Associated Press and Bettmann Archive/Getty Images</span> <!-- caption placeholder --></p></div>
  </div>
  <p>Given the terrible history of repression of LGBTQ people in the United States, the absence of gay reparations is puzzling. Canada, a country with a decidedly less troubled history when it comes to homosexuality, issued an apology to the gay community in 2017. The apology came with a multimillion-dollar payout to compensate victims of the “gay purge,” those fired from the military because of their sexual orientation, and authorized a memorial to the victims of those persecuted for their sexual orientation in the capital city of Ottawa.</p>
  <p>An obvious factor behind the delayed arrival of gay reparations in the United States is that the subject of reparations is particularly vexing in American society, stemming from the still-unsettled legacy of slavery and from racism.</p>
  <p>Some critics of gay reparations such as the conservative political commentator <a href="https://townhall.com/columnists/michaelmedved/2010/02/24/why-no-push-for-gay-reparations-n1130428">Michael Medved</a> have maintained that gay people are not deserving of reparations because unlike Black Americans, gay people are not victims of multigenerational damage, meaning that whatever ills homophobia may have caused in the past, these ills are not the same as those left behind by slavery, as they do not carry over from generation to generation. Medved also points to the economic success of some in the American LGBTQ community (which has generated the <a href="https://www.theatlantic.com/business/archive/2014/03/the-myth-of-gay-affluence/284570/">mythical notion</a> that LGBTQ Americans are more affluent than the population at large) as a reason for why gay reparations are redundant.</p>
  <p class="p1"></p>
  <p>Others are opposed to all forms of reparations, racial and otherwise, believing that reparations are inherently divisive and that they lead to a slippery slope scenario in which all groups come to view themselves as victims and worthy of reparations. As <a href="https://redstate.com/elizabeth-vaughn/2019/06/16/new-york-times-op-ed-maybe-consider-gay-reparations-atone-shameful-past-behavior-n109109">argued</a> by a writer for the right-wing website <em>RedState</em>, gay reparations would allow for reparation claims by the “obese, the disfigured, the disabled, the short, the bald,” and also by “[m]igrants who weren’t treated kindly when they tried to enter the U.S. illegally” and by “really smart Asians who were rejected from Harvard.”</p>
  <p>Seen from a global perspective, though, there appears to be more compelling reasons the United States is a gay reparations laggard. The first one is the poor resonance of human rights in American politics and society. Gay reparations movements abroad, especially in Spain, Britain, and Germany—countries that pioneered the gay reparations movement—have waged their struggles as a human rights crusade. This has entailed borrowing the rhetoric and strategies of the international human rights movement to make their claims and push their agenda forward. Inspired by human rights activism, gay reparations activists have emphasized the need for reparations as a moral obligation intended to restore dignity to LGBTQ people. They have also leveraged historical narratives of homosexual repression to influence public opinion and policy toward the LGBTQ community, such as the oppression of gays and lesbians under Nazi Germany or under the homophobic laws of the Francisco Franco regime in Spain, and shamed public officials for failing to stand up for the human rights of LGBTQ people.</p>
  <p>But in the United States, there’s not much in the way of precedent of social movements arising (much less succeeding) with human rights as their core focus. Even the American civil rights movement failed in its attempt in the 1960s to link its struggle for civil rights to the 1948 Universal Declaration of Human Rights. This was due in no small part to the effective demonization of human rights by American conservatives during the Cold War as un-American, never mind that Americans, such as former first lady Eleanor Roosevelt, were among the main drafters of the 1948 declaration and that this document drew on seminal American documents, such as the Declaration of Independence.</p>
  <div class="wpse-gallery-wrapper section_break_two">
          <style type="text/css">
              #gallery-4 {
                  margin: auto;
              }
              #gallery-4 .gallery-item {
                  float: left;
                  margin-top: 10px;
                  text-align: center;
                  width: 100%;
              }
              #gallery-4 img {
                  border: 2px solid #cfcfcf;
              }
              #gallery-4 .gallery-caption {
                  margin-left: 0;
              }
              /* see gallery_shortcode() in wp-includes/media.php */
          </style>
          <div id='gallery-4' class='gallery galleryid-1045575 gallery-columns-1 gallery-size-full'><dl class='gallery-item'>
              <dt class='gallery-icon landscape'>
                              <span
                  style="padding-bottom:66.69921875%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="1024"
                  height="683"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg"
              alt="Fire at Upstairs in 1973"
              class="image attachment-full size-full -fit -lazy">
          <noscript>
              <img
                                      width="1024"
                      height="683"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/Upstairs-Fire-New-Orleans-1973GettyImages-515047698.jpg"
                  alt="Fire at Upstairs in 1973"
                  loading="lazy"
                  class="image attachment-full size-full -fit">
          </noscript>
          </span>
          
              </dt>
                  <dd class='wp-caption-text gallery-caption' id='gallery-4-1045610'>
                  Firemen walk through the charred ruins at Upstairs, a gay bar in New Orleans’ French Quarter, which left 32 people dead June 24, 1973. <span class="attribution"> Bettmann/Getty Images</span>&nbsp;
                  </dd></dl><br style="clear: both" /><dl class='gallery-item'>
              <dt class='gallery-icon landscape'>
                              <span
                  style="padding-bottom:66.69921875%;
          "
                  class="image-attachment -ratioscale">
          <img
                              width="1024"
                  height="683"
                          data-srcset="https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg 1500w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=150,100 150w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=550,367 550w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=768,512 768w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=400,267 400w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=401,267 401w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=800,533 800w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=275,183 275w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=325,217 325w, https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg?resize=600,400 600w"
              data-src="https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg"
              alt="Pulse Nightclub shoting"
              class="image attachment-full size-full -fit -lazy">
          <noscript>
              <img
                                      width="1024"
                      height="683"
                                  src="https://foreignpolicy.com/wp-content/uploads/2021/05/Pulse-Fire-GettyImages-539616088.jpg"
                  alt="Pulse Nightclub shoting"
                  loading="lazy"
                  class="image attachment-full size-full -fit">
          </noscript>
          </span>
          
              </dt>
                  <dd class='wp-caption-text gallery-caption' id='gallery-4-1045608'>
                  In reaction to the mass shooting at a gay nightclub in Orlando, Florida people hug outside the Stonewall Inn near a vigil for the victims in New York on June 12, 2016. <span class="attribution"> BRYAN R. SMITH/AFP via Getty Images </span>
                  </dd></dl><br style="clear: both" />
          </div>
  </div>
  <p>Curiously, the view of human rights as un-American lingers to this day. The Trump administration, for example, attempted to reframe the promotion of human rights at the global level as exclusively entailing property rights and religious freedom. That was the mission of then-Secretary of State Mike Pompeo’s Commission on Unalienable Rights. Predictably, the commission’s final report led women’s groups and LGBTQ activists to accuse President Donald Trump’s Department of State of choosing to promote the human rights it liked, while undermining those it did not support, such as LGBTQ rights.</p>
  <p>A less apparent factor in the United States’ lagging on gay reparations lies with the American LGBTQ rights movement itself. The United States may have birthed the gay liberation movement that came in the wake of the Stonewall riots. Yet in recent decades, gay rights activism in the United States, when seen through international lenses, has been relatively conservative. Since at least the late 1990s, the legal struggle for same-sex marriage consumed American activists almost at the expense of anything else. And that struggle was less than radical. While activists in such countries as Argentina, Germany, and Spain stressed how same-sex marriage would serve to transform society and the culture at large by expanding freedom and equality and by deepening citizenship and democracy, in the United States activists were more inclined to emphasize how same-sex marriage would push same-sex couples toward existing norms, even taming their sexuality. That latter argument came to be known as “the <a href="http://content.time.com/time/magazine/article/0,9171,460232,00.html">conservative</a> case for gay marriage,” which contended that American society, including conservatives, should support same-sex marriage because it would bolster traditional values.</p>
  <p>Framing the struggle for same-sex marriage around such modest goals as strengthening homosexual households wasted a great opportunity to engage society in a broad debate about the role of LGBTQ people in society. It also made it harder for gay activists to expand the struggle for LGBTQ rights beyond marriage and into such areas as transgender rights and gay reparations. These shortcomings, however, should not portend the end of gay reparations in the United States beyond the Stonewall apology. The international experience demonstrates that it is never too late for nations to right past wrongs. It took the United Kingdom more than a century to reckon with its own persecution of gay men under the charge of gross indecency. And the payoff is more than worth it. Aside from restoring dignity to the victims of state-sponsored policies of anti-gay discrimination and violence, gay reparations hold the promise of putting an end to the history of oppression of LGBTQ people while reminding future generations of the sacrifices and struggles that came before them.         <span class="red-box-end"></span>
          </p>
  <div data-fp-lazy-load-image></div>							</div>
              
              
      <section class="bio-no-photo">
              <div>
              <p><strong>Omar G. Encarnación</strong> is a professor of political studies at Bard College and author of <em>The Case for Gay Reparations</em> and <em>Democracy Without Justice in Spain</em>.</p>
          </div>
          </section>
  
              
              <div class="the-tags">
      <span class="title">Tags:</span>
      <a
          href="https://foreignpolicy.com/tag/human-rights/"
          class="tag">
          Human Rights</a><span class="separator">,</span><a
          href="https://foreignpolicy.com/tag/lgbtq-rights/"
          class="tag">
          LGBTQ Rights</a><span class="separator">,</span><a
          href="https://foreignpolicy.com/tag/sex-and-gender/"
          class="tag">
          Sex and Gender</a><span class="separator">,</span><a
          href="https://foreignpolicy.com/tag/united-states/"
          class="tag">
          United States</a></div>
  
                      </article>
  
          
      </div>
  
  </div>
  
  <div class="piano-sticky-bar"></div>
  
              <div class="sticky_content"></div>
  
              <footer class="site-footer-wrapper">
                  <div class="site-footer">
                      <div class="logo">
                                      <a
                  style="padding-bottom:42%;
          "
                  href="https://foreignpolicy.com/"
              class="image-attachment -ratioscale">
          <img
                              width="100"
                  height="42"
                          data-srcset=""
              data-src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/FP.svg"
              alt="Foreign Policy Magazine"
              class="image -fit -lazy">
          <noscript>
              <img
                                      width="100"
                      height="42"
                                  src="https://foreignpolicy.com/wp-content/themes/foreign-policy-2017/assets/src/images/logos/FP.svg"
                  alt="Foreign Policy Magazine"
                  loading="lazy"
                  class="image -fit">
          </noscript>
          </a>
                              </div>
                      <nav class="nav">
                          <ul id="menu-footer-column-5" class="footer-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-988928 footer-menu-item"><a href="https://foreignpolicy.com/events" class="navlink">FP Events</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1018372 footer-menu-item"><a href="https://foreignpolicy.com/fp-studios/" class="navlink">FP Studios</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-993024 footer-menu-item"><a href="https://foreignpolicy.com/fp-analytics/" class="navlink">FP Analytics</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1002749 footer-menu-item"><a href="https://foreignpolicy.com/fp-peacegames/" class="navlink">FP PeaceGames</a></li>
  </ul><ul id="menu-footer-column-6" class="footer-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-993038 footer-menu-item"><a href="https://foreignpolicy.com/subscription-services/" class="navlink">Subscription Services</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-988929 footer-menu-item"><a href="https://foreignpolicy.com/reprint-permissions/" class="navlink">Reprint Permissions</a></li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-939400 footer-menu-item"><a href="https://foreignpolicy.submittable.com/submit" class="navlink">Writer&#8217;s Guidelines</a></li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1002750 footer-menu-item"><a href="/employment-opportunities/" class="navlink">Work at FP</a></li>
  </ul><ul id="menu-footer-column-7" class="footer-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-927960 footer-menu-item"><a href="https://fpguide.foreignpolicy.com/2021-career/" class="navlink">FP Guides &#8211; Graduate Education</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-996597 footer-menu-item"><a href="https://foreignpolicy.com/fp-for-education/" class="navlink">FP For Education</a></li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-660886 footer-menu-item"><a href="/magazine" class="navlink">FP Archive</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-660961 footer-menu-item"><a href="https://foreignpolicy.com/buy-back-issues/" class="navlink">Buy Back Issues</a></li>
  </ul><ul id="menu-footer-column-8" class="footer-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1018371 footer-menu-item"><a href="https://foreignpolicy.com/staff/" class="navlink">Meet the Staff</a></li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-993026 footer-menu-item"><a href="https://foreignpolicy.com/advertise-with-foreign-policy/" class="navlink">Advertise with FP</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-660967 footer-menu-item"><a href="https://foreignpolicy.com/contact-us/" class="navlink">Contact Us</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-988932 footer-menu-item"><a href="https://foreignpolicy.com/privacy/" class="navlink">Privacy Policy</a></li>
  </ul>                        <span class="powered-by-wpcom--parent">
                              <div>Powered by <a href="https://wpvip.com/?utm_source=vip_powered_wpcom&#038;utm_medium=web&#038;utm_campaign=VIP%20Footer%20Credit&#038;utm_term=foreignpolicy.com" rel="generator nofollow" class="powered-by-wpcom">WordPress VIP</a></div>
                              <div>&copy; 2021, The Slate Group</div>
                          </span>
                      </nav>
                  </div>
              </footer>
  
          </div><!-- end site-wrapper -->
                      
          <script>
  !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
  // Insert Twitter Pixel ID and Standard Event data below
  twq('init','nzlz2');
  twq('track','PageView');
  </script>
          <script type="application/ld+json">{"@context":"http:\/\/schema.org","publisher":{"@type":"Organization","name":"Foreign Policy","url":"https:\/\/foreignpolicy.com","logo":{"@type":"ImageObject","height":60,"url":"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2016\/04\/logo.png","width":74}},"@type":"NewsArticle","mainEntityOfPage":{"@type":"WebPage","@id":"https:\/\/foreignpolicy.com\/2021\/05\/29\/gay-reparations-lgbtq-united-states\/"},"headline":"Why the United States Needs Gay Reparations Now","description":"The United States lags behind many other countries in making up for its abusive past. Here\u2019s why\u2014and how to fix it.","Articlebody":"<div class=\"graphic-mid-width\">\r\n\r\n[caption id=\"attachment_1045609\" align=\"alignnone\" width=\"550\" class=\"none\"]<img class=\"alignnone size- wp-image-1045609\" src=\"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2021\/05\/pulse-memorial-flag-GettyImages-539764966.jpg?w=550\" alt=\"Gay pride flag at half-staff\" width=\"550\" height=\"367\" \/> A gay pride flag hangs at half-staff during a memorial service for the victims of Florida\u2019s Pulse nightclub shooting in San Diego, California, on June 12, 2016. <span class=\"attribution\">SANDY HUFFAKER\/AFP via Getty Images<\/span> <!-- caption placeholder -->[\/caption]\r\n\r\n<\/div>\r\n<div class=\"bolded-first-line\">\r\n\r\nIt may seem surprising to American readers, but one of the most vibrant human rights movements around the world today is \u201cgay reparations,\u201d or policies intended to make amends for the legacy of systemic discrimination on the basis of sexual orientation and gender identity. In the last decade alone, Canada, Germany, Ireland, New Zealand, Spain, and the United Kingdom have embraced gay reparations.\r\n\r\n<\/div>\r\n\r\n[caption id=\"attachment_1045458\" align=\"alignnone\" width=\"550\" class=\"none text_wrap_right\"]<a href=\"https:\/\/global.oup.com\/academic\/product\/the-case-for-gay-reparations-9780197535660?cc=us&amp;lang=en&amp;\"><img class=\"wp-image-1045458 size-text_wrap_right\" src=\"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2021\/05\/Book-Case-For-Gay-Reparations.png?w=550\" alt=\"The Case for Gay Reparations book cover\" width=\"550\" height=\"366\" \/><\/a> This article is adapted from <em>The Case for Gay Reparations<\/em>, Omar G. Encarnaci\u00f3n, Oxford University Press, 216 pp., $24.95, June 1, 2021.<!-- caption placeholder -->[\/caption]\r\n\r\nThe policies hardly comprise a homogenous experience, and they do not entail giving people money simply for being gay, as some suspect. In most countries, gay reparations are limited to a government apology to the LGBTQ community for past wrongs and a promise to do better in the future. In others, they have entailed memorializing the victims of state-sponsored repression of homosexual citizens. In 2008, the German government opened a monument to gay victims of the Holocaust, an unknown number whom perished in Nazi concentration camps, many of them victims of gruesome medical experiments intended to eradicate their homosexuality. In still other countries, gay reparations have centered on a pardon to anyone convicted under laws that criminalized same-sex attraction, as in the United Kingdom, which in 2017 issued a posthumous pardon to those convicted of \u201cgross indecency,\u201d including Alan Turing, the mathematician credited with shortening the end of World War II; or even financial compensation for wages or pensions lost due to having spent time in prison or in a mental institution because of a homosexual offense, as in Spain since 2009 and in Germany since 2016.\r\n\r\n[gallery gallery_type=\"section_break_two\" ids=\"1045614,1045604\" columns=\"1\" link=\"none\" size=\"full\" border=\"none\"]\r\n\r\nBut none of this momentum has reached the United States. The closest the country has come to embracing gay reparations was in 2019, when, on the 50th anniversary of the Stonewall riots, the New York Police Department issued a belated <a href=\"https:\/\/www.usatoday.com\/story\/news\/2019\/06\/06\/nypd-commissioner-apologizes-police-action-during-stonewall-riots\/1369109001\/\">apology<\/a> for the raid that triggered the rebellion. \u201cThe actions taken by the NYPD were wrong\u2014plain and simple \u2026 and for that I apologize,\u201d said New York Police Commissioner James O\u2019Neill. Surely, the absence of gay reparations\u2014or even a discussion of them\u2014in the United States is not out of a rosy history free of systemic discrimination toward the LGBTQ community, although a valid argument can be made that this history is not particularly well known, save, perhaps, for \u201cdon\u2019t ask, don\u2019t tell.\u201d That infamous 1993 policy allowed gays, lesbians, and bisexuals to serve in the military as long as they kept their sexual orientation a secret. By the time the Obama administration lifted the policy in 2011, some 13,000 LGBTQ troops had been dismissed from their jobs.\r\n\r\nDecades before \u201cdon\u2019t ask, don\u2019t tell,\u201d from the 1920s through at least the 1960s, there was the policy of \u201c<a href=\"https:\/\/www.theatlantic.com\/ideas\/archive\/2019\/06\/before-stonewall-biggest-threat-was-entrapment\/590536\/\">entrapment<\/a>,\u201d which involved undercover police officers sending flirtatious signals to other men they presumed to be homosexual in the hopes of ensnarling them into illicit activity. According to the historian Eric Cervini\u2019s book <em>The Deviant\u2019s War<\/em>, <em>War<\/em>, which is about gay rights pioneer Frank Kameny, in the 15 years after World War II, \u201chomosexual arrests\u2014including those for sodomy, dancing, kissing, or holding hands\u2014occurred at the rate of one every ten minutes,\u201d for a grand total of 1 million arrests. Entrapment was followed by the Lavender Scare, the midcentury persecution of federal workers suspected of being homosexual.\r\n<p class=\"p1\">[fp_related]<\/p>\r\nPerhaps as many as 10,000 people were fired or expelled from their federal jobs during the 1950s and 1960s because they were homosexual or suspected of being homosexual based on evidence as flimsy as how they dressed, talked, or looked. The trigger for this witch hunt was President Dwight D. Eisenhower\u2019s 1953 executive order banning \u201cperverts\u201d from working in the federal government. Some of the victims of the Lavender Scare took their own lives, while others were sent to government-run institutions, especially St. Elizabeths Hospital in Washington, D.C., where they were forced to undergo such dehumanizing treatments as lobotomies, insulin-induced comas, and gay conversion therapy, with the aim of changing their sexual orientation.\r\n\r\nGay activists have compared the treatments offered at St. Elizabeths to the government\u2019s human experiments with syphilis on Black men in Tuskegee, Alabama, which between 1932 and 1972 left hundreds of diagnosed Black men with syphilis untreated so doctors could follow the progress of the illness. \u201cAs with the Tuskegee experiment, those subjected to experimentation at the hands of federal officials were a despised minority that never consented to be treated,\u201d noted Charles Francis, president of the Mattachine Society of Washington, D.C., the main U.S.-based organization championing gay reparations\u2014especially a formal apology from Congress.\r\n\r\n[caption id=\"attachment_1045611\" align=\"alignnone\" width=\"550\" class=\"none text_width\"]<img class=\"alignnone size-text_width wp-image-1045611\" src=\"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2021\/05\/San-Francisco-1986-GettyImages-1206294602.jpg?w=550\" alt=\"Protest in San Francisco-1986\" width=\"550\" height=\"367\" \/> Members of San Francisco\u2019s gay community protest the Supreme Court\u2019s decision upholding a sodomy law in Georgia on July 17, 1986. <span class=\"attribution\">Tom Levy\/San Francisco Chronicle via Getty Images<\/span> <!-- caption placeholder -->[\/caption]\r\n\r\nAdding to such mistreatment have been a host of court decisions that for decades stigmatized homosexual people. Two rulings in particular reveal the animus that American jurisprudence has in the past shown toward gays, lesbians, and bisexuals. In <em>Bowers v. Hardwick<\/em> (1986), a U.S. Supreme Court ruling that upheld the state of Georgia\u2019s sodomy laws, the court determined that the Constitution did not protect the rights of gays, lesbians, and bisexuals to engage in private, consensual sexual relations, because, the justices concluded, homosexual sex has no connection to family, marriage, abortion, or procreation. In his concurring opinion, Chief Justice Warren E. Burger quoted the 18th-century English jurist William Blackstone\u2019s characterization of homosexual sex as an \u201cinfamous crime against nature,\u201d worse than rape, and \u201ca crime not fit to be named.\u201d Homosexuality remained criminalized in the United States until the Supreme Court overturned the Hardwick ruling in 2003. Meanwhile, in <em>Bottoms v. Bottoms<\/em> (1995), Virginia\u2019s Supreme Court upheld a lower court\u2019s ruling that awarded custody of a child to a grandmother, because the child\u2019s biological mother, Sharon Bottoms, was in a lesbian relationship, which at the time was a crime under Virginia law. This ruling was not an aberration; at the time, it was customary for the courts to deny LGBTQ people the right to raise their own biological children and to adopt.\r\n\r\nActs of state-sponsored anti-gay discrimination sent an unambiguous message to ordinary Americans that it was acceptable to demean and demonize LGBTQ people, and even to engage in acts of violence against them. The infamous and bloody history of societal attacks on the American LGBTQ community includes singer and spokesperson Anita Bryant\u2019s 1977 Save Our Children crusade, which depicted gay men as pedophiles; Evangelist Jerry Falwell\u2019s \u201cdeclaration of war\u201d on homosexuality, a rhetorical tactic employed during the 1980s to raise funds for Falwell\u2019s Moral Majority organization; and the 2016 attack on Pulse, a gay nightclub in Orlando, Florida. One of the deadliest mass shootings in U.S. history, the attack on Pulse killed 49 people and wounded 53, many of them young Hispanic men. Prior to Pulse, there was the now largely forgotten 1973 arson fire at Upstairs, a gay bar in New Orleans\u2019 French Quarter, which left 32 people dead. The thick homophobia of the era precluded even an acknowledgement of the tragedy by the mayor of New Orleans or Louisiana\u2019s governor.\r\n<div class=\"graphic-mid-width\">\r\n\r\n[caption id=\"attachment_1045605\" align=\"alignnone\" width=\"550\" class=\"none section_break\"]<img class=\"alignnone size-section_break wp-image-1045605\" src=\"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2021\/05\/Baker-Falwell-AP_770215036.jpg?w=550\" alt=\"Anita Bryant, Phyllis Schlafly, and the Rev. Jerry Falwell\" width=\"550\" height=\"321\" \/> Left: Singer and anti-gay activist Anita Bryant talks about her \u201cSave Our Children\u201d crusade to nullify a gay rights ordinance in Miami Beach, Florida, on Feb. 15, 1977. Right: Phyllis Schlafly and the Rev. Jerry Falwell hold a news conference on the \u201cMoral Majority\u201d in San Francisco on July 12, 1984. <span class=\"attribution\">The Associated Press and Bettmann Archive\/Getty Images<\/span> <!-- caption placeholder -->[\/caption]\r\n\r\n<\/div>\r\nGiven the terrible history of repression of LGBTQ people in the United States, the absence of gay reparations is puzzling. Canada, a country with a decidedly less troubled history when it comes to homosexuality, issued an apology to the gay community in 2017. The apology came with a multimillion-dollar payout to compensate victims of the \u201cgay purge,\u201d those fired from the military because of their sexual orientation, and authorized a memorial to the victims of those persecuted for their sexual orientation in the capital city of Ottawa.\r\n\r\nAn obvious factor behind the delayed arrival of gay reparations in the United States is that the subject of reparations is particularly vexing in American society, stemming from the still-unsettled legacy of slavery and from racism.\r\n\r\nSome critics of gay reparations such as the conservative political commentator <a href=\"https:\/\/townhall.com\/columnists\/michaelmedved\/2010\/02\/24\/why-no-push-for-gay-reparations-n1130428\">Michael Medved<\/a> have maintained that gay people are not deserving of reparations because unlike Black Americans, gay people are not victims of multigenerational damage, meaning that whatever ills homophobia may have caused in the past, these ills are not the same as those left behind by slavery, as they do not carry over from generation to generation. Medved also points to the economic success of some in the American LGBTQ community (which has generated the <a href=\"https:\/\/www.theatlantic.com\/business\/archive\/2014\/03\/the-myth-of-gay-affluence\/284570\/\">mythical notion<\/a> that LGBTQ Americans are more affluent than the population at large) as a reason for why gay reparations are redundant.\r\n<p class=\"p1\">[distroscale-ad]<\/p>\r\nOthers are opposed to all forms of reparations, racial and otherwise, believing that reparations are inherently divisive and that they lead to a slippery slope scenario in which all groups come to view themselves as victims and worthy of reparations. As <a href=\"https:\/\/redstate.com\/elizabeth-vaughn\/2019\/06\/16\/new-york-times-op-ed-maybe-consider-gay-reparations-atone-shameful-past-behavior-n109109\">argued<\/a> by a writer for the right-wing website <em>RedState<\/em>, gay reparations would allow for reparation claims by the \u201cobese, the disfigured, the disabled, the short, the bald,\u201d and also by \u201c[m]igrants who weren\u2019t treated kindly when they tried to enter the U.S. illegally\u201d and by \u201creally smart Asians who were rejected from Harvard.\u201d\r\n\r\nSeen from a global perspective, though, there appears to be more compelling reasons the United States is a gay reparations laggard. The first one is the poor resonance of human rights in American politics and society. Gay reparations movements abroad, especially in Spain, Britain, and Germany\u2014countries that pioneered the gay reparations movement\u2014have waged their struggles as a human rights crusade. This has entailed borrowing the rhetoric and strategies of the international human rights movement to make their claims and push their agenda forward. Inspired by human rights activism, gay reparations activists have emphasized the need for reparations as a moral obligation intended to restore dignity to LGBTQ people. They have also leveraged historical narratives of homosexual repression to influence public opinion and policy toward the LGBTQ community, such as the oppression of gays and lesbians under Nazi Germany or under the homophobic laws of the Francisco Franco regime in Spain, and shamed public officials for failing to stand up for the human rights of LGBTQ people.\r\n\r\nBut in the United States, there\u2019s not much in the way of precedent of social movements arising (much less succeeding) with human rights as their core focus. Even the American civil rights movement failed in its attempt in the 1960s to link its struggle for civil rights to the 1948 Universal Declaration of Human Rights. This was due in no small part to the effective demonization of human rights by American conservatives during the Cold War as un-American, never mind that Americans, such as former first lady Eleanor Roosevelt, were among the main drafters of the 1948 declaration and that this document drew on seminal American documents, such as the Declaration of Independence.\r\n\r\n[gallery gallery_type=\"section_break_two\" ids=\"1045610,1045608\" columns=\"1\" link=\"none\" size=\"full\" border=\"none\"]\r\n\r\nCuriously, the view of human rights as un-American lingers to this day. The Trump administration, for example, attempted to reframe the promotion of human rights at the global level as exclusively entailing property rights and religious freedom. That was the mission of then-Secretary of State Mike Pompeo\u2019s Commission on Unalienable Rights. Predictably, the commission\u2019s final report led women\u2019s groups and LGBTQ activists to accuse President Donald Trump\u2019s Department of State of choosing to promote the human rights it liked, while undermining those it did not support, such as LGBTQ rights.\r\n\r\nA less apparent factor in the United States\u2019 lagging on gay reparations lies with the American LGBTQ rights movement itself. The United States may have birthed the gay liberation movement that came in the wake of the Stonewall riots. Yet in recent decades, gay rights activism in the United States, when seen through international lenses, has been relatively conservative. Since at least the late 1990s, the legal struggle for same-sex marriage consumed American activists almost at the expense of anything else. And that struggle was less than radical. While activists in such countries as Argentina, Germany, and Spain stressed how same-sex marriage would serve to transform society and the culture at large by expanding freedom and equality and by deepening citizenship and democracy, in the United States activists were more inclined to emphasize how same-sex marriage would push same-sex couples toward existing norms, even taming their sexuality. That latter argument came to be known as \u201cthe <a href=\"http:\/\/content.time.com\/time\/magazine\/article\/0,9171,460232,00.html\">conservative<\/a> case for gay marriage,\u201d which contended that American society, including conservatives, should support same-sex marriage because it would bolster traditional values.\r\n\r\nFraming the struggle for same-sex marriage around such modest goals as strengthening homosexual households wasted a great opportunity to engage society in a broad debate about the role of LGBTQ people in society. It also made it harder for gay activists to expand the struggle for LGBTQ rights beyond marriage and into such areas as transgender rights and gay reparations. These shortcomings, however, should not portend the end of gay reparations in the United States beyond the Stonewall apology. The international experience demonstrates that it is never too late for nations to right past wrongs. It took the United Kingdom more than a century to reckon with its own persecution of gay men under the charge of gross indecency. And the payoff is more than worth it. Aside from restoring dignity to the victims of state-sponsored policies of anti-gay discrimination and violence, gay reparations hold the promise of putting an end to the history of oppression of LGBTQ people while reminding future generations of the sacrifices and struggles that came before them. [redboxend]","datePublished":"2021-05-29T13:18:04+00:00","dateModified":"2021-05-29T13:18:04+00:00","url":"https:\/\/foreignpolicy.com\/2021\/05\/29\/gay-reparations-lgbtq-united-states\/","author":{"@type":"Person","name":"Omar G. Encarnaci\u00f3n","url":"https:\/\/foreignpolicy.com\/author\/omar-g-encarnacion\/"},"image":{"@type":"ImageObject","url":"https:\/\/foreignpolicy.com\/wp-content\/uploads\/2021\/05\/pulse-memorial-flag-GettyImages-539764966.jpg?w=1500","height":1000,"width":1500},"isAccessibleForFree":"False","hasPart":{"@type":"WebPageElement","isAccessibleForFree":"False","cssSelector":".post-content-main"}}</script>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js' id='FP__vendor__jquery-js'></script>
  <script id='utils-js-js-extra'>
  var fpUtilsLoc = {"isDev":"","redirectUri":"https:\/\/foreignpolicy.com\/share_redirect\/"};
  </script>
  <script id='FP__scripts__behaviors__newsletter-signup-js-extra'>
  var hostURL = "foreignpolicy.com";
  </script>
  <script id='FP__scripts__takeovers__takeovers-js-extra'>
  var takeoverSettings = [];
  </script>
  <script id='FP__scripts__vendor__chartbeat-js-extra'>
  var chartbeatData = {"category_name":"Argument","author_list":"Omar G. Encarnaci\u00f3n"};
  </script>
  <script id='FP__scripts__singletons__user__alt_access-js-extra'>
  var postDataPiano = ["Human Rights","LGBTQ Rights","Sex and Gender","United States","article"];
  </script>
  <script id='alerts-cors-js-js-extra'>
  var myFpAlertsLoc = {"isVIPEnv":"1"};
  </script>
  <script type='text/javascript' src='https://foreignpolicy.com/_static/??-eJytlctS5DAMRX8It2kezWpqNvwArNhRakckStuWsZRu8veI59TUUFOVxypZxCf3Kro3/lRc4KyY1WuHCcU/cUVqsyscKYzu4nx740EEVbzU4CVUKna/xw6OxFV8tmsLSpw3vZz5NYh4cifKDZ8cvijWDNFFygdZ6wUVEx/RUWpdqRgZGqxT4KLmN/hefBt5D3GZriOa1eoDSDdLw6AUxUcOEEW5QovzMWtNODAfCJ2dlbl6Hkvll/ERQjDILEL/PGAdNx9aljn7mLEpSiSroEQr5XYN0lAX7t+XIAqHscOpWfgENiT6TbQAS0S16Dqx54eySTSjHf5iKhzQQmvaZrF+ClwHVfcIuowm9h3NLGebpJjjQpB5XSREdZNz8P98QgxDBMXGKRlBIZUlGXsacjDQtJX+h9LRW4GNSxBCqUSr92ZSK//QGTN/CBCx2qT7u3fMwy0noHyPRpUpe/YHSOIS7ym+tc7v9Gu7u9heXp3vrnf9K7aJ3ec='></script>
  <script src="https://lngtd.com/foreignpolicy_article.js?ver=1.0.1" defer="defer" type="text/javascript"></script>
  <script id='FP__scripts__behaviors__article-page-js-extra'>
  var fpNativeAdData = [];
  </script>
  <script type='text/javascript' src='https://foreignpolicy.com/_static/??-eJyVjkEOAiEMRS8kdsBE48J4FsQ6UwK00o7G24t7F7r7+cl7efAUl7gZNgNbsKLCjTvS3JxwofRyYfIHiKpoCtoTaOokYyeuwm1w46YqBZ0WumLfZt3Ab1a1aJQgK8hayn1lwz/oL00XXOKDuCvEPsyjSeL8cZ7rye+Dn7wPx11+A9j6WXE='></script>
  <script src="//c.jsrdn.com/s/cs.js?p=22420" defer="defer" type="text/javascript"></script>
  <script id='moat-content-js-extra'>
  var zMoatADVERTISER = {"moatPassback":"editorial"};
  </script>
  <script type='text/javascript' src='https://foreignpolicy.com/_static/??-eJyVzkkOwjAMBdALkTqtUGGDOEtwDXWVoYqdIm6PWQBb2H1PT4b76rBkpaygMyUSuJZKfMtuLZHx4QbfH0A0KCMsAqkEfV90i+zgNyCIkApIRRCsvFpuytE6BTlEmUMl+cP7PhQqzryRE3olZ0yL+qE4Y2yTIbZpJaULTV3ibPNzOvXj4I/j3vtxeQLWFWAe'></script>
  <script src='https://stats.wp.com/e-202121.js' defer></script>
  <script>
      _stq = window._stq || [];
      _stq.push([ 'view', {v:'ext',j:'1:9.7',blog:'162972146',post:'1045575',tz:'-4',srv:'foreignpolicy.com'} ]);
      _stq.push([ 'clickTrackerInit', '162972146', '1045575' ]);
  </script>
  
          <!--START Lightbox Javascript-->
  <script type="text/javascript">
      /*<![CDATA[*/ window.lightboxjs || function (c) { function g(b, d) { d && (d += (/\?/.test(d) ? "&" : "?") + "lv=1"); c[b] || function () { var i = window, h = document, j = b, g = h.location.protocol, l = "load", k = 0; (function () { function b() { a.P(l); a.w = 1; c[j]("_load") } c[j] = function () { function m() { m.id = e; return c[j].apply(m, arguments) } var b, e = ++k; b = this && this != i ? this.id || 0 : 0; (a.s = a.s || []).push([e, b, arguments]); m.then = function (b, c, h) { var d = a.fh[e] = a.fh[e] || [], j = a.eh[e] = a.eh[e] || [], f = a.ph[e] = a.ph[e] || []; b && d.push(b); c && j.push(c); h && f.push(h); return m }; return m }; var a = c[j]._ = {}; a.fh = {}; a.eh = {}; a.ph = {}; a.l = d ? d.replace(/^\/\//, (g == "https:" ? g : "http:") + "//") : d; a.p = { 0: +new Date }; a.P = function (b) { a.p[b] = new Date - a.p[0] }; a.w && b(); i.addEventListener ? i.addEventListener(l, b, !1) : i.attachEvent("on" + l, b); var q = function () { function b() { return ["<head></head><", c, ' onload="var d=', n, ";d.getElementsByTagName('head')[0].", d, "(d.", g, "('script')).", i, "='", a.l, "'\"></", c, ">"].join("") } var c = "body", e = h[c]; if (!e) return setTimeout(q, 100); a.P(1); var d = "appendChild", g = "createElement",
      i = "src", k = h[g]("div"), l = k[d](h[g]("div")), f = h[g]("iframe"), n = "document", p; k.style.display = "none"; e.insertBefore(k, e.firstChild).id = o + "-" + j; f.frameBorder = "0"; f.id = o + "-frame-" + j; /MSIE[ ]+6/.test(navigator.userAgent) && (f[i] = "javascript:false"); f.allowTransparency = "true"; l[d](f); try { f.contentWindow[n].open() } catch (s) { a.domain = h.domain, p = "javascript:var d=" + n + ".open();d.domain='" + h.domain + "';", f[i] = p + "void(0);" } try { var r = f.contentWindow[n]; r.write(b()); r.close() } catch (t) { f[i] = p + 'd.write("' + b().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();' } a.P(2) }; a.l && q() })() }(); c[b].lv = "1"; return c[b] } var o = "lightboxjs", k = window[o] = g(o); k.require = g; k.modules = c }({}); /*]]>*/</script><script type="text/javascript">window.lightboxlib = lightboxjs.require("lightboxlib", "//www.lightboxcdn.com/vendor/044b8435-d6a0-427d-af56-eec8f6ae795a/lightbox.js?mb=" + (new Date().getTime()));</script>
  <!--END Lightbox Javascript-->
      </body>
  </html>
  `,
  )
  console.log(result)
})
