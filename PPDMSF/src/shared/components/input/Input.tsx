import{TextInputProps} from 'react-native';
import{ContainerInput} from './input.style';

interface InputProps extends TextInputProps{
    margin?: string
}
const Input = ({...props}: InputProps) => {
    return (
        <ContainerInput {...props} />
    );

};

export default Input;
