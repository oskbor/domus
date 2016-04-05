import h from 'snabbdom/h'
import init from 'snabbdom'

import ClassModule from 'snabbdom/modules/class'
import PropsModule from 'snabbdom/modules/props'
import AttrsModule from 'snabbdom/modules/attributes'
import EventsModule from 'snabbdom/modules/eventlisteners'
import StyleModule from 'snabbdom/modules/style'

const patch = init([ClassModule, PropsModule, StyleModule, EventsModule, AttrsModule])

function render(derivable, domElement) {
  let latestRender = domElement
  derivable.react((ddom) => {
    patch(latestRender, ddom)
    latestRender = ddom
  })
}

import hh from 'hyperscript-helpers'
const {
  a, abbr, address, area, article, aside, audio, b, base,
  bdi, bdo, blockquote, body, br, button, canvas, caption,
  cite, code, col, colgroup, dd, del, dfn, dir, div, dl,
  dt, em, embed, fieldset, figcaption, figure, footer, form,
  h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
  i, iframe, img, input, ins, kbd, keygen, label, legend,
  li, link, main, map, mark, menu, meta, nav, noscript,
  object, ol, optgroup, option, p, param, pre, q, rp, rt,
  ruby, s, samp, script, section, select, small, source, span,
  strong, style, sub, sup, table, tbody, td, textarea, tfoot,
  th, thead, title, tr, u, ul, video
} = hh(h)

export default {
  a, abbr, address, area, article, aside, audio, b, base,
  bdi, bdo, blockquote, body, br, button, canvas, caption,
  cite, code, col, colgroup, dd, del, dfn, dir, div, dl,
  dt, em, embed, fieldset, figcaption, figure, footer, form,
  h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
  i, iframe, img, input, ins, kbd, keygen, label, legend,
  li, link, main, map, mark, menu, meta, nav, noscript,
  object, ol, optgroup, option, p, param, pre, q, rp, rt,
  ruby, s, samp, script, section, select, small, source, span,
  strong, style, sub, sup, table, tbody, td, textarea, tfoot,
  th, thead, title, tr, u, ul, video,
  h, render
}
