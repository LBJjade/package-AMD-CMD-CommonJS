class VNode {
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


// 你的知道浏览器的虚拟DOM与真实DOM的区别（注意：需不需要虚拟DOM，其实与框架的DOM操作机制有关）：

// 虚拟DOM不会进行排版与重绘操作

// 虚拟DOM进行频繁修改，然后一次性比较并修改真实DOM中需要改的部分（注意！），最后并在真实DOM中进行排版与重绘，减少过多DOM节点排版与重绘损耗

// 真实DOM频繁排版与重绘的效率是相当低的

// 虚拟DOM有效降低大面积（真实DOM节点）的重绘与排版，因为最终与真实DOM比较差异，可以只渲染局部（同2）

// 使用虚拟DOM的损耗计算：

// 总损耗 = 虚拟DOM增删改 + （与Diff算法效率有关）真实DOM差异增删改 + （较少的节点）排版与重绘
// 直接使用真实DOM的损耗计算：

// 总损耗 = 真实DOM完全增删改 + （可能较多的节点）排版与重绘
// 总之，一切为了减弱频繁的大面积重绘引发的性能问题，不同框架不一定需要虚拟DOM，关键看框架是否频繁会引发大面积的DOM操作

