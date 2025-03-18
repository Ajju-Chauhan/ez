# Responsive Form with Service Cards

This project is a responsive web page that features a contact form on the left side and service cards on the right side. The layout is mobile-first, ensuring that on smaller screens, the form appears at the top and the cards appear below. On larger screens, the layout adjusts to display both sections side by side.

## Features
- Responsive Design using **CSS Flexbox** and **Media Queries**
- Mobile-first approach
- Clean and modern UI
- Form validation for email input
- Error and success messages

## Technologies Used
- **HTML** for structure
- **CSS** for styling
- **React.js** for UI components

## Project Structure
```
📦 Project Folder
├── public
│   ├── index.html
├── src
│   ├── App.js
│   ├── FormComponent.js
│   ├── App.css
├── README.md
└── package.json
```

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo-link.git
    ```
2. Navigate to the project directory:
    ```bash
    cd project-folder
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000`.
- Enter a valid email in the input field.
- Click the **Contact Me** button to submit.
- You will see a success or error message based on the response.

## Responsive Design
- On **mobile devices**, the left section (form) will appear first, followed by the right section (service cards).
- On **larger screens** (768px and above), both sections will be displayed side by side using Flexbox.

## API Endpoint
- The form sends a POST request to `http://3.228.97.110:9000/api` with the email as payload.

## Example Request
```bash
POST http://3.228.97.110:9000/api
Content-Type: application/json
{
  "email": "example@email.com"
}
```



## Contact
For any questions or feedback, feel free to reach out at [ajju9557@gmail.com](mailto:ajju9557@gmail.com).

