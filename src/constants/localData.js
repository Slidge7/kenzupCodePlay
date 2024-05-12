const placesData = [
  {
    id: '1',
    title: 'Mount Fuji',
    country: 'Japan',
    city: 'Tokyo',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/01/a5/3f/01a53f19aa4ae86992b131eb5fe4ec8a.jpg',
  },
  {
    id: '2',
    title: 'Jame3 Lafna',
    country: 'Morocco',
    city: 'Marrakech',
    rate: '5.0',
    categoryId: 1,
    image:'https://i.pinimg.com/564x/a6/5c/cf/a65ccf25aae9885bde284067095b5c1c.jpg',
  },
  {
    id: '3',
    title: 'Times Square',
    country: 'United States',
    city: 'New York City',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/33/a1/ca/33a1caa6d14553657245b02d37a400bf.jpg',
  },
  {
    id: '4',
    title: 'Sydney Opera House',
    country: 'Australia',
    city: 'Sydney',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/736x/8f/e3/c5/8fe3c5f660b0289c8b4cfda227536bba.jpg',
  },
  {
    id: '5',
    title: 'Great Wall of China',
    country: 'China',
    city: 'Beijing',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/9c/66/8c/9c668c71ae2c2ef2e3dffd6e13edb8e2.jpg',
  },
  {
    id: '6',
    title: 'Taj Mahal',
    country: 'India',
    city: 'Agra',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/09/26/c9/0926c96936a9ed364c01b8616cb0e5f0.jpg',
  },
  {
    id: '7',
    title: 'Machu Picchu',
    country: 'Peru',
    city: 'Cusco',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/f8/6d/99/f86d99c340f157cfdcbbaaf64c1d2049.jpg',
  },
  {
    id: '8',
    title: 'Colosseum',
    country: 'Italy',
    city: 'Rome',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/01/a5/3f/01a53f19aa4ae86992b131eb5fe4ec8a.jpg',
  },
  {
    id: '9',
    title: 'Burj Khalifa',
    country: 'United Arab Emirates',
    city: 'Dubai',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/a6/5c/cf/a65ccf25aae9885bde284067095b5c1c.jpg',
  },
  {
    id: '10',
    title: 'The Louvre',
    country: 'France',
    city: 'Paris',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/33/a1/ca/33a1caa6d14553657245b02d37a400bf.jpg',
  },
  {
    id: '11',
    title: 'Niagara Falls',
    country: 'Canada',
    city: 'Niagara Falls',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/736x/8f/e3/c5/8fe3c5f660b0289c8b4cfda227536bba.jpg',
  },
  {
    id: '12',
    title: 'Angkor Wat',
    country: 'Cambodia',
    city: 'Siem Reap',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/9c/66/8c/9c668c71ae2c2ef2e3dffd6e13edb8e2.jpg',
  },
  {
    id: '13',
    title: 'The Vatican',
    country: 'Italy',
    city: 'Vatican City',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/09/26/c9/0926c96936a9ed364c01b8616cb0e5f0.jpg',
  },
  {
    id: '14',
    title: 'Petra',
    country: 'Jordan',
    city: 'Wadi Musa',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/f8/6d/99/f86d99c340f157cfdcbbaaf64c1d2049.jpg',
  },
  {
    id: '15',
    title: 'Grand Canyon',
    country: 'United States',
    city: 'Arizona',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/01/a5/3f/01a53f19aa4ae86992b131eb5fe4ec8a.jpg',
  },
  {
    id: '16',
    title: 'Chichen Itza',
    country: 'Mexico',
    city: 'Yucatán',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/a6/5c/cf/a65ccf25aae9885bde284067095b5c1c.jpg',
  },
  {
    id: '17',
    title: 'Red Square',
    country: 'Russia',
    city: 'Moscow',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/33/a1/ca/33a1caa6d14553657245b02d37a400bf.jpg',
  },
  {
    id: '18',
    title: 'Sagrada Familia',
    country: 'Spain',
    city: 'Barcelona',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/736x/8f/e3/c5/8fe3c5f660b0289c8b4cfda227536bba.jpg',
  },
  {
    id: '19',
    title: 'Yellowstone National Park',
    country: 'United States',
    city: 'Wyoming',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/9c/66/8c/9c668c71ae2c2ef2e3dffd6e13edb8e2.jpg',
  },
  {
    id: '20',
    title: 'The Great Pyramid of Giza',
    country: 'Egypt',
    city: 'Giza',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/09/26/c9/0926c96936a9ed364c01b8616cb0e5f0.jpg',
  },
  {
    id: '21',
    title: 'Statue of Liberty',
    country: 'United States',
    city: 'New York City',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/f8/6d/99/f86d99c340f157cfdcbbaaf64c1d2049.jpg',
  },
  {
    id: '22',
    title: 'Easter Island',
    country: 'Chile',
    city: 'Easter Island',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/01/a5/3f/01a53f19aa4ae86992b131eb5fe4ec8a.jpg',

  },
  {
    id: '23',
    title: 'Venice Canals',
    country: 'Italy',
    city: 'Venice',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/564x/a6/5c/cf/a65ccf25aae9885bde284067095b5c1c.jpg',

  },
  {
    id: '24',
    title: 'Stonehenge',
    country: 'United Kingdom',
    city: 'Wiltshire',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/33/a1/ca/33a1caa6d14553657245b02d37a400bf.jpg',

  },
  {
    id: '25',
    title: 'Mount Everest',
    country: 'Nepal',
    city: 'Sagarmatha',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/736x/8f/e3/c5/8fe3c5f660b0289c8b4cfda227536bba.jpg',

  },
  {
    id: '26',
    title: 'Mesa Verde',
    country: 'United States',
    city: 'Colorado',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/9c/66/8c/9c668c71ae2c2ef2e3dffd6e13edb8e2.jpg',

  },
  {
    id: '27',
    title: 'Mesa Verde',
    country: 'United States',
    city: 'Colorado',
    rate: '4.7',
    categoryId: 2,
    image:'https://i.pinimg.com/564x/09/26/c9/0926c96936a9ed364c01b8616cb0e5f0.jpg',

  },
  {
    id: '28',
    title: 'Neuschwanstein Castle',
    country: 'Germany',
    city: 'Bavaria',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/f8/6d/99/f86d99c340f157cfdcbbaaf64c1d2049.jpg',

  },
  {
    id: '29',
    title: 'Antelope Canyon',
    country: 'United States',
    city: 'Arizona',
    rate: '4.9',
    categoryId: 5,
    image:'https://i.pinimg.com/736x/8f/e3/c5/8fe3c5f660b0289c8b4cfda227536bba.jpg',
  },
  {
    id: '30',
    title: 'Yellowstone National Park',
    country: 'United States',
    city: 'Wyoming',
    rate: '4.8',
    categoryId: 3,
    image:'https://i.pinimg.com/564x/9c/66/8c/9c668c71ae2c2ef2e3dffd6e13edb8e2.jpg',
  },
];

export {placesData};
