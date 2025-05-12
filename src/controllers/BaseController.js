class BaseController {
    constructor(model, presenter) {
        this.model = model;
        this.presenter = presenter;
        this._bindModelEvents();
    }

    // Bind model events to controller methods
    _bindModelEvents() {
        this.model.addListener(this._onModelChange.bind(this));
    }

    // Handle model changes
    _onModelChange(model) {
        this.presenter.update(model);
    }

    // Abstract method to be implemented by child classes
    async initialize() {
        throw new Error('initialize() must be implemented by child class');
    }

    // Abstract method to be implemented by child classes
    async handleEvent(event, data) {
        throw new Error('handleEvent() must be implemented by child class');
    }
}

export default BaseController; 