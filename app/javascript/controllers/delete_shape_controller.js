import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete-shape"
export default class extends Controller {

  static targets = ["last"]
  connect() {
    this.drawShape(shape);
  }

  undoLastDrawing() {

    console.log('Undo last drawing');
    // Verifica si hay formas en el historial para deshacer
   
  }

}
