import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'

export default function Expenses(props) {

    //vars can hold jsx code
    //eg. test = <p> test </p>
    //eg2. test = <ExpenseItem/>

    return (
        <Card className="expenses">
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                ></ExpenseItem>
            ))}
        </Card>
    );
}