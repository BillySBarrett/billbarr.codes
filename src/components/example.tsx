// components/ExampleComponent.js
const ExampleComponent = () => {
  return (
    <div className="p-4 bg-primary">
      <h1 className="text-primary">Hello, World!</h1>
      <p className="text-secondary">This is a themed component.</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className="bg-accent text-background p-2 rounded">
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;
