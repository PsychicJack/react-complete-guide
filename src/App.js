import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewEX/NewExpense";

function App() {

    const addExpenseHandler = expense => {
        console.log('in app.js', expense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses></Expenses>
        </div>
    );
}

export default App;
