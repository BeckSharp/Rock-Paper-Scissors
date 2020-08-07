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

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = optionsArray.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const websiteSelection = randomSelection()
    const userWon = isWinner(selection, websiteSelection)
    const websiteWon = isWinner(websiteSelection, selection)

    if (userWon) incrementScore(userScoreSpan)
    if (websiteWon) incrementScore(websiteScoreSpan)

    displayGameResult(selection, websiteSelection, userWon, websiteWon)
}

function displayGameResult(userSelection, websiteSelection, userWon, websiteWon) {
    displayGameChoice(userSelection, userChoiceSpan)
    displayGameChoice(websiteSelection, websiteChoiceSpan)

    displayResultBorder(userWon, "user-box")
    displayResultBorder(websiteWon, "website-box")
}

function randomSelection() {
    const index = Math.floor(Math.random() * optionsArray.length)
    return optionsArray[index]
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function displayGameChoice(selection, symbolSpan) {
    symbolSpan.innerText = selection.symbol
}

function displayResultBorder(gameWon, boxName){
    const color = (gameWon) ? 'green' : 'red';
    document.getElementById(boxName).style.borderColor = color;
}