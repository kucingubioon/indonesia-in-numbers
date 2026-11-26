# Indonesia in Numbers

[![make.fun competition](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/kucingubioon/indonesia-in-numbers/rank.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/kucingubioon/indonesia-in-numbers/reward.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)

A national statistics site for Indonesia, entered in the [make.fun best national statistics site competition](https://make.fun/c/best-national-statistics-site-20261126-0539): a compact, original data yearbook — the Map Edition — that runs in a web browser from static files, with no network request, on desktop and phone.

## Pages

- **Overview** — a stylised map of the archipelago with tappable markers for the three giant Java provinces, an answer panel, headline figures (population, GDP growth, poverty, life expectancy) and a GDP growth trend line, 2015–2024.
- **Population** — urban / rural / both views of the 59% urban share, the mid-2024 total of 284.97 million, the 2020 census and the growth since.
- **Economy** — GDP growth by year with a working year picker and bar chart, GDP and GDP per capita, inflation, unemployment.
- **People & Society** — the three BPS poverty readings (Mar 2024, Sep 2024, Mar 2025) with a working reading picker, life expectancy, literacy, Human Development Index.
- **Regions** — the most populous provinces as tappable bars, with shares of the national total calculated from the published figures.

Every figure is labelled with its source and year (BPS — Statistics Indonesia, World Bank, UNDP). No figure appears without a published source; the only derived numbers are province shares and counts, marked as calculated on the page.

## Run it

Serve `app/` with any static HTTP server, or use the bundled preview server:

```
node serve.ts
```

then open http://localhost:8080.

## Hand-in program

`main.ts` (Node 22) copies `app/` and `screenshots/` to the output directory and writes `dossier.json` using `buildDossier` from `vendor/makefun-frontend.ts`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
