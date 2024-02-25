var example_1 = {
  "distinct": true,
  "variables": [
      "OperationalPoint_1"
  ],
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?OperationalPoint_1",
              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#opType",
              "o": "?Text_2",
              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
              "values": [
                  {
                      "label": "freight terminal (740)",
                      "uri": "http://data.europa.eu/949/concepts/op-types/rinf/40"
                  }
              ]
          },
          "children": []
      },
      {
          "line": {
              "s": "?OperationalPoint_1",
              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#inCountry",
              "o": "?Text_4",
              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
              "values": [
                  {
                      "label": "France (11036)",
                      "uri": "http://publications.europa.eu/resource/authority/country/FRA"
                  }
              ]
          },
          "children": []
      }
  ]
}

var example_2 = {
  "distinct": true,
  "variables": [
      "OperationalPoint_1"
  ],
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?OperationalPoint_1",
              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#track",
              "o": "?Track_2",
              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Track",
              "values": []
          },
          "children": [
              {
                  "line": {
                      "s": "?Track_2",
                      "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#passesTunnel",
                      "o": "?Tunnel_4",
                      "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Track",
                      "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Tunnel",
                      "values": []
                  },
                  "children": [
                      {
                          "line": {
                              "s": "?Tunnel_4",
                              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#hasEmergencyPlan",
                              "o": "?Text_6",
                              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Tunnel",
                              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
                              "values": [
                                  {
                                      "label": "False",
                                      "boolean": false
                                  }
                              ]
                          },
                          "children": []
                      }
                  ]
              }
          ]
      }
  ]
}

var example_3 = {
  "distinct": true,
  "variables": [
      "Track_1"
  ],
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?Track_1",
              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#isTrackOf",
              "o": "?OperationalPoint_2",
              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Track",
              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
              "values": [
                  {
                      "label": "Paris-Est",
                      "rdfTerm": {
                          "type": "uri",
                          "value": "http://data.europa.eu/949/functionalInfrastructure/operationalPoints/FR0000016314"
                      }
                  }
              ]
          },
          "children": []
      }
  ]
}

var example_4 = {
  "distinct": true,
  "variables": [
      "Track_1"
  ],
  "order": null,
  "branches": [
      {
          "line": {
              "s": "?Track_1",
              "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#isTrackOf",
              "o": "?OperationalPoint_2",
              "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Track",
              "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
              "values": []
          },
          "children": [
              {
                  "line": {
                      "s": "?OperationalPoint_2",
                      "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#inCountry",
                      "o": "?Text_4",
                      "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
                      "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
                      "values": [
                          {
                              "label": "Belgium (1275)",
                              "uri": "http://publications.europa.eu/resource/authority/country/BEL"
                          }
                      ]
                  },
                  "children": []
              },
              {
                  "line": {
                      "s": "?OperationalPoint_2",
                      "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#opType",
                      "o": "?Text_8",
                      "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#OperationalPoint",
                      "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
                      "values": [
                          {
                              "label": "small station (6803)",
                              "uri": "http://data.europa.eu/949/concepts/op-types/rinf/20"
                          }
                      ]
                  },
                  "children": []
              }
          ]
      }
  ]
}
  