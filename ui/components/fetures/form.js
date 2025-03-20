export default function Form () {
        const form = document.createElement('form');
        form.className = 'user-form';
    
        // First Name Input
        const firstNameLabel = document.createElement('label');
        firstNameLabel.setAttribute('for', 'first-name');
        firstNameLabel.textContent = 'First Name:';
    
        const firstNameInput = document.createElement('input');
        firstNameInput.type = 'text';
        firstNameInput.id = 'first-name';
        firstNameInput.name = 'first-name';
        firstNameInput.required = true;
    
        // Last Name Input
        const lastNameLabel = document.createElement('label');
        lastNameLabel.setAttribute('for', 'last-name');
        lastNameLabel.textContent = 'Last Name:';
    
        const lastNameInput = document.createElement('input');
        lastNameInput.type = 'text';
        lastNameInput.id = 'last-name';
        lastNameInput.name = 'last-name';
        lastNameInput.required = true;
    
        // Number of Items (Radio buttons)
        const numberOfItemsLabel = document.createElement('label');
        numberOfItemsLabel.textContent = 'Number of items to show:';
    
        const numberOfItemsGroup = document.createElement('div');
        numberOfItemsGroup.className = 'radio-group';
    
        const radioOptions = [5, 10, 15, 20];
        radioOptions.forEach(value => {
            const radioLabel = document.createElement('label');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = 'number-of-items';
            radioInput.value = value;
            radioInput.id = `items-${value}`;
            radioLabel.setAttribute('for', `items-${value}`);
            radioLabel.textContent = `${value} items`;
    
            numberOfItemsGroup.appendChild(radioInput);
            numberOfItemsGroup.appendChild(radioLabel);
        });
    
        // Filter by Item Name (Text input)
        const filterLabel = document.createElement('label');
        filterLabel.setAttribute('for', 'filter-name');
        filterLabel.textContent = 'Filter by Item Name:';
    
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.id = 'filter-name';
        filterInput.name = 'filter-name';
    
        // Submit Button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
    
        // Append all elements to the form
        form.appendChild(firstNameLabel);
        form.appendChild(firstNameInput);
        form.appendChild(lastNameLabel);
        form.appendChild(lastNameInput);
        form.appendChild(numberOfItemsLabel);
        form.appendChild(numberOfItemsGroup);
        form.appendChild(filterLabel);
        form.appendChild(filterInput);
        form.appendChild(submitButton);
    
        return form;  
}