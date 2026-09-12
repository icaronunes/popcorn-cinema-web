import React from "react";

export function useLanguage() {
    const [langague, setLangague] = React.useState("en"); // This can be dynamic based on user preference
    
    React.useEffect(() => {
        if (typeof navigator !== "undefined" && navigator.language == "pt-BR") {
            setLangague("pt");
        }
    }, [])
    return langague;
}