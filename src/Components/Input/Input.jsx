import styled from 'styled-components';

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    padding: ${props => props.padding};
    content: ${props => props.content};
    input{
        width: 100%;
        border: none;
        outline: none;
        font-size: ${props => props.fontSize};
    }
    input[type=text]:focus{
        border: ${props => props.borderFocus};
    }
    .ip-ip{
        width: ${props => props.widthIpIp};
    }
    .iconright{
        src: url(${props => props.iconRight});
    }
    .iconleft{
        src: url(${props => props.iconLeft});
    }
    .icon-ip{
        display: inline-block;
        width: ${props => props.widthIconIp};
        margin: ${props => props.marginIcon};
    }
    color: ${props => props.textColor};
`;

const Input = ({width, height, content, bgColor, border, borderRadius, borderFocus, padding, fontSize, widthIpIp, widthIconIp, marginIcon, iconRight, iconLeft, textColor, children, ...rest}) => {
    return <StyledInput 
        width={width}
        height={height}
        content={content}
        bgColor={bgColor}
        borderRadius={borderRadius}
        border={border}
        borderFocus={borderFocus}
        padding={padding}
        fontSize={fontSize}
        widthIpIp={widthIpIp}
        widthIconIp={widthIconIp}
        marginIcon={marginIcon}
        iconRight={iconRight}
        iconLeft={iconLeft}
        textColor={textColor}
        {...rest}
    >
        {iconLeft &&
        <div className='icon-ip'>
            <img className='iconleft' src={iconLeft} alt="icon" />
        </div>
        }
        <div className='ip-ip'>
            <input type="text" placeholder={content} />
        </div>
        {iconRight &&
        <div className='icon-ip'>
            <img className='iconright' src={iconRight} alt="icon" />
        </div>
        }
    </StyledInput>
}

export default Input;

Input.defaultProps = {
    width: "150px",
    bgColor: "white",
}