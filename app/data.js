// Indonesia in Numbers — the figures every page reads from.
// Only published numbers live here: BPS (Statistics Indonesia) releases,
// with World Bank / UNDP context where a card says so. Shares marked
// "calculated" are arithmetic on those published figures, done on the page.
window.FIGURES = {
  province: {
    westjava: {
      label: 'West Java',
      headline: '±49.9 million',
      short: '±49.9M',
      body: 'The most populous province in the country. One in six Indonesians lives here: 17.5% of the national total, calculated from the BPS figures.',
      credit: 'BPS estimate, 2024',
      barWidth: 52
    },
    eastjava: {
      label: 'East Java',
      headline: '±41.8 million',
      short: '±41.8M',
      body: 'The second most populous province, 14.7% of the nation, calculated from the BPS figures.',
      credit: 'BPS estimate, 2024',
      barWidth: 44
    },
    centraljava: {
      label: 'Central Java',
      headline: '±38.0 million',
      short: '±38.0M',
      body: 'The third most populous province, 13.3% of the nation, calculated from the BPS figures.',
      credit: 'BPS estimate, 2024',
      barWidth: 40
    },
    java: {
      label: 'Java, three giant provinces',
      headline: '129.7 million',
      short: '129.7M',
      body: 'West, East and Central Java combined, calculated from the BPS estimates: nearly half the country on one island.',
      credit: 'Calculated from BPS, 2024',
      barWidth: 0
    }
  },
  gdpGrowthByYear: [
    [2015, 4.88], [2016, 5.03], [2017, 5.07], [2018, 5.17], [2019, 5.02],
    [2020, -2.07], [2021, 3.70], [2022, 5.31], [2023, 5.05], [2024, 5.03]
  ],
  povertyReadings: {
    mar2024: { rate: '9.03%', note: 'March 2024 reading: nine of every hundred Indonesians below the poverty line.' },
    sep2024: { rate: '8.57%', note: 'September 2024 reading: the rate eased through the year.' },
    mar2025: { rate: '8.47%', note: 'March 2025 reading: the downward step continued into the next year.' }
  }
};
