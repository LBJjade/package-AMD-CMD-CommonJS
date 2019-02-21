export default class VNode {
    constructor(tagName, attrs, children) {
        this.tagName = tagName
        this.attributes = attrs
        this.children = children
    }

    render() {
        let element = document.createElement(this.tagName)
        Object.keys(this.attributes).forEach(key => {
            element.setAttribute(key, this.attributes[key])
        })

        this.children.forEach(child => {
            element.appendChild(child.render())
        })

        return element
    }
}