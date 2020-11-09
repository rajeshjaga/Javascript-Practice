const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const jobFiltered = jobs.filter((jobs) => !jobs.isActive);

console.log(jobFiltered);
