/**
 * 에디터에 드디어 내장된 JSDoc 주석 작성 방식으로 아래의 함수를 설명한다.
 * 
 * @param {string} elementNode
 * @param {object} attributes
 * @param {array} children
 * @returns string
 * 
 * @example
 * componet(
 *  'div',
 *  { style: 'color:blue;' },
 *  [component('h1', {}, ['This is Page 1'])
 * ]);
 * 
 */

function component(elementNode, attributes, children) {

  // HTML Element 문자열로 '조립(assemble)' 하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) { // 객체의 키(key)를 배열처럼 순회한다.
    // 매개변수 attributes는 객체여야 for in 문을 사용할 수 있다.
    // 대표적으로 python 에서는 해당 문법 접근이 기본 반복문이다.
    elementStr += `${key}="${attributes[key]}"`;
  }
}