import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete-shape"
export default class extends Controller {

  static targets = ["undoLastDrawing"]
  connect() {
  }







  undoLastDrawing() {

    console.log('Undo last drawing');
    // Verifica si hay formas en el historial para deshacer
    if (this.drawingHistory.length > 0) {
      // Elimina la última forma del historial
      this.drawingHistory.pop();
      // Borra el lienzo
      clear();
      // Vuelve a dibujar las formas restantes en el historial
      for (const shape of this.drawingHistory) {
        this.drawShape(shape);
        console.log('Undo last drawing');
      }
    }
  }

}
