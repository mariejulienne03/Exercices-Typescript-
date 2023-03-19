export default function openChest(inventory: Item[], chest: Chest) {
  for (const el of inventory) {
    if (el.name === 'Golden Key') {
      console.log('Tadadadaaa!');

      for (const objs of chest.content) {
        console.log(`You have found a ${objs.name}.\n"${objs.description}"`);
      }
    }
  }
}

interface Item {
  name: string,
  description: string,
}

interface Chest {
  type: string,
  content: Item[]
}

const inventory: Item[] = [{
  name: 'Sword',
  description: 'A good sword',
},
{
  name: 'Wooden Bow',
  description: 'A bow crafted by the Kokiris',
},
{
  name: 'Golden Key',
  description: 'A key designed to open golden chests.',
}];

const chest: Chest = {
  type: 'golden',
  content: [{
    name: 'Silver Key',
    description: 'A key designed to open silver chests.',
  },
  {
    name: 'Tiny Shield',
    description: 'Should come in handy!',
  }],
};

openChest(inventory, chest);
