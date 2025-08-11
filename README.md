# ⚛️ React Interview Prep Cheat Sheet (Detailed)
## REACT Readme

## 📌 Hooks (Core to React)

> 🖼️ Hooks Visual Overview: See full image at [React Hooks Diagram](https://images2.imgbox.com/13/68/sGo4r5rT_o.png)

### 🔹 `useState`

`useState` is a Hook that lets you add **state variables to functional components**.

#### Example:

```js
const [count, setCount] = useState(0);
```

* `count` is the current state value.
* `setCount` is the function to update that state.
* The state persists across re-renders.

✅ **Use Case**: Track user input, toggle values, etc.

---

### 🔹 `useEffect`

Performs **side effects** (data fetching, subscriptions, timers) in function components.

#### Example:

```js
useEffect(() => {
  console.log("Component mounted or updated");
  return () => console.log("Cleanup on unmount");
}, [dependency]);
```

* Runs after every render by default.
* Pass dependency array to run conditionally.
* Return function to handle clean-up.

✅ **Use Case**: API calls, DOM manipulation, subscriptions.

---

### 🔹 `useContext`

Provides a way to **pass data deeply** through the component tree without manually passing props.

#### Example:

```js
const ThemeContext = React.createContext('light');

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);

const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
};
```

✅ **Use Case**: Global themes, user settings, authentication.

---

### 🔹 `useReducer`

An alternative to `useState` when **state logic is complex or deeply nested**.

#### Example:

```js
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, initialState);
```

✅ **Use Case**: Forms, state transitions, global state management.

---

### 🔹 `useMemo`

Returns a **memoized value**. Avoids expensive recalculations on every render.

#### Example:

```js
const expensiveValue = useMemo(() => slowFn(a), [a]);
```

✅ **Use Case**: Performance optimization in rendering.

---

### 🔹 `useCallback`

Returns a **memoized function**. Prevents unnecessary re-renders.

#### Example:

```js
const memoFn = useCallback(() => handleAction(), [deps]);
```

✅ **Use Case**: Passing callback to child components.

---

### 🔹 `useRef`

Holds a **mutable value** without causing re-render on change. Also used to access DOM elements.

#### Example:

```js
const inputRef = useRef();
<input ref={inputRef} />;
```

✅ **Use Case**: DOM access, timers, persist values.

---

## 🔁 Lifecycle (Class Components)

### Mounting Phase

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

### Updating Phase

1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

### Unmounting Phase

* `componentWillUnmount()`

✅ **Key Concept**: Functional components achieve similar behavior with `useEffect`.

> 🖼️ Lifecycle Visual Overview: See full image at [React Lifecycle Diagram](https://images2.imgbox.com/df/38/WiOn2r8r_o.png)

---

## 🏗️ Higher Order Components (HOC)

### What?

A HOC is a **function that takes a component and returns a new enhanced component**.

#### Example:

```js
const withLogger = (Component) => (props) => {
  console.log("Rendering", Component.name);
  return <Component {...props} />;
};
```

✅ **Use Case**: Cross-cutting concerns like authentication, logging, theming.

---

## 🧠 Machine Coding Round

### Expectations:

* Clean Code: Reusable components
* State Management: Clear, predictable
* Folder Structure: Component-based
* Best Practices: Accessibility, optimization

✅ **Examples**: To-do app, product list filter, weather app, movie list with search.

---

## ⚙️ State Management

### Props vs State

* **Props**: Read-only, passed from parent.
* **State**: Mutable, local to component.

### Prop Drilling

Passing props through many components to reach a deeply nested child.

### Context API

Global state management alternative to Redux for small-medium apps.

✅ **Best For**: Themes, Auth, Language.

---

## 🌍 Redux / Zustand

### Redux

* Central store
* Actions dispatch to reducers
* Updated state triggers re-render

#### Example:

```js
store.dispatch({ type: 'INCREMENT' });
```

### Redux Toolkit (RTK)

* Simplifies setup with slices and async logic

✅ **Use Case**: Large apps, consistent state logic

### Zustand

* Minimal, lightweight state library
* No boilerplate

✅ **Use Case**: Replaces Redux in smaller projects

---

## 🧾 Custom Hooks

### Why?

* Reuse stateful logic across components

#### Example:

```js
function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(s => !s);
  return [state, toggle];
}
```

✅ **Use Case**: Clean, reusable code (e.g. toggles, timers)

---

## 🚀 Lazy Loading & Suspense

### What?

Load components on demand to reduce initial load.

#### Example:

```js
const LazyComp = React.lazy(() => import('./HeavyComp'));

<Suspense fallback={<Loader />}>
  <LazyComp />
</Suspense>
```

✅ **Use Case**: Performance in large-scale apps

---

## 🧪 Virtual DOM & React Fiber

### Virtual DOM

* A lightweight copy of the actual DOM
* React updates only the parts that change

### React Fiber

* Handles rendering priorities
* Async rendering

### Diffing Algorithm

* Efficiently compares old vs new VDOM
* Updates only what is necessary

📌 **Visualization**:

```
[Old VDOM] ← diff → [New VDOM] → DOM Patch
```

✅ **Use Case**: Smooth UI updates, performance optimization
