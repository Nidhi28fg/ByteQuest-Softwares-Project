# TANN TRIM – Next.js E-commerce UI

A modern, responsive e-commerce UI for bags and accessories built with Next.js and Tailwind CSS.

## Features

- Responsive e-commerce UI for bags and accessories
- Product grid with live data from [Fake Store API](https://fakestoreapi.com/products )
- Custom Navbar and Banner components
- Responsive menu: desktop menu hidden on mobile, hamburger menu shown on mobile
- Modern design with Tailwind CSS
- Iconography via [react-icons](https://react-icons.github.io/react-icons/)
- Loading indicators for async data

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```



## Project Structure

```
app/
  layout.js      # Root layout with global styles and fonts
  page.js        # Main page, renders Navbar, Banner, Product
component/
  Banner.jsx     # Banner with bag categories
  Navbar.jsx     # Responsive navigation bar
  Product.jsx    # Product grid with REST API integration
public/          # Static assets (bag images, favicon, etc.)
styles/          # Global styles (globals.css)
```

## Customization

1. **Products:** Data is fetched from Fake Store API using REST API. 
2. **Images:** Bag images are stored in `public/`. Update or add images as needed.
3. **Styling:** Tailwind CSS is used for styling. Modify `globals.css` or component classes for custom styles.

## Dependencies

- Next.js
- React
- Tailwind CSS
- react-icons
- axios
- react-loading-indicators