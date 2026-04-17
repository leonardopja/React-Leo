import React from 'react'

function JSXElement() {
  return (
    <p>
      This is a simple paragraph written in <strong>JSX</strong>.
    </p>
  )
}

function ComplexJSXElement() {
  return (
    <section>
      <h3>Complex example</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>
  )
}

function CommentExample() {
  return (
    <div>
      {/* This comment is inside JSX */}
      <p>JSX comments use curly braces and slash syntax.</p>
    </div>
  )
}

function SelfClosingTagExample() {
  return (
    <div>
      <img
        src="https://via.placeholder.com/320x120"
        alt="Self-closing tag example"
      />
      <br />
      <input placeholder="Type something..." />
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <h1>React: Learning JSX</h1>

      <section className="section">
        <h2>1. Create a Simple JSX Element</h2>
        <div className="example-card">
          <JSXElement />
        </div>
      </section>

      <section className="section">
        <h2>2. Create a Complex JSX Element</h2>
        <div className="example-card">
          <ComplexJSXElement />
        </div>
      </section>

      <section className="section">
        <h2>3. Add Comments in JSX</h2>
        <div className="example-card">
          <CommentExample />
        </div>
      </section>

      <section className="section">
        <h2>4. Render HTML Elements to the DOM</h2>
        <div className="example-card">
          <p>
            This paragraph is rendered to the DOM as part of this React component.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App

function App() {
  return (
    <div className="app-container">
      <h1>React: 10 steps implemented</h1>

      <section className="section">
        <h2>1. Create a Simple JSX Element</h2>
        <div className="example-card">
          <JSXElement />
        </div>
      </section>

      <section className="section">
        <h2>2. Create a Complex JSX Element</h2>
        <div className="example-card">
          <ComplexJSXElement />
        </div>
      </section>

      <section className="section">
        <h2>3. Add Comments in JSX</h2>
        <div className="example-card">
          <CommentExample />
        </div>
      </section>

      <section className="section">
        <h2>4. Render HTML Elements to the DOM</h2>
        <div className="example-card">
          <p>
            This paragraph is rendered to the DOM as part of this React component.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>5. Define an HTML Class in JSX</h2>
        <div className="example-card">
          <p className="highlight">This text uses a CSS class applied with className.</p>
        </div>
      </section>

      <section className="section">
        <h2>6. Learn About Self-Closing JSX Tags</h2>
        <div className="example-card">
          <SelfClosingTagExample />
        </div>
      </section>

      <section className="section">
        <h2>7. Create a Stateless Functional Component</h2>
        <div className="example-card">
          <GreetingCard
            name="Carol"
            title="This is a stateless functional component."
          />
        </div>
      </section>

      <section className="section">
        <h2>8. Create a React Component</h2>
        <div className="example-card">
          <p>The <strong>GreetingCard</strong> component above is a reusable React component.</p>
        </div>
      </section>

      <section className="section">
        <h2>9. Create a Component with Composition</h2>
        <div className="example-card">
          <ComponentComposition />
        </div>
      </section>

      <section className="section">
        <h2>10. Use React to Render Nested Components</h2>
        <div className="example-card">
          <NestedComponents />
        </div>
      </section>

      <div className="footer">
        <p>Use <code>npm install</code> and <code>npm run dev</code> to run.</p>
      </div>
    </div>
  )
}

export default App
