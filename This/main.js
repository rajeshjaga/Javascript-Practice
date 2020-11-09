function something(name) {
  this.name = name;
  console.log(this);
}
const some = new something("rajesh");
console.log(typeof some);
//methods, objects, arrowFunction => 'this' will refer to its own object
//function => 'this' will refer window/global

const youtuber = {
  channel: "programming in js",
  lang: ["js", "py", "sass"],
  showChannel() {
    this.lang.forEach((lang) => {
      console.log(this, lang);
    });
  },
};
youtuber.showChannel();
