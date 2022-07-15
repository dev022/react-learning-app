import { useState , useCallback, useEffect } from 'react';

export default function useCopyToClipboard(){
    const [isCopied, setCopied] = useState(false);

    const handleCopy = useCallback( (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    }, []);

    useEffect(()=>{
        // after click on copy, isCopied is reset after 3 second timeout
        if(isCopied){
            setTimeout(()=>{
                setCopied(false);
            },3000);
        }
    },[isCopied]);

    return [isCopied,handleCopy] as const;
}