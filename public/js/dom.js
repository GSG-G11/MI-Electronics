/* eslint-disable no-undef */
const infoSection = getElement('#info-section');
const username = getElement('.username');
username.textContent = localStorage.getItem('username');

const renderResult = (data) => {
  deleteChild(infoSection);
  Object.values(data).forEach((val) => {
    const table = createElement('table', 'table');
    const tHead = createElement('thead', 'thead');
    const trFirstHead = createElement('tr', 'trFisrtHead');
    const tdFirstTR = createElement('td', 'tdFisrtTR');
    tdFirstTR.colSpan = '4';
    const logo = createImage('img', null, 'logo', Object.values(val)[0].distributor.distributor_logo);
    tdFirstTR.appendChild(logo);
    trFirstHead.appendChild(tdFirstTR);
    const trSecondHead = createElement('tr', 'trSecondHead');
    const partNumber = createElement('td', 'title', 'Part Number');
    const manufacturer = createElement('td', 'title', 'manufacturer');
    const description = createElement('td', 'title', 'Description');
    const dataSheet = createElement('td', 'title', 'DataSheet');
    trSecondHead.append(partNumber, manufacturer, description, dataSheet);
    tHead.append(trFirstHead, trSecondHead);
    const tBody = createElement('tbody', 'tbody');
    table.append(tHead, tBody);
    infoSection.appendChild(table);
    Object.values(val).forEach((ele) => {
      const trTbody = createElement('tr', 'info');
      const partNumberData = createElement('td', null, ele.part_number);
      const manufacturerData = createElement('td', null, ele.manufacturer);
      const descriptionData = createElement('td', null, ele.description);
      const dataSheetData = createElement('td', null);
      if (ele.datasheet_url.length !== 0) {
        const dataSheetLink = createElement('a');
        dataSheetLink.href = ele.datasheet_url;
        dataSheetLink.target = '_BLANK';
        const iconPdf = createElement('i', 'fas fa-file-pdf ');
        dataSheetLink.appendChild(iconPdf);
        dataSheetData.appendChild(dataSheetLink);
      } else {
        const iconPdf = createElement('i', 'fas fa-file-pdf ');
        iconPdf.classList.add('fa-file-pdf-null');
        dataSheetData.appendChild(iconPdf);
      }
      trTbody.append(partNumberData, manufacturerData, descriptionData, dataSheetData);
      tBody.appendChild(trTbody);
    });
  });
};
getElement('#submitForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = getElement('#name');
  deleteChild(infoSection);
  if (value.length === 0) {
    deleteChild(infoSection);
    getElement('.error').textContent = 'the value must not be empty';
  } else {
    getElement('.error').textContent = '';
    getElement('.loading').classList.toggle('display');
    fetch('/search', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ component: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.stock?.length !== 0) {
          getElement('.loading').classList.toggle('display');
          renderResult(data.stock);
        } else {
          deleteChild(infoSection);
          getElement('.loading').classList.toggle('display');
          getElement('.error').textContent = 'this is invalied value';
        }
      })
      .catch((err) => { getElement('.error').textContent = err; });
  }
  getElement('#name').value = '';
});

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 500) {
    getElement('.btn-Up').style.display = 'block';
  } else {
    getElement('.btn-Up').style.display = 'none';
  }
};
window.onscroll = () => scrollFunction();

getElement('.btn-Up').addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
