import './index.css';
import generateCourseValue from './courseValue';

// debugger; For souremaps to find
const courseValue = generateCourseValue(1000);
// eslint-disable-next-line no-console
console.log(`I would pay ${courseValue} for this awesome course`);

export default generateCourseValue;
