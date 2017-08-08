export default (props) => {
    let borderColor = props.borderColor || 'rgba(151, 151, 151, .5)';
    
    let style = {
        container: {
            margin: '2rem'
        },
        text: {
            padding: '1rem',
            borderRadius: '8px 8px 0 0',
            backgroundColor: '#fff',
            border: '1px solid ' + borderColor,
            color: '#7F7E7F',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            fontSize: '2rem'
        },
        buttonContainer: {
            display: 'flex',
        },
        button: {
            flexGrow: '1',
            backgroundColor: '#fff',
            color: '#7F7E7F',
            textAlign: 'center',
            fontSize: '2rem',
            lineHeight: '4rem',
            border: '1px solid ' + borderColor,
            borderTop: '0'
        }
    };

    style.buttonLeft = {...style.button, ...{
        borderRadius: '0 0 0 8px',
        borderRight: '0'
    }}

    style.buttonRight = {...style.button, ...{
        borderRadius: '0 0 8px 0'
    }};

    return <div style={style.container}>
        <div style={{...style.text, ...props.textStyle}}>{props.text}</div>
        <div style={style.buttonContainer}>
            <div style={style.buttonLeft} onClick={props.onLeftClick}>{props.buttonLeftText}</div>
            <div style={style.buttonRight} onClick={props.onRightClick}>{props.buttonRightText}</div>
        </div>
    </div>;
}