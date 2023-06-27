let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9C27B0;">Programo diversos softwares, aplicaciones, web, etc.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
