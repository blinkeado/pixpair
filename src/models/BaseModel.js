class BaseModel {
    constructor() {
        this._listeners = new Set();
    }

    // Add a listener for model changes
    addListener(listener) {
        this._listeners.add(listener);
    }

    // Remove a listener
    removeListener(listener) {
        this._listeners.delete(listener);
    }

    // Notify all listeners of a change
    notifyListeners() {
        this._listeners.forEach(listener => listener(this));
    }

    // Abstract method to be implemented by child classes
    async save() {
        throw new Error('save() must be implemented by child class');
    }

    // Abstract method to be implemented by child classes
    async load() {
        throw new Error('load() must be implemented by child class');
    }
}

export default BaseModel; 