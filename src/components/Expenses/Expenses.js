import { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("")
  const yearChangeHandler = (changedYear) => {
    setSelectedYear(changedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangeHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses
