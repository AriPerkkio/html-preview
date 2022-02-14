/*
 * TODO: This could be published as separate package as aria-live-capture also relies on it
 */

interface Attribute {
    key: string;
    value: string;
}

export function update(current: Node, next: Node): void {
    if (shouldUpdateWholeNode(current, next)) {
        // No need to traverse children
        return updateWholeNode(current, next);
    }

    const childrenToAdd = Array.from(next.childNodes).slice(
        current.childNodes.length
    );
    const childrenToRemove: Node[] = [];

    current.childNodes.forEach((currentChild, index) => {
        const nextChild = next.childNodes[index];

        if (!nextChild) {
            return childrenToRemove.push(currentChild);
        }

        if (currentChild.hasChildNodes() || nextChild.hasChildNodes()) {
            update(currentChild, nextChild);
        }

        if (isTextNode(currentChild) && isTextNode(nextChild)) {
            if (currentChild.textContent !== nextChild.textContent) {
                currentChild.textContent = nextChild.textContent;
            }
        }
    });

    for (const child of childrenToRemove) {
        current.removeChild(child);
    }

    for (const child of childrenToAdd) {
        current.appendChild(child);
    }

    if (isElement(current)) {
        const currentAttributes = getAttributes(current);
        const nextAttributes = getAttributes(next);

        const nextIsElement = isElement(next);

        for (const { key, value } of nextAttributes) {
            // Update changed attributes and add new attributes
            if (current.getAttribute(key) !== value) {
                current.setAttribute(key, value);
            }
        }

        for (const { key } of currentAttributes) {
            if (nextIsElement) {
                // Remove missing attributes
                if (!next.hasAttribute(key)) {
                    current.removeAttribute(key);
                }
            }
        }
    }
}

function isElement(node: Node | null): node is Element {
    return node != null && node.nodeType === Node.ELEMENT_NODE;
}

function isTextNode(node: Node | null): node is Text {
    return node != null && node.nodeType === Node.TEXT_NODE;
}

function getAttributes(node: Node): Attribute[] {
    if (!isElement(node)) return [];

    return node
        .getAttributeNames()
        .reduce(
            (all, key) => [
                ...all,
                { key, value: node.getAttribute(key) || '' },
            ],
            [] as Attribute[]
        );
}

function shouldUpdateWholeNode(current: Node, next: Node): boolean {
    if (current.nodeType !== next.nodeType) {
        return true;
    }

    if (isElement(current) && isElement(next)) {
        return current.tagName !== next.tagName;
    }

    return current.textContent !== next.textContent;
}

function updateWholeNode(current: Node, next: Node): void {
    // Previous element can be completely replaced with new node
    if (isElement(current)) {
        current.replaceWith(next);
    }
    // Previous text node can be replaced with new text
    else if (isTextNode(current) && isTextNode(next)) {
        current.textContent = next.textContent;
    }
    // Previous text node can be replaced with new node
    else if (isTextNode(current) && isElement(next)) {
        if (current.parentElement) {
            current.parentElement.replaceChild(next, current);
        } else {
            console.warn(`Unexpected case, missing parentElement: ${current}`);
        }
    } else {
        console.warn(
            [
                'Unexpected case:',
                `isElement(current): ${isElement(current)}`,
                `isTextNode(current): ${isTextNode(current)}`,
                `isElement(next): ${isElement(next)}`,
                `isTextNode(next): ${isTextNode(next)}`,
            ].join(' ')
        );
    }
}