# PixCrab MCP Architecture

This document outlines the Model-Controller-Presenter (MCP) architecture used in the PixCrab application.

## Architecture Overview

The PixCrab application uses the Model-Controller-Presenter (MCP) pattern, which is a variant of the Model-View-Controller (MVC) pattern. This architecture separates concerns and makes the code more maintainable, testable, and extensible.

### Components

1. **Models**: Represent the data and business logic of the application. Models are responsible for data storage, retrieval, and manipulation.
2. **Controllers**: Handle user interactions and business logic. Controllers coordinate between models and presenters.
3. **Presenters**: Handle UI updates and view logic. Presenters update the view based on model changes.
4. **Services**: Handle external services like Firebase. They provide a clean API for interacting with external systems.
5. **Utils**: Provide utility functions used throughout the application.

## Directory Structure

```
src/
├── models/        # Data models
├── controllers/   # Business logic controllers
├── presenters/    # UI presentation logic
├── services/      # External service integrations
└── utils/         # Utility functions
```

## Core Components

### Models

- **BaseModel**: The foundation for all models with event handling capabilities
- **UserModel**: Handles user authentication and profile data
- **SessionModel**: Manages session creation, joining, and participant tracking
- **PhotoModel**: Handles photo capture, storage, and retrieval

### Controllers

- **BaseController**: Foundation for all controllers
- **AuthController**: Manages user authentication
- **SessionController**: Handles session creation, joining, and coordination
- **PhotoController**: Manages photo capture and processing

### Presenters

- **BasePresenter**: Foundation for all presenters
- **AuthPresenter**: Manages authentication UI
- **SessionPresenter**: Handles session setup and management UI
- **PhotoPresenter**: Manages camera view and photo display

### Services

- **FirebaseService**: Provides Firebase authentication, database, and storage functionality

### Utils

- **AppUtils**: Provides common utility functions

## Data Flow

The typical data flow in the MCP architecture is:

1. User interacts with the UI
2. Presenter triggers an event to the Controller
3. Controller processes the event, updates the Model as needed
4. Model notifies listeners (including the Controller) of changes
5. Controller tells the Presenter to update the UI
6. Presenter updates the UI

## Example: Capturing a Photo

1. User clicks the capture button
2. PhotoPresenter triggers 'capturePhoto' event to PhotoController
3. PhotoController calls PhotoModel.capturePhoto()
4. PhotoModel captures the photo and notifies listeners
5. PhotoController tells PhotoPresenter to update the UI
6. PhotoPresenter displays the captured photo

## Tips for Debugging

1. **Debug Console**: Access the debug console by clicking the small button in the bottom right corner
2. **Event Flow**: All events flow through controllers, so add logging there to track user actions
3. **Model Updates**: Models notify listeners when they change, so add logging in the update methods
4. **Firebase Console**: Check Firebase console for database and storage operations
5. **Console Errors**: Look for errors in the browser console

## How to Extend

### Adding a New Feature

1. Identify which Model, Controller, and Presenter will be affected
2. Add new methods to the Model for data operations
3. Add event handling to the Controller
4. Add UI updates to the Presenter
5. Wire everything together in app.js

### Creating a New Component

1. Create a new Model that extends BaseModel
2. Create a new Controller that extends BaseController
3. Create a new Presenter that extends BasePresenter
4. Update app.js to initialize and connect the new components

## Development Process

1. Start with defining the Model and its data structures
2. Implement the Controller business logic
3. Create the Presenter for UI updates
4. Test the feature manually
5. Refine and optimize

## Flow of Control

1. User interacts with the UI
2. The UI event is handled by a Presenter
3. The Presenter triggers an event in the Controller
4. The Controller updates the Model as needed
5. The Model notifies all listeners (including the Controller) of changes
6. The Controller updates the Presenter
7. The Presenter updates the UI

## Getting Started

To work with this architecture:

1. Models should extend `BaseModel` and implement `save()` and `load()` methods
2. Controllers should extend `BaseController` and implement `initialize()` and `handleEvent()` methods
3. Presenters should extend `BasePresenter` and implement `render()` method

## Example Flow

For a user authentication flow:

1. User clicks "Sign In with Google" button
2. `AuthPresenter` triggers a 'googleSignIn' event to the `AuthController`
3. `AuthController` calls `UserModel.signInWithGoogle()`
4. `UserModel` uses `FirebaseService` to authenticate with Google
5. `UserModel` updates its state and notifies listeners
6. `AuthController` receives the update and calls `AuthPresenter.update()`
7. `AuthPresenter` updates the UI to show the authenticated state

## Benefits

- **Separation of Concerns**: Each component has a single responsibility
- **Testability**: Components can be tested in isolation
- **Maintainability**: Changes to one component do not affect others
- **Reusability**: Components can be reused across the application
- **Scalability**: New features can be added by creating new component sets 