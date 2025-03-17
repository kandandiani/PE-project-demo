/*******
 * @Author: wch
 * @Date: 2021-07-07 16:42:58
 * @LastEditTime: 2021-07-07 16:42:58
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \PE-project-demo\intersectionObserver\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const container = document.getElementById('m-listContainer');
const lis = document.querySelectorAll('#m-listContainer li');

// const dbData = Array.from(new Array(20)).map((item, idx) => idx);

const renderPage = (firstIndex) => {
  lis.forEach((item, idx) => {
    const li = item;
    li.innerHTML = firstIndex + idx;
  });
};

// const updateDb = (offset, limit = 10) => {
//     for (let i = 0; i < limit; i++) {
//         dbData.push(offset + i);
//     }
// };

renderPage(0);

const renderFunction = (firstIndex) => {
  renderPage(firstIndex);
};

const listScrollIns = new ListScroll({
  firstItemId: 'item-first',
  lastItemId: 'item-last',
  container,
  listSize: 21,
  itemHeight: 150,
  renderFunction
});

listScrollIns.startObserver();