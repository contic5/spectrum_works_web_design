let moviesTEMP=[
  {
    year: "1995",
    movie: "Batman Forever",
    genre: "Drama",
    rating: "PG-13",
    distributor: "Warner Bros.",
    totalyear: "184,031,112",
    total2019: "387,522,978",
    totaltickets: "42,306,002"
  },
  {
    year: "1996",
    movie: "Independence Day",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "20th Century Fox",
    totalyear: "306,169,255",
    total2019: "634,504,608",
    totaltickets: "69,269,062"
  },
  {
    year: "1997",
    movie: "Men in Black",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Sony Pictures",
    totalyear: "250,650,052",
    total2019: "500,207,943",
    totaltickets: "54,607,854"
  },
  {
    year: "1998",
    movie: "Titanic",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Paramount Pictures",
    totalyear: "443,319,081",
    total2019: "865,842,808",
    totaltickets: "94,524,324"
  },
  {
    year: "1999",
    movie: "Star Wars Ep. I: The Phantom Menace",
    genre: "Adventure",
    rating: "PG",
    distributor: "20th Century Fox",
    totalyear: "430,443,350",
    total2019: "776,153,749",
    totaltickets: "84,732,942"
  },
  {
    year: "2000",
    movie: "How the Grinch Stole Christmas",
    genre: "Adventure",
    rating: "PG",
    distributor: "Universal",
    totalyear: "253,367,455",
    total2019: "430,583,644",
    totaltickets: "47,006,948"
  },
  {
    year: "2001",
    movie: "Harry Potter and the Sorcerer’s Stone",
    genre: "Adventure",
    rating: "PG",
    distributor: "Warner Bros.",
    totalyear: "300,404,434",
    total2019: "486,166,890",
    totaltickets: "53,074,988"
  },
  {
    year: "2002",
    movie: "Spider-Man",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Sony Pictures",
    totalyear: "403,706,375",
    total2019: "636,480,273",
    totaltickets: "69,484,746"
  },
  {
    year: "2003",
    movie: "Finding Nemo",
    genre: "Adventure",
    rating: "G",
    distributor: "Walt Disney",
    totalyear: "339,714,367",
    total2019: "516,050,346",
    totaltickets: "56,337,374"
  },
  {
    year: "2004",
    movie: "Shrek 2",
    genre: "Adventure",
    rating: "PG",
    distributor: "Dreamworks SKG",
    totalyear: "441,226,247",
    total2019: "650,826,473",
    totaltickets: "71,050,925"
  },
  {
    year: "2005",
    movie: "Star Wars Ep. III: Revenge of the Sith",
    genre: "Action",
    rating: "PG-13",
    distributor: "20th Century Fox",
    totalyear: "380,270,577",
    total2019: "543,413,171",
    totaltickets: "59,324,582"
  },
  {
    year: "2006",
    movie: "Pirates of the Caribbean: Dead Man’s Chest",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "423,315,812",
    total2019: "591,995,851",
    totaltickets: "64,628,368"
  },
  {
    year: "2007",
    movie: "Spider-Man 3",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Sony Pictures",
    totalyear: "336,530,303",
    total2019: "448,054,878",
    totaltickets: "48,914,288"
  },
  {
    year: "2008",
    movie: "The Dark Knight",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Warner Bros.",
    totalyear: "531,001,578",
    total2019: "677,433,772",
    totaltickets: "73,955,652"
  },
  {
    year: "2009",
    movie: "Transformers: Revenge of the Fallen",
    genre: "Action",
    rating: "PG-13",
    distributor: "Paramount Pictures",
    totalyear: "402,111,870",
    total2019: "491,112,631",
    totaltickets: "53,614,916"
  },
  {
    year: "2010",
    movie: "Toy Story 3",
    genre: "Action",
    rating: "G",
    distributor: "Walt Disney",
    totalyear: "415,004,880",
    total2019: "481,805,411",
    totaltickets: "52,598,844"
  },
  {
    year: "2011",
    movie: "Harry Potter and the Deathly Hallows: Part II",
    genre: "Action",
    rating: "PG-13",
    distributor: "Warner Bros.",
    totalyear: "381,011,219",
    total2019: "440,108,798",
    totaltickets: "48,046,812"
  },
  {
    year: "2012",
    movie: "The Avengers",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "623,357,910",
    total2019: "717,331,462",
    totaltickets: "78,311,295"
  },
  {
    year: "2013",
    movie: "Iron Man 3",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "408,992,272",
    total2019: "460,808,016",
    totaltickets: "50,306,552"
  },
  {
    year: "2014",
    movie: "Guardians of the Galaxy",
    genre: "Adventure",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "333,055,258",
    total2019: "373,413,235",
    totaltickets: "40,765,637"
  },
  {
    year: "2015",
    movie: "Star Wars Ep. VII: The Force Awakens",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "742,208,942",
    total2019: "806,480,887",
    totaltickets: "88,043,765"
  },
  {
    year: "2016",
    movie: "Finding Dory",
    genre: "Action",
    rating: "PG",
    distributor: "Walt Disney",
    totalyear: "486,295,561",
    total2019: "514,967,322",
    totaltickets: "56,219,140"
  },
  {
    year: "2017",
    movie: "Star Wars Ep. VIII: The Last Jedi",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "517,218,368",
    total2019: "528,173,936",
    totaltickets: "57,660,910"
  },
  {
    year: "2018",
    movie: "Black Panther",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "700,059,566",
    total2019: "703,901,821",
    totaltickets: "76,845,177"
  },
  {
    year: "2019",
    movie: "Avengers: Endgame",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "858,373,000",
    total2019: "858,373,002",
    totaltickets: "93,708,843"
  },
  {
    year: "2021",
    movie: "Spiderman: No Way Home",
    genre: "Action",
    rating: "PG-13",
    distributor: "Walt Disney",
    totalyear: "702,924,074",
    total2019: "644,570,196",
    totaltickets: "73,992,007"
  }
]

let movies=[];
for(let i=0;i<moviesTEMP.length;i++)
{
    movies.push(new Movie(moviesTEMP[i].movie,moviesTEMP[i].year,moviesTEMP[i].genre,moviesTEMP[i].rating,moviesTEMP[i].distributor,moviesTEMP[i].totalyear,moviesTEMP[i].total2019,moviesTEMP[i].totaltickets));
}