class BasePresenter {
    constructor(view) {
        this.view = view;
    }

    // Update the view with new model data
    update(model) {
        this.view.render(model);
    }

    // Abstract method to be implemented by child classes
    render(model) {
        throw new Error('render() must be implemented by child class');
    }

    // Helper method to create DOM elements
    createElement(tag, className, text = '') {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (text) {
            element.textContent = text;
        }
        return element;
    }

    // Helper method to add event listeners
    addEventListeners(element, events) {
        Object.entries(events).forEach(([event, handler]) => {
            element.addEventListener(event, handler);
        });
    }
}

export default BasePresenter; 