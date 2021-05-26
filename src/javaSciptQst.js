// const permutation = () => {
//   const generated = [];
//   let i = 1;
//   while (generated.length < 4) {
//     console.log(i);
//     const a = Math.floor(Math.random() * 4) + 1;
//     i++;
//     if (generated.includes(a)) {
//       continue;
//     }
//     generated.push(a);
//   }
//   console.log(generated);
// };

// permutation();

//new idea
let arr = [1, 2, 3, 4];
let i = 0;
const permutation1 = () => {
  const finalarr = [];
  while (arr.length > 0) {
    i++; 
    const a = Math.floor(Math.random() * arr.length);
    finalarr.push(arr[a]);
    const b = arr[a];
    arr = arr.filter(function (item) {
      console.log("hello");
      return item !== b;
    });
  }
  console.log(finalarr);
};
permutation1();
