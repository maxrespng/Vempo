import { Controller } from "@hotwired/stimulus"
import html2canvas from "html2canvas";


export default class extends Controller {
  static targets = ["submit", "photo", "form", "container"]

  screenshot(event) {
    event.preventDefault()
    console.log(event)
    let div = document.getElementById("defaultCanvas0");
    const imageString = div.toDataURL();
    this.photoTarget.value = imageString

    console.log(this.photoTarget.value)
    console.log(this.formTarget)

    fetch(this.formTarget.action, {
      method: "PATCH",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then((data) => {
      if (data.inserted_item) {
          // beforeend could also be dynamic with Stimulus values

          // this.containerTarget.insertAdjacentHTML("beforeend", data.inserted_item)
        }
      })
      alert("Screenshot Taken")
  }
}
