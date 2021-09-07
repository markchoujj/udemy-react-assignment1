import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  return (
    <div>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  )
}

export default Expenses