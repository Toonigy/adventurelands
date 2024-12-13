// Account Storage and Management

/**
 * Save a new user account.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {string} - A message indicating success or error.
 */
function saveAccount(email, password) {
    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return "An account with this email already exists.";
    }

    // Save the new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    return "Account created successfully!";
}

/**
 * Validate user credentials during login.
 * @param {string} email - The email entered by the user.
 * @param {string} password - The password entered by the user.
 * @returns {boolean} - True if credentials are valid, false otherwise.
 */
function validateAccount(email, password) {
    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the credentials match
    const user = users.find((user) => user.email === email && user.password === password);
    return !!user; // Returns true if user exists, false otherwise
}

/**
 * Utility to clear all accounts (useful for debugging).
 */
function clearAllAccounts() {
    localStorage.removeItem("users");
}
