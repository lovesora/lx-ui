import Modal from './modal-defult';
import PopConfirm from '../pop-box/pop-confirm';

class ModalPop extends Modal {
    constructor (...args) {
        super(args);
        this.state.isOpen = this.props[0][0].isOpen;
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            isOpen: nextProps.isOpen
        });
    }
    
    render () {
        return super.render(<div>
            <PopBox 
                text={this.props.text}
                textStyle={this.props.textStyle}
                buttonText={this.props.buttonText}
                onClick={() => {
                    this.setState({
                        isOpen: false
                    });
                    this.props.onCancel && this.props.onCancel();
                }}
            />
        </div>);
    }
}

export default ModalPop;