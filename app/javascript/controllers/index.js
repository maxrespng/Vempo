// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)






// function main() {
//   const canvas = document.getElementById('myCanvas');
//   const ctx = canvas.getContex('2d');
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;



// class Bar {
//   constructor(x, y, width,height,color) {
//       this.x = x;
//       this.y = y;
//       this.width = width;
//       this.height = height;
//       this.color = color;
//   }

//   update(minInput){
//       //this.height = micInput
//       this.x++;
//   }

//   draw(context){
//       context.fillStyle = this.color;
//       context.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// const bar1 = new Bar (10, 10 , 100, 200, "blue" );
// function animate() {
//   ctx.claerReact(0, 0, canvas.width, canvas.height);
//   bar1.draw(ctx);
//   console.log('animate');
//   requestAnimationFrame(animate);
// }

// animate();
// }
