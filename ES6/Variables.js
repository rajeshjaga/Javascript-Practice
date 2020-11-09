// try to use const, let more than var

// var -> global access
// let -> local/block access
// const -> local/block access

function Variables() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

Variables();
