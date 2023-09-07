import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// Screenshot Controller

// import ScreenshotController from "./screenshot_controller"
// Stimulus.register("screenshot", ScreenshotController)
