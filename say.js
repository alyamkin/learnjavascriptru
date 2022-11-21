function sayHi(user) {
  console.log(`Hello ${user}`);
}

function sayBye(user) {
  console.log(`Bye, ${user}`);
}

export default function () {
  console.log(`Default export`);
}

// export { sayHi, sayBye };
export { sayHi as hi, sayBye as bye };
