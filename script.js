        const incomeInput = document.getElementById('income');
        const expenseInput = document.getElementById('expense');
        const targetInput = document.getElementById('target');
        
        const balanceDisplay = document.getElementById('balanceDisplay');
        const percentDisplay = document.getElementById('percentDisplay');
        const progressBar = document.getElementById('progressBar');

        function calculate() {
            const income = parseFloat(incomeInput.value) || 0;
            const expense = parseFloat(expenseInput.value) || 0;
            const target = parseFloat(targetInput.value) || 0;

            const balance = income - expense;

            balanceDisplay.innerText = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(balance);

            if (target > 0 && balance > 0) {
                let percentage = (balance / target) * 100;
                percentage = Math.min(percentage, 100); 
                
                percentDisplay.innerText = Math.round(percentage) + '%';
                progressBar.style.width = percentage + '%';
            } else {
                percentDisplay.innerText = '0%';
                progressBar.style.width = '0%';
            }

            if (balance < 0) {
                balanceDisplay.style.color = '#ff4b4b';
            } else {
                balanceDisplay.style.color = 'white';
            }
        }

        incomeInput.addEventListener('input', calculate);
        expenseInput.addEventListener('input', calculate);
        targetInput.addEventListener('input', calculate);