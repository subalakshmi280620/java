const expenseName = document.getElementById('expenseName');
    const expenseAmount = document.getElementById('expenseAmount');
    const addExpenseBtn = document.getElementById('addExpense');
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Display stored expenses
    function renderExpenses() {
      expenseList.innerHTML = '';
      let total = 0;
      expenses.forEach((expense, index) => {
        total += expense.amount;
        const li = document.createElement('li');
        li.innerHTML = `
          ${expense.name} - $${expense.amount.toFixed(2)}
          <button onclick="removeExpense(${index})">X</button>
        `;
        expenseList.appendChild(li);
      });
      totalAmount.textContent = total.toFixed(2);
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    // Add a new expense
    addExpenseBtn.addEventListener('click', () => {
      const name = expenseName.value.trim();
      const amount = parseFloat(expenseAmount.value);

      if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
      }

      expenses.push({ name, amount });
      expenseName.value = '';
      expenseAmount.value = '';
      renderExpenses();
    });

    // Remove an expense
    function removeExpense(index) {
      expenses.splice(index, 1);
      renderExpenses();
    }

    // Initial render
    renderExpenses();