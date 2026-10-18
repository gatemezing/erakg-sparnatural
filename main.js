//
// Place any custom JS here
//

// reference to the sparnatural webcomponent
const sparnatural = document.querySelector("spar-natural");
const rinfShaclDemo = document.getElementById("rinf-shacl-demo");
const queryJsonOutput = document.getElementById("query-json");
const rinfShaclQueryOutput = document.getElementById("rinf-shacl-query");

function updateEndpointLabel() {
  const endpoint = sparnatural.getAttribute("endpoint");
  const displayEndpoint = document.querySelector("#displayEndpoint");

  if (displayEndpoint && endpoint) {
    displayEndpoint.setAttribute("href", endpoint);
    displayEndpoint.textContent = endpoint;
  }
}

// init yasQE query editor
const yasqe = new Yasqe(document.getElementById("yasqe"), {
	requestConfig: {
	  // make sure the endpoint is the same as sparnatural
	  endpoint: sparnatural.getAttribute("endpoint"),
	  method: "GET",
	  header: {}
	},
	copyEndpointOnNewTab: false  
});

// init yasR result display
// register a specific plugin that is capable of displaying clikable label + URI
Yasr.registerPlugin("LabelledUriTable",SparnaturalYasguiPlugins.TableX);
delete Yasr.plugins['table'];

const yasr = new Yasr(document.getElementById("yasr"), {
	pluginOrder: ["LabelledUriTable", "response"],
	defaultPlugin: "LabelledUriTable"
});

// link yasqe and yasr
yasqe.on("queryResponse", function(_yasqe, response, duration) {
	yasr.setResponse(response, duration);
	// when response is received, enable the button
	sparnatural.enablePlayBtn();
});

// listen to the init event to hook into Sparnatural's latest API surface
sparnatural.addEventListener("init", (event) => {
  updateEndpointLabel();
  console.log("Sparnatural initialized", event.detail.config);
});

// listener when sparnatural updates the query
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("queryUpdated", (event) => {
	// get the SPARQL query string, and pass it to yasQE
	const queryString = sparnatural.expandSparql(event.detail.queryString);
	yasqe.setValue(queryString);

	if (queryJsonOutput) {
	  queryJsonOutput.textContent = JSON.stringify(event.detail.queryJson, null, 2);
	}

	// display the JSON query on the console
	console.log("Sparnatural JSON query structure:");
	console.dir(event.detail.queryJson);
	console.log("SPARQL.js query structure:");
	console.dir(event.detail.querySparqlJs);
});

// listener when the sparnatural submit button is clicked
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("submit", (event) => {
	// enable loader on button
	sparnatural.disablePlayBtn() ; 
	// trigger the query from YasQE
	yasqe.query();
});

// listener when the sparnatural reset button is clicked
// see http://docs.sparnatural.eu/Javascript-integration.html#sparnatural-events
sparnatural.addEventListener("reset", (event) => {
	// empties the SPARQL query on yasQE
	yasqe.setValue("");
	if (queryJsonOutput) {
	  queryJsonOutput.textContent = "";
	}
});

if (rinfShaclDemo && rinfShaclQueryOutput) {
  rinfShaclDemo.addEventListener("queryUpdated", (event) => {
    rinfShaclQueryOutput.textContent = rinfShaclDemo.expandSparql(event.detail.queryString);
  });

  rinfShaclDemo.addEventListener("reset", () => {
    rinfShaclQueryOutput.textContent = "";
  });
}

// hide/show yasQE
document.getElementById('sparql-toggle').onclick = function() {
	if(document.getElementById('yasqe').style.display == 'none') {
	  document.getElementById('yasqe').style.display = 'block';
	  yasqe.setValue(yasqe.getValue());
	  yasqe.refresh();
	} else {
	  document.getElementById('yasqe').style.display = 'none';
	}
	return false;        
} ;

updateEndpointLabel();
