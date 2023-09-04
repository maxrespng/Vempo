// En tu controlador Stimulus
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  static targets = ["canvas","undoLastDrawing"];
  drawingHistory = [];

  // ... (otros métodos y código)

  // Método para eliminar la última forma dibujada
  undoLastDrawing() {
    if (this.drawingHistory.length > 0) {
      this.drawingHistory.pop();
      this.clearCanvas();
      // Vuelve a dibujar las formas restantes en el historial
      for (const shape of this.drawingHistory) {
        this.drawShape(shape);
      }
    }
  }

  // ... (otros métodos y código)
}
