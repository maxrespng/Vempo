import { Controller } from "@hotwired/stimulus"
import html2canvas from "html2canvas";
// import * as SVG from 'SVG'
// import { documentToSVG, elementToSVG, inlineResources, formatXML } from 'https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js'
// import {SVG} from 'https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js'

export default class extends Controller {
  static targets = ["submit"]

  screenshot(event) {
    event.preventDefault()
    // console.log(event)
    let div = document.getElementById("defaultCanvas0");
    // let svg = div.SVG();
    // console.log(draw.svg)
    const imageString = div.toDataURL();
    console.log(imageString)

    // - using fetch make a patch request to attach the string of imageString to the svg attribute of your project.

  }

}
