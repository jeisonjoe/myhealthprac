import SplitText from "gsap/SplitText";

export function initTextSplit(container, selector) {
    const texts = container.current.querySelectorAll(selector);
    texts.forEach((text) => {
        const split = new SplitText(text, {
            type: "lines",
            linesClass: "line",
        });
        split.lines.forEach(
            (line) => (line.innerHTML = `<span>${line.textContent}</span>`)
        );
    });
}