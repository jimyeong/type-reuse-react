import * as React from 'react';
interface IBtnProps{
    btnName: string;
    className: string;
    onClick?(): void;
}

class Btn extends React.Component<IBtnProps> {
    constructor(props: IBtnProps){
        super(props)

    }

    public render(){
        const { props } = this;
        return(
            <button
                className={props.className}
                onClick={props.onClick}
            >
                {props.btnName}
            </button>
        )
    }
}


export default Btn;