[Website](end.png)


[Episode1](Notes/EP-1.pdf)

[Episode2](Notes/EP-2.PDF)
Parcel is Beast?

[Episode3](Notes/EP-3.PDF)

[Episode4](Notes/EP-4.PDF)

[Episode5](Notes/EP-5.PDF)

[Episode6](Notes/EP-6.PDF)

It looks like you're compiling notes or a checklist for a React project and its associated setup, including Parcel bundler, export/import methods, hooks, routing, Redux Toolkit, and testing setup. Here's a cleaned-up version of your notes with a bit more structure for clarity:

---

# Namaste React 🚀

## Parcel

- **Dev Build**
- **Local Server**
- **HMR (Hot Module Replacement)**
- **File Watching Algorithm** - written in C++
- **Caching** - Faster Builds
- **Image Optimization**
- **Minification**
- **Bundling**
- **Compression**
- **Consistent Hashing**
- **Code Splitting**
- **Differential Bundling** - Support for older browsers
- **Diagnostics**
- **Error Handling**
- **HTTPs**
- **Tree Shaking** - Remove unused code
- **Different dev and prod bundles**

## Namaste Food

### Components

- **Header**
  - Logo
  - Nav Items
- **Body**
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Image
    - Name of Restaurant, Star Rating, Cuisine, Delivery Time
- **Footer**
  - Copyright
  - Links
  - Address
  - Contact

## Export/Import Types

### Default Export/Import

```javascript
export default Component;
import Component from "path";
```

### Named Export/Import

```javascript
export const Component;
import { Component } from "path";
```

## React Hooks

- **useState()** - Super powerful state variables in React
- **useEffect()**

## Routing in Web Apps

- **Client Side Routing**
- **Server Side Routing**

## Redux Toolkit

1. **Install @reduxjs/toolkit and react-redux**
2. **Build our store**
3. **Connect our store to our app**
4. **Slice (e.g., cartSlice)**
5. **Dispatch (action)**
6. **Selector**

## Types of Testing (Developer)

- **Unit Testing**
- **Integration Testing**
- **End to End Testing (e2e)**

### Setting up Testing in our App

1. **Install React Testing Library**
2. **Install Jest**
3. **Install Babel dependencies**
4. **Configure Babel**
5. **Configure Parcel config file to disable default Babel transpilation**
6. **Jest - `npx jest --init`**
7. **Install jsdom library**
8. **Install @babel/preset-react** - to make JSX work in test cases
9. **Include @babel/preset-react inside Babel config**
10. **Install testing dependencies**

```bash
npm install --save-dev @testing-library/jest-dom
```

---

[link]
https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3248023&lng=78.63317339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
