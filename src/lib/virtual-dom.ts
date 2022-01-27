/*
 * TODO: This could be published as separate package as aria-live-capture also relies on it
 */

interface Attribute {
    key: string;
    value: string;
}

export function update(current: Node, next: Node): void {
    if (shouldUpdateWholeNode(current, next)) {
        const nextContent = isElement(next) ? next.outerHTML : next.textContent;

        if (isElement(current)) {
            current.outerHTML = nextContent || '';
        } else {
            current.textContent = nextContent;
        }

        // No need to traverse children
        return;
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

function isTextNode(
    node: Node
): node is Node & { type: typeof Node.TEXT_NODE } {
    return node.nodeType === Node.TEXT_NODE;
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
