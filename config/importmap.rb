# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
# pin "p5", to: "https://ga.jspm.io/npm:p5@1.7.0/lib/p5.min.js"
# pin "p5Sound", to: "https://cdn.jsdelivr.net/npm/p5@1.7.0/lib/addons/p5.sound.min.js"
pin "html2canvas", to: "https://ga.jspm.io/npm:html2canvas@1.4.1/dist/html2canvas.js"
pin "SVG", to: "https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@latest/dist/svg.min.js"
