//Query Selectors
const selectionButtons = document.querySelectorAll('[data-selection]')
const userScoreSpan = document.querySelector('[data-user-score]')
const websiteScoreSpan = document.querySelector('[data-website-score]')
const userChoiceSpan = document.querySelector('[data-user-last]')
const websiteChoiceSpan = document.querySelector('[data-website-last]')

//Objects & Constructor
const rock = new Option('rock','✊','scissors')
const paper = new Option('paper','✋','rock')
const scissors = new Option('scissors','✌','paper')
const optionsArray = [rock, paper, scissors]

function Option(name, symbol, beats){
    this.name = name;
    this.symbol = symbol;
    this.beats = beats;
}