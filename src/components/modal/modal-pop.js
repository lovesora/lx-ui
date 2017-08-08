import Modal from './modal-defult';
import PopBox from '../pop-box/pop-box';

class ModalPop extends Modal {
    constructor (...args) {
        super(args);
        this.state.isOpen = this.props[0][0].isOpen;
    }

    closeBgModal (e) {
        return;
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