export function queryRenderedItems(arr, [numberOfItems, filterName]) {

  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  } 

  if (!numberOfItems && !filterName) return arr;

  let filteredArr = arr;

  // Apply name filter if provided
  if (filterName) {
    filteredArr = filteredArr.filter((item) => {
        const nameId = item.dataset.nameId; 
        return nameId && nameId.toLowerCase().includes(filterName.toLowerCase());
    });
  }

  // Apply item limit if valid
  if (+numberOfItems && +numberOfItems > 0) {
    filteredArr = filteredArr.slice(0, numberOfItems);
  }

  return filteredArr;
}
