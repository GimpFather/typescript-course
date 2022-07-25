interface IValidateByLength {
	valueToValidate: string | number;
}

const validateByLength = ({ valueToValidate }: IValidateByLength): boolean => {
	if (valueToValidate.toLocaleString().trim().length === 0) return true;
	else return false;
};

export default validateByLength;
