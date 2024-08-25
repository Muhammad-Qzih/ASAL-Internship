const createStyleElement = () => {
  const style = document.createElement("style");

  const css = `
    .shape-container {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(42%, 1fr)); 
      gap: 30px;
    }

    @media (max-width: 600px) {
      .shape-container {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); 
        gap: 20px 10px;
      }
    }
  `;

  style.styleSheet
    ? (style.styleSheet.cssText = css)
    : style.appendChild(document.createTextNode(css));

  return style;
};

const appendStyleIfNotExists = () => {
  if (!document.querySelector('style[data-custom-style="true"]')) {
    const styleElement = createStyleElement();
    styleElement.setAttribute("data-custom-style", "true");
    document.head.appendChild(styleElement);
  }
};

const removeExistingShapes = () => {
  const existingShapes = document.querySelector(".shape-container");
  
  if (existingShapes) {
    existingShapes.remove();
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const shapeSelect = document.getElementById("shapes");
  const colorSelect = document.getElementById("colors");
  const numberSelect = document.getElementById("numbers");

  const selectedShape = shapeSelect.value;
  const selectedColor = colorSelect.value;
  const selectedNumber = parseInt(numberSelect.value, 10);

  appendStyleIfNotExists();

  removeExistingShapes();

  const parentDiv = document.createElement("div");
  parentDiv.className = "shape-container";

  for (let i = 1; i <= selectedNumber; i++) {
    const itemDiv = document.createElement("div");

    itemDiv.className = `${selectedShape}`;
    itemDiv.setAttribute("data-color", selectedColor);
    itemDiv.style.margin = "0 auto";

    const color = itemDiv.getAttribute("data-color");
    itemDiv.style.setProperty("--box-color", color);

    parentDiv.appendChild(itemDiv);
  }

  const submitButton = document.querySelector("button[type='submit']");
  const form = document.querySelector("form");
  form.insertBefore(parentDiv, submitButton);
};

const form = document.querySelector("form");
const numberInput = document.getElementById("numbers");

form.addEventListener("submit", handleFormSubmit);
numberInput.addEventListener("input", toggleSubmitButton);
