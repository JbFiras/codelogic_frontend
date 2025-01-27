'use client';
import React, {useState} from "react";
import ReactiveButton from "reactive-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faCircleNotch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function ButtonReactive({ text,type,block=false,  autoRedirect=false ,disabled = false, className = "", style = {} }) {
    const [state, setState] = useState('idle');
    const router = useRouter();

    const onClickHandler = () => {
        setState('loading');

        setTimeout(() => {
            setState('success');
            if (autoRedirect) {
                router.push("/connect");
            }
        }, 2000);
    };
    return (
        <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'teal'}
            idleText={text ? text:"Click me"}
            loadingText={
                <>
                    <FontAwesomeIcon icon={faCircleNotch} spin /> Loading
                </>
            }
            successText={
                <>
                    <FontAwesomeIcon icon={faThumbsUp} /> Success
                </>
            }
            errorText={
                <>
                    <FontAwesomeIcon icon={faBomb} /> Error
                </>
            }
            type={type ? type: 'button'}
            className={'class1 class2'}
            style={{
                borderRadius: '5px',
            }}
            outline={true}
            shadow={true}
            rounded={true}
            size={'normal'}
            block={block ? block: true}
            messageDuration={2000}
            disabled={disabled}
            buttonRef={null}
            width={null}
            height={null}
            animation={false}
        />
    );
}

