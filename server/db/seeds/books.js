/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dr_seuss_books').del()
  await knex('dr_seuss_books').insert([
    {
      id: 1,
      title: 'The Sneetches and Other Stories',
      year_published: 1953,
      read_status: true,
      cover:
        'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Sneetches_and_Other_Stories.png',
    },
    {
      id: 2,
      title: 'Fox in Socks',
      year_published: 1965,
      read_status: true,
      cover:
        'https://upload.wikimedia.org/wikipedia/en/e/e2/FoxInSocksBookCover.jpg',
    },
    {
      id: 3,
      title: 'Hunches in Bunches',
      year_published: 1982,
      read_status: false,
      cover:
        'https://upload.wikimedia.org/wikipedia/en/0/0b/Hunches_in_Bunches_cover.jpg',
    },
    {
      id: 4,
      title: 'How the Grinch Stole Christmas!',
      year_published: 1957,
      read_status: true,
      cover:
        'https://upload.wikimedia.org/wikipedia/en/8/87/How_the_Grinch_Stole_Christmas_cover.png',
    },
    {
      id: 5,
      title: 'Thidwick the Big-Hearted Moose',
      year_published: 1948,
      read_status: true,
      cover:
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Thidwick_the_Big-Hearted_Moose_%28Dr_Seuss_book_-_cover_art%29.jpg',
    },
  ])
}
