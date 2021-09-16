import { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020")
  const yearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear)
  }
  const expenses = props.expenses
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)
  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} onYearChange={yearChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses
