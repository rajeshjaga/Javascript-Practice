const person = {
  song() {
    setTimeout(() => {
      console.log(this);
    }, 2500);
  },
};

person.song();
