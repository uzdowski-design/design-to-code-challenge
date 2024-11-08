# Landing Page with Video Player and custom controls

## Technology

### Framework

Project is built with React as being one of the most popular technologies.  
According to guidelines - that all buttons should be just placeholders and no other pages are required - I did not use any routing (like React Router), nor applied any anchor tags, leaving just the buttons components as placeholders.

### Styling

For this small size project I chose Tailwind for simplicity and speed of styling. This library provides ability to use available utility classes, but also to define custom color palletes, etc. That brings the flexibility and ease of use to the table.

### Project Structure

For project structure I used very minimalitic approach, putting most of the components in the `components` folder as this project was very small and has no potential to scale. However, should any component have other components as 'dependencies' (used in the scope of this component only), those have been moved into a folder named the same as the main component (i.e. component **Footer.tsx** uses a sub-component **LogoWithName.tsx** that is located in `components/Footer/LogoWithName.tsx` directory).

## Running the project

Install dependencies:
`npm install`

Run dev server:
`npm run dev`
