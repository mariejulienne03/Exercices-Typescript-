function findMonkey(prison: any) {
  for (const el of prison) {
    for (const toFind of el.prisoners) {
      if (toFind.species === 'Monkey') {
        console.log(`The monkey is in the cell number ${el.number}. The cell is ${el.is_guarded ? 'guarded' : 'not guarded'}.`);
      } else {
        console.log("The monkey isn't here.");
      }
    }
  }
}

const prison = [
  {
    number: 1,
    is_guarded: true,
    prisoners: [
      {
        species: 'Deku Baba',
        days_left: 20,
        crime: 'Attacking a merchant',
      },
      {
        species: 'Deku Baba',
        days_left: 20,
        crime: 'Attacking a merchant',
      },
    ],
  },
  {
    number: 2,
    is_guarded: false,
    prisoners: [],
  },
  {
    number: 3,
    is_guarded: false,
    prisoners: [
      {
        species: 'Monkey',
        days_left: 999999,
        crime: 'Kidnapping the princess',
      },
    ],
  },
];

findMonkey(prison);
