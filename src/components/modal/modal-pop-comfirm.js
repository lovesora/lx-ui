import Modal from './modal-defult';
import PopConfirm from '../pop-box/pop-confirm';

class ModalPopComfirm extends Modal {
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
            <PopConfirm 
                text={this.props.text}
                borderColor={this.props.borderColor}
                buttonLeftText={this.props.buttonLeftText}
                buttonRightText={this.props.buttonRightText}
                onRightClick={() => {
                    this.setState({
                        isOpen: false
                    });
                    this.props.onCancel && this.props.onCancel();
                }}
                onLeftClick={() => {
                    this.setState({
                        isOpen: false
                    });
                    this.props.onOk && this.props.onOk();
                }}
            />
        </div>);
    }
}

export default ModalPopComfirm;