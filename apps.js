const practice = {}

practice.coding = []
practice.syntax = []
practice.terminal = []

const programming = {
  name: "Javascript",
  location: "Shit Desk",
  description: "There is still so much javascript that I need to practice, and remember. I am pretty decent with the syntax, but still have trouble knowing what code to put in place of English."
}

const language = {
  name: "More Javascript",
  location: "Shit Desk",
  description: "I am quite confident with the javascript syntax, but there is always more to learn."
}

const computer = {
  name: "Command Line",
  location: "Loaner Mac",
  description: "The terminal is one of my weakest points. Merging branches on GitHub is always a pain in the butt."
}

practice.coding.push(programming)
practice.syntax.push(language)
practice.terminal.push(computer)

const saveDatabase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}
const loadDatabase = function (localStorageKey) {
  const databaseString = localStorage.getItem(localStorageKey)
  return JSON.parse(databaseString)
}

saveDatabase(practice, "practice")