# ERA KG Sparnatural demo

This project is a small static Sparnatural demo for the ERA Knowledge Graph.

## Updated endpoint

The app now targets the RINF repository at:

http://graph.data.era.europa.eu/repositories/rinf-plus

## Run locally

Open `index.html` in a browser, or serve the folder with a small local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The demo uses the GraphDB-backed ERA data repository.
- The navigation links and example resource links point at the current `graph.data.era.europa.eu` site.
- The page listens to Sparnatural's `init` and `queryUpdated` events so it can reflect the live endpoint and show the generated JSON query structure.
- A second Sparnatural instance loads its configuration from the RINF SHACL named graph (`http://data.europa.eu/949/graph/rinf/shacl`) and displays the generated SPARQL query.
