/* eslint-disable no-undef */
const renderResult = (data) => {
  const infoSection = getElement('#info-section');
  deleteChild(infoSection);
  const filtered = data.stock.filter((item) => item.distributor.distributor_name === 'Digi-Key China');
  const table = createElement('table', 'table');
  const tHead = createElement('thead', 'thead');
  const trFirstHead = createElement('tr', 'trFisrtHead');
  const tdFirstTR = createElement('td', 'tdFisrtTR');
  tdFirstTR.colSpan = '4';
  const logo = createImage('img', null, 'logo', filtered[0].distributor.distributor_logo);
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
  filtered.forEach((component) => {
    const trTbody = createElement('tr', 'info');
    const partNumberData = createElement('td', null, component.part_number);
    const manufacturerData = createElement('td', null, component.manufacturer);
    const descriptionData = createElement('td', null, component.description);
    const dataSheetData = createElement('td', null);
    if (component.datasheet_url.length !== 0) {
      const dataSheetLink = createElement('a');
      dataSheetLink.href = component.datasheet_url;
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
  table.append(tHead, tBody);
  infoSection.appendChild(table);
};
