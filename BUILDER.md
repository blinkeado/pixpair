# Builder.io Integration for PixCrab

This branch integrates Builder.io visual editing capabilities into the PixCrab application, allowing for visual editing of layouts and components.

## Getting Started

### Prerequisites

1. A Builder.io account and API key
2. Node.js and npm installed

### Setup

1. Create a `.env` file in the project root with your Builder.io API key:

```
VITE_BUILDER_API_KEY=your_builder_api_key_here
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Access the Builder.io interface at [http://localhost:9000/builder](http://localhost:9000/builder)

## Integration Details

The Builder.io integration is implemented with the following structure:

- **`src/builder/builder-integration.jsx`**: Core integration file that initializes Builder.io and registers custom components
- **`src/components/builder/BuilderPage.jsx`**: Component for rendering Builder.io content
- **`src/builder/builder-styles.css`**: Styles to match Builder.io components with PixCrab's design

## Routes

- **`/builder`**: Main Builder.io interface
- **`/builder/:page`**: Dynamic Builder.io pages

## Custom Components

To register custom PixCrab components with Builder.io, edit the `registerComponents()` function in `src/builder/builder-integration.jsx`.

Example:

```javascript
Builder.registerComponent(YourCustomComponent, {
  name: 'Custom Component',
  inputs: [
    { name: 'text', type: 'string' }
  ]
});
```

## Troubleshooting

### White Screen Issues

If you encounter a white screen when viewing Builder.io pages:

1. Verify your API key is correctly set in the `.env` file
2. Check the browser console for any errors
3. Ensure the `baseUrl` in `vite.config.js` is set to `'./'` for development

### Network Errors

If you see network errors related to Builder.io:

1. Confirm your API key is valid and has proper permissions
2. Check that you've published content in the Builder.io dashboard
3. Verify your content model names match what's being requested in the code

## Resources

- [Builder.io Documentation](https://www.builder.io/c/docs/intro)
- [React SDK Documentation](https://www.builder.io/c/docs/react-sdk)
