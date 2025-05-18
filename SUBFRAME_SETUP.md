# Subframe Setup Guide for PixCrab

This guide will help you push your PixCrab project to Subframe.

## Prerequisites
- Your Subframe access token: `c31c04e2b8b8dc35b51849a921296777fc81251888e759d69cd2e91f864d4c35`
- Your project has already been pushed to GitHub

## Step 1: Initialize Subframe

Run the following command in your terminal:

```bash
npx @subframe/cli@latest init
```

When prompted:
- Paste your access token: `c31c04e2b8b8dc35b51849a921296777fc81251888e759d69cd2e91f864d4c35`
- Where should components be synced to? Enter: `./src/components/ui`
- Configure alias: Enter: `@/components/ui/*`
- Configure Tailwind? Enter: `Y`
- Sync all components? Enter: `Y`
- Install dependencies? Enter: `Y`

## Step 2: Sync Your Components

After initialization is complete, sync your components:

```bash
npx @subframe/cli@latest sync --all
```

## Step 3: Create a Sample Component (Optional)

If you want to create a sample component to test the sync:

1. Create a file at `src/components/ui/Button.jsx` with the following content:

```jsx
// Button.jsx
import React from 'react';

/**
 * A customizable button component with rainbow glow effect
 */
export default function Button({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  onClick,
  ...props 
}) {
  const baseClasses = 'rainbow-button';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'btn-text'
  };
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant] || ''} ${sizeClasses[size] || ''} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
```

2. Run the sync command again to push this component to Subframe:

```bash
npx @subframe/cli@latest sync --all
```

## Disabling Sync for Specific Components

If you make changes to a component and don't want Subframe to overwrite them, add this comment at the top of the file:

```jsx
// @subframe/sync-disable
```

## Troubleshooting

If you encounter any issues:
1. Make sure your authentication token is correct
2. Check that your Vite configuration has the proper alias setup (yours already does)
3. Refer to the [Subframe documentation](https://docs.subframe.com/installation) for more detailed instructions
