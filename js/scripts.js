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