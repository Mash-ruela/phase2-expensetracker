import { useState } from "react";

const ExpensesComponent = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Food Stuff",
      description: "This week Food",
      category: "food",
      amount: 100,
      date: "2025-04-08",
    },
    {
      id: 2,
      name: "Bus Fare",
      description: "Transport to and fro",
      category: "utilities",
      amount: 2000,
      date: "2025-04-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      name: e.target.name.value.trim(),
      description: e.target.description.value.trim(),
      category: e.target.category.value.trim(),
      amount: parseFloat(e.target.amount.value),
      date: e.target.date.value,
    };

    if (!newExpense.name || isNaN(newExpense.amount) || !newExpense.date) return;

    setExpenses([...expenses, newExpense]);
    e.target.reset();
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
       <h2 className="mb-4">Expense Tracker</h2>
    <div className="d-flex vh-100 col-md-4">
      <div className="p-4 bg-light border-end" style={{ width: "300px" }}>
        <h4>Add Expense</h4>
        <form onSubmit={handleAddExpense}>
          <div className="mb-2">
            <input name="name" placeholder="Enter expense name" className="form-control" required />
          </div>
          <div className="mb-2">
            <input name="description" placeholder="Enter expense description" className="form-control" required />
          </div>
          <div className="mb-2">
            <input name="category" placeholder="Enter category" className="form-control" required />
          </div>
          <div className="mb-2">
            <input name="amount" type="number" step="0.01" placeholder="Enter amount" className="form-control" required />
          </div>
          <div className="mb-2">
            <input name="date" type="date" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-dark w-100">Submit</button>
        </form>
      </div>

      <div className="flex-grow-1 p-4 col-md-8">
        

        <input
          type="text"
          placeholder="Search expenses"
          className="form-control mb-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.name}</td>
                  <td>{exp.description}</td>
                  <td>{exp.category}</td>
                  <td>${exp.amount.toFixed(2)}</td>
                  <td>{exp.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No matching expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ExpensesComponent;
