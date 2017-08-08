export default (props) => {
    let borderColor = props.borderColor || 'rgba(151, 151, 151, .5)';

    let style = {
        container: {
            padding: '2rem'
        },
        text: {
            padding: '1rem',
            border: '1px solid ' + borderColor,
            borderRadius: '8px 8px 0 0',
            backgroundColor: '#fff',
            color: '#7F7E7F',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            fontSize: '2rem'
        },
        button: {
            backgroundColor: '#fff',
            border: '1px solid ' + borderColor,
            borderTop: '0',
            borderRadius: '0 0 8px 8px',
            color: '#7F7E7F',
            textAlign: 'center',
            fontSize: '2rem',
            lineHeight: '4rem'
        }
    }
    return <div style={style.container}>
        <div style={{...style.text, ...props.textStyle}}>{props.text}</div>
        <div style={style.button} onClick={props.onClick}>{props.buttonText}</div>
    </div>;
}