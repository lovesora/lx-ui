class Modal extends React.Component {
    constructor (...args) {
        super(args);
        this.state = {
            isOpen: false
        }
    }
    
    closeBgModal (e) {
        if (e.target == e.currentTarget) {
            this.setState({
                isOpen: false
            });
        }
    }
    
    render (content, s) {
        let style = {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: this.state.isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            right: '0',
            left: '0',
            bottom: '0'
        };

        return <div style={{...style, ...s}} onClick={this.closeBgModal.bind(this)} >
                {content}
        </div>;
    }
}

export default Modal;