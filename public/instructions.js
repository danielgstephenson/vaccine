import { getPayString } from './getPayoff.js'

const welcomeText = 'Welcome! Thank you for coming to today’s experiment. This is an experiment in the economics of decision-making. The instructions are simple, and if you follow them carefully and make good decisions, you may earn a considerable amount of money that will be paid to you in cash at the end of the session. Your earnings will be determined partly by your decisions, partly by the decisions of others, and partly by chance. <br><br>'

const periodInfo = `
At the beginning of this experiment, five of the ten participants will be randomly assigned type 1 and the other five will be assigned type 2. Your type will remain unchanged for the rest of the experiment. This experiment will consist of several identical periods. During each period you will be shown your type and you will select one of two options: A or B. At the end of each period, your payoff will depend on your type, the choice you made, and the choices made by others as shown in the following tables. <br><br>`

export function getTableText () {
  const table1 = getTable(1)
  const table2 = getTable(2)
  const tableText = `
  If you are assigned <span style="color:blue">type 1</span>, your payoff will be given by the following table:
  ${table1} <br>

  If you are assigned <span style="color:red">type 2</span>, your payoff will be given by the following table:
  ${table2} <br>`
  return tableText
}

export function getInstructions () {
  const instructions = welcomeText + periodInfo + getTableText()
  return instructions
}

function getTable (type, align) {
  const divStyle = `
    display: inline-block
    margin: 10vh;
    padding-top: 1vmin`
  const tableStyle = `
    display: inline-table;
    font-size: 2vmin; 
    border-collapse: collapse`
  const trStyle = ''
  const trStyleTop = trStyle + 'background-color: #AADDDD;'
  const tdStyle = `
    padding-left: 1vw; 
    padding-right: 1vw; 
    border: 1pt solid #bbb;
    text-align: center;`
  const tdStyleLeft = tdStyle + 'text-align: right;'
  const table = `
  <div style="${divStyle}">
    <table style="${tableStyle}">
      <tr style="${trStyleTop}">
        <td style="${tdStyleLeft}">Number of Others Who Select B</td>
        <td style="${tdStyle}">0</td>
        <td style="${tdStyle}">1</td>
        <td style="${tdStyle}">2</td>
        <td style="${tdStyle}">3</td>
        <td style="${tdStyle}">4</td>
        <td style="${tdStyle}">5</td>
        <td style="${tdStyle}">6</td>
        <td style="${tdStyle}">7</td>
        <td style="${tdStyle}">8</td>
        <td style="${tdStyle}">9</td>
      </tr>
      <tr style="${trStyle}">
        <td style="${tdStyleLeft}">Your Payoff From Option A</td>
        <td style="${tdStyle}">${getPayString(type, 0, 0)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 1)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 2)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 3)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 4)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 5)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 6)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 7)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 8)}</td>
        <td style="${tdStyle}">${getPayString(type, 0, 9)}</td>
      </tr>
      <tr style="${trStyle}">
        <td style="${tdStyleLeft}">Your Payoff From Option B</td>
        <td style="${tdStyle}">${getPayString(type, 1, 0)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 1)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 2)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 3)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 4)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 5)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 6)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 7)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 8)}</td>
        <td style="${tdStyle}">${getPayString(type, 1, 9)}</td>
      </tr>
    </table>
  </div>`
  return table
}
