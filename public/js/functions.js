/* eslint-disable no-unused-vars */
// function for seclect element
const getElement = (element) => document.querySelector(element);

// delete child element for parent element
const deleteChild = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

// function for create element
const createElement = (tag, nameClass = '', text = '') => {
  const element = document.createElement(tag);
  element.className = nameClass;
  element.textContent = text;
  return element;
};
// function for create image
const createImage = (tag, nameClass = '', alt = 'image', src = '#') => {
  const element = document.createElement(tag);
  element.className = nameClass;
  element.alt = alt;
  element.src = src;
  return element;
};
