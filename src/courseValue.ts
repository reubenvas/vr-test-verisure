import numeral from 'numeral'; // added a custom type for this, see ./types/numeral.d.ts

const generateCourseValue = (valueNum: number): string => {
    const courseValue = numeral(valueNum).format('$0.0.00');
    return courseValue;
};

export default generateCourseValue;
