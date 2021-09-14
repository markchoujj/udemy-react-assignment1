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
    <div>
      <ExpensesFilter onYearChange={yearChangeHandler} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
