import { Controller } from "@hotwired/stimulus"
import html2canvas from "html2canvas";
// import * as SVG from 'SVG'
// import { documentToSVG, elementToSVG, inlineResources, formatXML } from 'https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js'
// import {SVG} from 'https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js'

export default class extends Controller {
  static targets = ["submit", "photo", "form", "container"]

  screenshot(event) {
    event.preventDefault()
    console.log(event)
    let div = document.getElementById("defaultCanvas0");
    // let svg = div.SVG();
    // console.log(draw.svg)
    const imageString = div.toDataURL();

    //create the patch request
    // const request = new Request('/app/views/projects/'+ project.id, {
    //   method: 'PATCH',
    //   body: JSON.stringify({svg: imageString }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // //send the request

    // fetch(request).then(function(response){
    //   if (response.stastus === 200) {
    //     console.log('The image was successfullyattached to the project')
    //   } else {
    //     console.error('The request failed with status code' + response.status);
    //   }
    // })
    // - using fetch make a patch request to attach the string of imageString to the svg attribute of your project.
    this.photoTarget.value = imageString

    console.log(this.photoTarget.value)

    fetch(this.formTarget.action, {
      method: "PATCH", // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then((data) => {
      // if (data.inserted_item) {
        //   // beforeend could also be dynamic with Stimulus values
        //   this.containerTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        // }
        alert("Screenshot taken!")
      })

  }
}
