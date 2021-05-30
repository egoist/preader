import { CheerioAPI } from 'cheerio'

export const getCustomCss = ($: CheerioAPI, hostname: string) => {
  if (hostname === 'foreignpolicy.com') {
    const hideFigure = $('.hide_top_image').length > 0
    return `
    ${
      hideFigure
        ? `.figure-image {
        display:none;
    }`
        : ''
    }
    .author-bio {
        margin: 15px 0;
    }
    h3.department {
      font-size: 1rem;
      border-width: 1px;
      border-style: solid;
      border-color: #ccc;
      display: inline-block;
      padding: 0 20px;
      border-radius: 9999px;
      margin: 0;
    }
    .hed-heading {
        display:none;
    }
    p.caption {
      margin-top: -1rem;
      text-align: center;
      font-size: .875rem;
      color: #717171;
    }
    .fp-related-wrapper {
        display:none;
    }
      `
  }
}
