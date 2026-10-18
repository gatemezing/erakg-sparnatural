var config = "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#";

function makeLine(subject, predicate, object, subjectType, objectType, values) {
  return {
    s: "?" + subject,
    p: config + predicate,
    o: "?" + object,
    sType: config + subjectType,
    oType: config + objectType,
    values: values || []
  };
}

function makeBranch(line, children, notExists) {
  var branch = {
    line: line,
    children: children || []
  };
  if (notExists) {
    branch.notExists = true;
  }
  return branch;
}

function makeQuery(variable, branches) {
  return {
    distinct: true,
    variables: [variable],
    order: null,
    branches: branches
  };
}

var example_1 = makeQuery("Track_4", [
  makeBranch(makeLine("SectionOfLine_1", "opStart", "OperationalPoint_2", "SectionOfLine", "OperationalPoint")),
  makeBranch(makeLine("SectionOfLine_1", "opEnd", "OperationalPoint_3", "SectionOfLine", "OperationalPoint")),
  makeBranch(makeLine("SectionOfLine_1", "sectionTrack", "Track_4", "SectionOfLine", "Track"), [
    makeBranch(makeLine("Track_4", "highSpeedLoadModelCompliance", "Text_5", "Track", "Text", [
      { label: "True", boolean: true }
    ]))
  ])
]);

var example_2 = makeQuery("Track_2", [
  makeBranch(makeLine("SectionOfLine_1", "sectionTrack", "Track_2", "SectionOfLine", "Track"), [
    makeBranch(makeLine("Track_2", "hasTSITrainDetection", "Text_3", "Track", "Text", [
      { label: "False", boolean: false }
    ]))
  ])
]);

var example_3 = makeQuery("Track_3", [
  makeBranch(makeLine("SectionOfLine_1", "inCountry", "Text_2", "SectionOfLine", "Text", [
    { label: "Belgium", uri: "http://publications.europa.eu/resource/authority/country/BEL" }
  ])),
  makeBranch(makeLine("SectionOfLine_1", "sectionTrack", "Track_3", "SectionOfLine", "Track"), [
    makeBranch(makeLine("Track_3", "lineCategory", "Text_4", "Track", "Text"), [], true)
  ])
]);

var example_4 = makeQuery("Track_3", [
  makeBranch(makeLine("SectionOfLine_1", "inCountry", "Text_2", "SectionOfLine", "Text", [
    { label: "Hungary", uri: "http://publications.europa.eu/resource/authority/country/HUN" }
  ])),
  makeBranch(makeLine("SectionOfLine_1", "sectionTrack", "Track_3", "SectionOfLine", "Track"), [
    makeBranch(makeLine("Track_3", "lineCategory", "Text_4", "Track", "Text")),
    makeBranch(makeLine("Track_3", "highSpeedLoadModelCompliance", "Text_5", "Track", "Text", [
      { label: "True", boolean: true }
    ]))
  ])
]);
